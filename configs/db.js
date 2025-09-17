import { config } from "dotenv";
config();

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
const sql = neon(
  "postgresql://neondb_owner:npg_x45cTAZfkFGj@ep-orange-leaf-adjk21ua-pooler.c-2.us-east-1.aws.neon.tech/ai-video-generator?sslmode=require&channel_binding=require"
);

export const db = drizzle(sql);
