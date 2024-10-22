import bgConfig from "@bradgarropy/eslint-config"
import bgReactConfig from "@bradgarropy/eslint-config-react"
import bgTypescriptConfig from "@bradgarropy/eslint-config-typescript"

const config = [
    ...bgConfig,
    ...bgReactConfig,
    ...bgTypescriptConfig,
    {
        ignores: [
            // editor
            ".vscode/**",
            // dependencies
            "node_modules/**",
            // build
            ".cache/**",
            "build/**",
            "public/build/**",
            // test
            "coverage/**",
            "test-results/**",
            "playwright-report/**",
            // secrets
            ".env*",
            // os
            ".DS_Store",
        ],
    },
]

export default config
