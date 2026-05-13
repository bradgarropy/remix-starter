import type {RouteConfig} from "@react-router/dev/routes"
import {index, route} from "@react-router/dev/routes"

const routes: RouteConfig = [
    index("./routes/index.tsx"),
    route("about", "./routes/about.tsx"),
    route("api/hello", "./routes/api/hello.tsx"),
    route("sentry/frontend", "./routes/sentryFrontend.tsx"),
    route("sentry/loader", "./routes/sentryLoader.tsx"),
    route("sentry/action", "./routes/sentryAction.tsx"),
]

export default routes
