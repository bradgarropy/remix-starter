/** @type {import('@remix-run/dev').AppConfig} */

const config = {
    ignoredRouteFiles: ["**/.*"],
    future: {},
    server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
    serverBuildPath: "api/index.js",
    serverModuleFormat: "cjs",
}

module.exports = config
