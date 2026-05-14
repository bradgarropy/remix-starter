import type {Config} from "@react-router/dev/config"

const config = {
    ssr: true,
    appDirectory: "src",
    future: {
        v8_passThroughRequests: true,
        v8_splitRouteModules: true,
        v8_viteEnvironmentApi: true,
    },
} satisfies Config

export default config
