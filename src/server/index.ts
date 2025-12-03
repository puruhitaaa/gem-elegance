import { Elysia } from "elysia"
import { auth } from "./better-auth"

export const app = new Elysia({ prefix: "/api" }).mount(auth.handler)

export type App = typeof app // <--- Export type for Client
