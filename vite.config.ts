import {vitePlugin as remix} from "@remix-run/dev"
import {installGlobals} from "@remix-run/node"
import {sentryVitePlugin as sentry} from "@sentry/vite-plugin"
import tailwind from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import {remixDevTools} from "remix-development-tools"
import tsconfigPaths from "vite-tsconfig-paths"
import {defineConfig} from "vitest/config"

import {createRelease} from "./src/utils/sentry"

installGlobals()

declare module "@remix-run/node" {
    interface Future {
        v3_singleFetch: true
    }
}

const config = defineConfig({
    build: {
        sourcemap: true,
    },
    plugins: [
        tsconfigPaths(),
        tailwind(),
        remixDevTools({
            client: {
                showBreakpointIndicator: false,
            },
        }),
        process.env.VITEST
            ? react()
            : remix({
                  appDirectory: "src",
                  ignoredRouteFiles: ["**/.*"],
                  future: {
                      v3_fetcherPersist: true,
                      v3_relativeSplatPath: true,
                      v3_throwAbortReason: true,
                      v3_lazyRouteDiscovery: true,
                      v3_singleFetch: true,
                      v3_routeConfig: true,
                  },
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
        include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
        globals: false,
        passWithNoTests: true,
        setupFiles: "src/tests/setup.ts",
        watch: false,
    },
})

export default config
