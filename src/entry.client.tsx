import {RemixBrowser} from "@remix-run/react"
import * as Sentry from "@sentry/remix"
import {startTransition, StrictMode} from "react"
import {hydrateRoot} from "react-dom/client"

Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [],
})

startTransition(() => {
    hydrateRoot(
        document,
        <StrictMode>
            <RemixBrowser />
        </StrictMode>,
    )
})
