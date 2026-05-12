import type {PlatformProxy} from "wrangler"

type GetLoadContextArgs = {
    request: Request
    context: {
        cloudflare: Omit<PlatformProxy<Env>, "dispose" | "caches" | "cf"> & {
            caches: PlatformProxy<Env>["caches"] | CacheStorage
            cf: Request["cf"]
        }
    }
}

declare module "@remix-run/cloudflare" {
    interface AppLoadContext extends ReturnType<typeof getLoadContext> {}
}

export const getLoadContext = ({context}: GetLoadContextArgs) => {
    return context
}
