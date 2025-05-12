import type {Config} from "@react-router/dev/config"

const config = {
    appDirectory: "src",
    future: {
        unstable_optimizeDeps: true,
    },
    serverModuleFormat: "esm",
    ssr: true,
} satisfies Config

export default config
