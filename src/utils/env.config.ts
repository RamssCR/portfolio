import { env } from '@schemas/env'
import { treeifyError } from 'zod'

const parsedEnv = env.safeParse(import.meta.env)

if (!parsedEnv.success) {
  console.error(treeifyError(parsedEnv.error)?.properties)
  throw new Error('Invalid environment variables', { cause: parsedEnv.error })
}

export const {
  DEV,
  MODE,
  VITE_VERSION,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} = parsedEnv.data
