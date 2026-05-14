import * as Sentry from "@sentry/cloudflare"
import {createRequestHandler} from "react-router"

declare module "react-router" {
    export interface AppLoadContext {
        cloudflare: {
            env: Env
            ctx: ExecutionContext
        }
    }
}

const requestHandler = createRequestHandler(
    () => import("virtual:react-router/server-build"),
    import.meta.env.MODE,
)

const handler = {
    fetch(request, env, ctx) {
        return requestHandler(request, {
            cloudflare: {env, ctx},
        })
    },
} satisfies ExportedHandler<Env>

const sentryHandler = Sentry.withSentry(
    env => ({
        dsn: env.SENTRY_DSN,
        sendDefaultPii: true,
    }),
    handler,
)

export default sentryHandler
