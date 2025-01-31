# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog][keep-a-changelog],
and this project adheres to [Semantic Versioning][semver].

<!-- ## [X.Y.Z]
_YYYY-MM-DD_

### Added

-   TODO

### Changed

-   TODO

### Deprecated

-   TODO

### Removed

-   TODO

### Fixed

-   TODO

### Security

-   TODO -->

## [Unreleased]

- _TBD_

## [4.7.0][4.7.0]

_2025-01-30_

- Add root [`ErrorBoundary`][error-boundary]

## [4.6.0][4.6.0]

_2025-01-29_

- Upgrade to [Tailwind v4][tailwind-v4]

## [4.5.0][4.5.0]

_2025-01-23_

- Upgrade to [Vitest 3][vitest-3]

## [4.4.0][4.4.0]

_2025-01-12_

- Hide breakpoint indicator in [`remix-development-tools`][remix-development-tools]

## [4.3.0][4.3.0]

_2025-01-09_

- Integrate [`remix-development-tools`][remix-development-tools]
- Update [codecov action][codecov-action]
- Add [`vercel`][vercel-config] configuration

## [4.2.0][4.2.0]

_2024-12-17_

- Improve `eslint` configuration

## [4.1.0][4.1.0]

_2024-12-10_

- Fix the [`/api/hello`][api-hello] route
- Adopt the [`v3_routeConfig`][v3-routeConfig] future flag

## [4.0.0][4.0.0]

_2024-12-10_

- Upgrade to [React 19][react-19]
- Upgrade to [Vite 6][vite-6]
- Adopt Remix future flags
    - [`v3_fetcherPersist`][v3-fetcherPersist]
    - [`v3_relativeSplatPath`][v3-relativeSplatPath]
    - [`v3_throwAbortReason`][v3-throwAbortReason]
    - [`v3_lazyRouteDiscovery`][v3-lazyRouteDiscovery]
    - [`v3_singleFetch`][v3-singleFetch]
- Remove [`@remix-run/eslint-config`][remix-run-eslint-config]

[unreleased]: https://github.com/bradgarropy/remix-starter/compare/v4.6.0...HEAD
[4.7.0]: https://github.com/bradgarropy/remix-starter/releases/tag/v4.7.0
[4.6.0]: https://github.com/bradgarropy/remix-starter/releases/tag/v4.6.0
[4.5.0]: https://github.com/bradgarropy/remix-starter/releases/tag/v4.5.0
[4.4.0]: https://github.com/bradgarropy/remix-starter/releases/tag/v4.4.0
[4.3.0]: https://github.com/bradgarropy/remix-starter/releases/tag/v4.3.0
[4.2.0]: https://github.com/bradgarropy/remix-starter/releases/tag/v4.2.0
[4.1.0]: https://github.com/bradgarropy/remix-starter/releases/tag/v4.1.0
[4.0.0]: https://github.com/bradgarropy/remix-starter/releases/tag/v4.0.0
[keep-a-changelog]: https://keepachangelog.com
[semver]: https://semver.org
[react-19]: https://react.dev/blog/2024/12/05/react-19
[vite-6]: https://vite.dev/blog/announcing-vite6
[v3-fetcherPersist]: https://remix.run/docs/en/main/start/future-flags#v3_fetcherpersist
[v3-relativeSplatPath]: https://remix.run/docs/en/main/start/future-flags#v3_relativesplatpath
[v3-throwAbortReason]: https://remix.run/docs/en/main/start/future-flags#v3_throwabortreason
[v3-lazyRouteDiscovery]: https://remix.run/docs/en/main/start/future-flags#v3_lazyroutediscovery
[v3-singleFetch]: https://remix.run/docs/en/main/start/future-flags#v3_singlefetch
[v3-routeConfig]: https://remix.run/docs/en/main/start/future-flags#v3_routeconfig
[remix-run-eslint-config]: https://remix.run/docs/en/main/start/future-flags#remix-runeslint-config
[api-hello]: https://remix-starter-bradgarropy.vercel.app/api/hello
[remix-development-tools]: https://remix-development-tools.fly.dev
[codecov-action]: https://github.com/codecov/codecov-action
[vercel-config]: https://vercel.com/docs/projects/project-configuration
[vitest-3]: https://vitest.dev/guide/migration.html#vitest-3
[tailwind-v4]: https://tailwindcss.com/docs/upgrade-guide
[error-boundary]: https://remix.run/docs/en/main/route/error-boundary
