import { GITHUB_ACCESS_TOKEN } from 'astro:env/server'
import { GITHUB_CONFIG } from '@/config/integrations'

interface LastUpdatedTimeData {
  lastUpdatedTime: string
  latestCommitUrl: string
}

const getLastUpdatedTimeByFile = async (
  filePath: string
): Promise<LastUpdatedTimeData> => {
  try {
    const API_URL = `${GITHUB_CONFIG.api.repo}/commits?`

    const params = new URLSearchParams({
      path: `src/content/${filePath}`,
      per_page: '1'
    }).toString()

    const response = await fetch(API_URL + params, {
      headers: { Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}` }
    })

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`)
    }

    const data = await response.json()
    
    // Check if data is an array and has at least one element
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('No commit data returned from GitHub API')
    }

    const latestCommit = data[0]
    
    // Add null checks to prevent "not iterable" errors
    if (!latestCommit.commit?.committer?.date) {
      throw new Error('Commit data structure is not as expected')
    }

    return {
      lastUpdatedTime: latestCommit.commit.committer.date,
      latestCommitUrl: latestCommit.html_url
    }
  } catch (error) {
    console.error('Error fetching last updated time:', error)
    
    // Return fallback values in case of error
    return {
      lastUpdatedTime: new Date().toISOString(),
      latestCommitUrl: `${GITHUB_CONFIG.repository}/commits/main/src/content/${filePath}`,
    }
  }
}
export default getLastUpdatedTimeByFile
