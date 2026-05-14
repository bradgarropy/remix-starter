import * as Sentry from "@sentry/cloudflare"
import {isbot} from "isbot"
import {renderToReadableStream} from "react-dom/server"
import type {EntryContext, HandleErrorFunction} from "react-router"
import {ServerRouter} from "react-router"

const streamTimeout = 5000

export const handleError: HandleErrorFunction = error => {
    Sentry.captureException(error)
    console.error(error)
}

const handleRequest = (
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    entryContext: EntryContext,
) => {
    return isbot(request.headers.get("user-agent") ?? "")
        ? handleBotRequest(
              request,
              responseStatusCode,
              responseHeaders,
              entryContext,
          )
        : handleBrowserRequest(
              request,
              responseStatusCode,
              responseHeaders,
              entryContext,
          )
}

const handleBotRequest = async (
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    entryContext: EntryContext,
) => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), streamTimeout)

    let didError = false

    const body = await renderToReadableStream(
        <ServerRouter context={entryContext} url={request.url} />,
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
    entryContext: EntryContext,
) => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), streamTimeout)

    let didError = false

    const body = await renderToReadableStream(
        <ServerRouter context={entryContext} url={request.url} />,
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
