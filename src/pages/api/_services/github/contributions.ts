import { GITHUB_ACCESS_TOKEN } from 'astro:env/server'
import request from 'graphql-request'

import { GetGithubContributions } from '@/lib/graphql'
import type { GithubContributionData } from '@/types'
import { GITHUB_CONFIG } from '@/config/integrations'

const getGithubContributions = async (): Promise<GithubContributionData> => {
  try {
    if (!GITHUB_ACCESS_TOKEN) {
      console.error('GitHub access token is not configured')
      throw new Error('GitHub access token is not configured')
    }

    console.log('Fetching GitHub contributions for user:', GITHUB_CONFIG.username)
    
    const response = await request({
      url: 'https://api.github.com/graphql',
      document: GetGithubContributions,
      variables: { userName: GITHUB_CONFIG.username },
      requestHeaders: {
        Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`
      }
    })

    console.log('GitHub API response:', response)
    if (!response || !(response as any)?.user) {
      console.error('Invalid GitHub API response:', response)
      throw new Error('Failed to fetch GitHub contributions')
    }

    const user = (response as any).user
    const parsedResponse = user.contributionsCollection?.contributionCalendar
    
    if (!parsedResponse) {
      console.error('No contribution data found in response:', response)
      throw new Error('No contribution data found')
    }

    const lastPushedAt = user.repositories?.nodes?.[0]?.pushedAt
      ? new Date(user.repositories.nodes[0].pushedAt).getTime()
      : Date.now()
    
    return {
      lastPushedAt,
      totalContributions: parsedResponse.totalContributions || 0,
      contributions: (parsedResponse.weeks || []).flatMap((week: any) => {
        return (week.contributionDays || []).map((day: any) => ({
          count: day.contributionCount || 0,
          date: day.date ? day.date.replace(/-/g, '/') : ''
        })).filter((day: any) => day.date) // Filter out invalid dates
      })
    }
  } catch (error: any) {
    console.error('Error fetching GitHub contributions:', error)
    // Return a fallback response instead of throwing to prevent UI breakage
    return {
      lastPushedAt: Date.now(), // Convert to timestamp
      totalContributions: 0,
      contributions: []
    } as GithubContributionData
  }
}

export default getGithubContributions
