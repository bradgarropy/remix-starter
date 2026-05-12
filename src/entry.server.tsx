import type {AppLoadContext, EntryContext} from "@remix-run/cloudflare"
import {RemixServer} from "@remix-run/react"
import * as Sentry from "@sentry/remix"
import {isbot} from "isbot"
import {renderToReadableStream} from "react-dom/server"

import {createRelease} from "~/utils/sentry"

const streamTimeout = 5000

Sentry.init({
    dsn: process.env.VITE_SENTRY_DSN,
    environment: process.env.NODE_ENV,
    release: createRelease(),
})

export const handleError = Sentry.sentryHandleError

const handleRequest = (
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loadContext: AppLoadContext,
) => {
    return isbot(request.headers.get("user-agent") ?? "")
        ? handleBotRequest(
              request,
              responseStatusCode,
              responseHeaders,
              remixContext,
          )
        : handleBrowserRequest(
              request,
              responseStatusCode,
              responseHeaders,
              remixContext,
          )
}

const handleBotRequest = async (
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext,
) => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), streamTimeout)

    let didError = false

    const body = await renderToReadableStream(
        <RemixServer
            context={remixContext}
            url={request.url}
            abortDelay={streamTimeout}
        />,
        {
            signal: controller.signal,
            onError(error: unknown) {
                didError = true
                if (!controller.signal.aborted) {
                    console.error(error)
                }
            },
        },
    )

    // Bots wait for the entire stream so they get fully-rendered HTML.
    await body.allReady
    clearTimeout(timeoutId)

    responseHeaders.set("Content-Type", "text/html")
    return new Response(body, {
        headers: responseHeaders,
        status: didError ? 500 : responseStatusCode,
    })
}

const handleBrowserRequest = async (
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext,
) => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), streamTimeout)

    let didError = false

    const body = await renderToReadableStream(
        <RemixServer
            context={remixContext}
            url={request.url}
            abortDelay={streamTimeout}
        />,
        {
            signal: controller.signal,
            onError(error: unknown) {
                didError = true
                if (!controller.signal.aborted) {
                    console.error(error)
                }
            },
        },
    )

    // Browsers stream as soon as the shell is ready; allReady fires later in background.
    body.allReady.then(() => clearTimeout(timeoutId))

    responseHeaders.set("Content-Type", "text/html")
    return new Response(body, {
        headers: responseHeaders,
        status: didError ? 500 : responseStatusCode,
    })
}

export default handleRequest
export {streamTimeout}
