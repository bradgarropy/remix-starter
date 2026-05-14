/// <reference types="vite/client" />
/// <reference types="./worker-configuration.d.ts" />

declare namespace Cloudflare {
    interface Env {
        SENTRY_DSN: string
    }
}
