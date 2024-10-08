import {RemixBrowser} from "@remix-run/react"
import * as Sentry from "@sentry/remix"
import {startTransition, StrictMode} from "react"
import {hydrateRoot} from "react-dom/client"

Sentry.init({
    dsn: "https://bd22d6af8d5391631deea346947d86d0@o1037846.ingest.us.sentry.io/4508053968060416",
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
