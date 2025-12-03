import { app } from "@/server"

// Next.js App Router expects named exports for HTTP methods
export const GET = app.fetch
export const POST = app.fetch
export const PUT = app.fetch
export const DELETE = app.fetch
export const PATCH = app.fetch
export const HEAD = app.fetch
