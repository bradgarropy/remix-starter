import { vi } from "vitest"

export const useRouteError = vi.fn()
export const isRouteErrorResponse = vi.fn()

// Mock the RemixBrowser and other required context
export const RemixBrowser = vi.fn(() => null)
export const RemixContext = {
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  manifest: {},
  routeModules: {},
}

// Mock other commonly needed exports
export const Links = vi.fn(() => null)
export const Meta = vi.fn(() => null)
export const Outlet = vi.fn(() => null)
export const Scripts = vi.fn(() => null)
export const ScrollRestoration = vi.fn(() => null)
