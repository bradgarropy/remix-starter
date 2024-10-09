import {vitePlugin as remix} from "@remix-run/dev"
import {installGlobals} from "@remix-run/node"
import {sentryVitePlugin as sentry} from "@sentry/vite-plugin"
import react from "@vitejs/plugin-react"
import {defineConfig, loadEnv} from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

installGlobals()

const config = defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), "")

    return {
        build: {
            sourcemap: true,
        },
        plugins: [
            tsconfigPaths(),
            env.VITEST
                ? react()
                : remix({
                      appDirectory: "src",
                      ignoredRouteFiles: ["**/.*"],
                      future: {},
                      serverModuleFormat: "esm",
                  }),
            sentry({
                authToken: env.SENTRY_AUTH_TOKEN,
                org: env.SENTRY_ORG,
                project: env.SENTRY_PROJECT,
                sourcemaps: {
                    filesToDeleteAfterUpload: [
                        "build/client/**/*.map",
                        "build/server/**/*.map",
                    ],
                },
                telemetry: false,
            }),
        ],
        server: {
            open: true,
            port: 3000,
        },
        test: {
            clearMocks: true,
            coverage: {
                all: false,
                clean: true,
                enabled: true,
                provider: "v8",
                reporter: ["text", "lcov"],
                reportOnFailure: false,
            },
            environment: "jsdom",
            globals: false,
            passWithNoTests: true,
            setupFiles: "src/tests/setup.ts",
            watch: false,
        },
    }
})

export default config
