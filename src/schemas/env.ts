import { z } from 'zod'

export const env = z.object({
  VITE_VERSION: z.string().optional(),
  MODE: z
    .enum(['development', 'production', 'staging', 'test'])
    .default('development'),
  DEV: z.boolean(),
  FIREBASE_API_KEY: z.string(),
  FIREBASE_AUTH_DOMAIN: z.string(),
  FIREBASE_PROJECT_ID: z.string(),
  FIREBASE_STORAGE_BUCKET: z.string(),
  FIREBASE_MESSAGING_SENDER_ID: z.string(),
  FIREBASE_APP_ID: z.string(),
})

export type Env = z.infer<typeof env>
