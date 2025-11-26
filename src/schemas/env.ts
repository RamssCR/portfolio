import { z } from 'zod'

export const env = z.object({
  VITE_VERSION: z.string().optional(),
  MODE: z
    .enum(['development', 'production', 'staging', 'test'])
    .default('development'),
  TEST: z.string(),
  DEV: z.boolean(),
})

export type Env = z.infer<typeof env>
