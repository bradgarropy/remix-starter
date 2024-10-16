import {vitePlugin as remix} from "@remix-run/dev"
import {installGlobals} from "@remix-run/node"
import {sentryVitePlugin as sentry} from "@sentry/vite-plugin"
import react from "@vitejs/plugin-react"
import {defineConfig} from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

import {createRelease} from "./src/utils/sentry"

installGlobals()

const config = defineConfig({
    build: {
        sourcemap: true,
    },
    plugins: [
        tsconfigPaths(),
        process.env.VITEST
            ? react()
            : remix({
                  appDirectory: "src",
                  ignoredRouteFiles: ["**/.*"],
                  future: {},
                  serverModuleFormat: "esm",
              }),
        process.env.SENTRY_AUTH_TOKEN
            ? sentry({
                  authToken: process.env.SENTRY_AUTH_TOKEN,
                  org: process.env.SENTRY_ORG,
                  project: process.env.SENTRY_PROJECT,
                  release: {
                      create: true,
                      name: createRelease(),
                  },
                  sourcemaps: {
                      filesToDeleteAfterUpload: [
                          "build/client/**/*.map",
                          "build/server/**/*.map",
                      ],
                  },
                  telemetry: false,
              })
            : null,
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
            reporter: ["text", "lcov", "html"],
            reportOnFailure: false,
        },
        environment: "jsdom",
        include: ["src/tests/**"],
        globals: false,
        passWithNoTests: true,
        setupFiles: "src/tests/setup.ts",
        watch: false,
    },
})

export default config
