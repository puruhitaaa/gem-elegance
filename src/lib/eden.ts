import { treaty } from "@elysiajs/eden"
import type { App } from "@/server"

// Use full URL for Server Components, relative for Client (if internal)
const domain =
  typeof window === "undefined"
    ? process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
    : ""

export const api = treaty<App>(domain)
