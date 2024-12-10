import type {RouteConfig} from "@remix-run/route-config"
import {index, route} from "@remix-run/route-config"

const routes: RouteConfig = [
    index("./routes/index.tsx"),
    route("about", "./routes/about.tsx"),
    route("api/hello", "./routes/api/hello.tsx"),
    route("sentry/frontend", "./routes/sentryFrontend.tsx"),
    route("sentry/loader", "./routes/sentryLoader.tsx"),
    route("sentry/action", "./routes/sentryAction.tsx"),
]

export default routes
