import {RemixBrowser} from "@remix-run/react"
import * as Sentry from "@sentry/remix"
import {startTransition, StrictMode} from "react"
import {hydrateRoot} from "react-dom/client"

import {createRelease} from "~/utils/sentry"

Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.MODE,
    release: createRelease(),
})

startTransition(() => {
    hydrateRoot(
        document,
        <StrictMode>
            <RemixBrowser />
        </StrictMode>,
    )
})
