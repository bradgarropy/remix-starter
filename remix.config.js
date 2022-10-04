/** @type {import('@remix-run/dev').AppConfig} */

const config = {
    serverBuildTarget: "vercel",
    server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
    ignoredRouteFiles: ["**/.*"],
}

module.exports = config
