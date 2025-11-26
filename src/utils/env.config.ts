import { env } from '@schemas/env'
import { treeifyError } from 'zod'

const parsedEnv = env.safeParse(import.meta.env)

if (!parsedEnv.success) {
  console.error(treeifyError(parsedEnv.error)?.properties)
  throw new Error('Invalid environment variables', { cause: parsedEnv.error })
}

export const { DEV, MODE, TEST, VITE_VERSION } = parsedEnv.data
