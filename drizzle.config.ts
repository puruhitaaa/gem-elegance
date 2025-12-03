import type { Config } from "drizzle-kit"

import { env } from "@/env.mjs"

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["nextbet-shadlysia_*"],
} satisfies Config
