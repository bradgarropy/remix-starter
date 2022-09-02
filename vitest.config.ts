/// <reference types="vitest" />

import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import {defineConfig} from "vitest/config"

const config = defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
        coverage: {
            provider: "istanbul",
            reporter: ["text"],
        },
        environment: "happy-dom",
        passWithNoTests: true,
        watch: false,
    },
})

export default config
