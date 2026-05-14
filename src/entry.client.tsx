import * as Sentry from "@sentry/react-router"
import {startTransition, StrictMode} from "react"
import {hydrateRoot} from "react-dom/client"
import {HydratedRouter} from "react-router/dom"

Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.MODE,
    sendDefaultPii: true,
})

startTransition(() => {
    hydrateRoot(
        document,
        <StrictMode>
            <HydratedRouter />
        </StrictMode>,
    )
})
