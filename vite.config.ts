import {cloudflare} from "@cloudflare/vite-plugin"
import {reactRouter} from "@react-router/dev/vite"
import {sentryVitePlugin as sentry} from "@sentry/vite-plugin"
import tailwind from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import {reactRouterDevTools} from "react-router-devtools"
import devtoolsJson from "vite-plugin-devtools-json"
import {defineConfig} from "vitest/config"

import {createRelease} from "./src/utils/sentry"

const config = defineConfig({
    build: {
        sourcemap: true,
    },
    plugins: [
        tailwind(),
        devtoolsJson(),
        reactRouterDevTools(),
        ...(process.env.VITEST
            ? [react()]
            : [cloudflare({viteEnvironment: {name: "ssr"}}), reactRouter()]),
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
                      filesToDeleteAfterUpload: ["build/client/**/*.map"],
                  },
                  telemetry: false,
              })
            : null,
    ],
    optimizeDeps: {
        include: ["react-router-devtools/client"],
    },
    resolve: {
        tsconfigPaths: true,
    },
    server: {
        open: true,
        port: 3000,
    },
    test: {
        clearMocks: true,
        coverage: {
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
