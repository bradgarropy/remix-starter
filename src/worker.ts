import {createRequestHandler, type ServerBuild} from "@remix-run/cloudflare"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - build/server doesn't exist until after `remix vite:build`
import * as build from "../build/server"
import {getLoadContext} from "./loadContext"

const handleRemixRequest = createRequestHandler(build as unknown as ServerBuild)

export default {
    async fetch(request, env, ctx) {
        try {
            const loadContext = getLoadContext({
                request,
                context: {
                    cloudflare: {
                        cf: request.cf,
                        ctx: {
                            waitUntil: ctx.waitUntil.bind(ctx),
                            passThroughOnException:
                                ctx.passThroughOnException.bind(ctx),
                            props: {},
                        },
                        caches,
                        env,
                    },
                },
            })
            return await handleRemixRequest(request, loadContext)
        } catch (error) {
            console.error(error)
            return new Response("An unexpected error occurred", {status: 500})
        }
    },
} satisfies ExportedHandler<Env>
