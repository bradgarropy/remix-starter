import {PassThrough} from "node:stream"

import type {EntryContext} from "@remix-run/node"
import {createReadableStreamFromReadable} from "@remix-run/node"
import {RemixServer} from "@remix-run/react"
import * as Sentry from "@sentry/remix"
import {isbot} from "isbot"
import {renderToPipeableStream} from "react-dom/server"

const ABORT_DELAY = 5_000

Sentry.init({
    dsn: "https://bd22d6af8d5391631deea346947d86d0@o1037846.ingest.us.sentry.io/4508053968060416",
    autoInstrumentRemix: true,
    captureActionFormDataKeys: {},
    sendDefaultPii: true,
})

export const handleError = Sentry.sentryHandleError

const handleRequest = (
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext,
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

const handleBotRequest = (
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext,
) => {
    return new Promise((resolve, reject) => {
        let shellRendered = false
        const {pipe, abort} = renderToPipeableStream(
            <RemixServer
                context={remixContext}
                url={request.url}
                abortDelay={ABORT_DELAY}
            />,
            {
                onAllReady() {
                    shellRendered = true
                    const body = new PassThrough()
                    const stream = createReadableStreamFromReadable(body)

                    responseHeaders.set("Content-Type", "text/html")

                    resolve(
                        new Response(stream, {
                            headers: responseHeaders,
                            status: responseStatusCode,
                        }),
                    )

                    pipe(body)
                },
                onShellError(error: unknown) {
                    reject(error)
                },
                onError(error: unknown) {
                    responseStatusCode = 500
                    // Log streaming rendering errors from inside the shell.  Don't log
                    // errors encountered during initial shell rendering since they'll
                    // reject and get logged in handleDocumentRequest.
                    if (shellRendered) {
                        console.error(error)
                    }
                },
            },
        )

        setTimeout(abort, ABORT_DELAY)
    })
}

const handleBrowserRequest = (
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext,
) => {
    return new Promise((resolve, reject) => {
        let shellRendered = false
        const {pipe, abort} = renderToPipeableStream(
            <RemixServer
                context={remixContext}
                url={request.url}
                abortDelay={ABORT_DELAY}
            />,
            {
                onShellReady() {
                    shellRendered = true
                    const body = new PassThrough()
                    const stream = createReadableStreamFromReadable(body)

                    responseHeaders.set("Content-Type", "text/html")

                    resolve(
                        new Response(stream, {
                            headers: responseHeaders,
                            status: responseStatusCode,
                        }),
                    )

                    pipe(body)
                },
                onShellError(error: unknown) {
                    reject(error)
                },
                onError(error: unknown) {
                    responseStatusCode = 500
                    // Log streaming rendering errors from inside the shell.  Don't log
                    // errors encountered during initial shell rendering since they'll
                    // reject and get logged in handleDocumentRequest.
                    if (shellRendered) {
                        console.error(error)
                    }
                },
            },
        )

        setTimeout(abort, ABORT_DELAY)
    })
}

export default handleRequest
