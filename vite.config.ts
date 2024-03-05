import {vitePlugin as remix} from "@remix-run/dev"
import {installGlobals} from "@remix-run/node"
import {defineConfig} from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

installGlobals()

const config = defineConfig({
    plugins: [
        tsconfigPaths(),
        remix({
            appDirectory: "src",
            ignoredRouteFiles: ["**/.*"],
            future: {},
            serverModuleFormat: "esm",
        }),
    ],
    server: {
        open: true,
        port: 3000,
    },
})

export default config
