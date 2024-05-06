import { z } from 'zod';

const schema = z.object({
  API_URL: z.string(),
  WEB_URL: z.string(),
});

type Config = z.infer<typeof schema>;

const config = {
  //   TODO add API URL
  API_URL: '',
  WEB_URL: 'http://localhost:3000',
} as Record<keyof Config, string | undefined>;

export default config;
