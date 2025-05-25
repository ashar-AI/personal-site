import { GithubOutline as Github } from '@icons/GithubOutline'
import { Globe as Web } from '@icons/Globe'
import { Telegram } from '@icons/Telegram'
import { Android } from '@icons/Android'
import { AppStore } from '@icons/AppStore'

import { z } from 'astro:content'

export const PROJECT_ICONS = { Github, Web, Telegram, Android, AppStore }

// this is workaround since we can't pass ICONS directly to z.enum
const keys = Object.keys(PROJECT_ICONS)
export const iconSchema = z.enum([keys[0], ...keys.slice(1)])

export type ProjectIcon = keyof typeof PROJECT_ICONS
