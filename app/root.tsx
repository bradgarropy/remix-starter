import type {LinksFunction, MetaFunction} from "@remix-run/node"
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react"

import Footer from "~/components/Footer/Footer"
import Header from "~/components/Header/Header"
import globalStyles from "~/styles/global.css"
import tailwindStyles from "~/styles/tailwind.css"

const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "💿 remix starter",
    viewport: "width=device-width,initial-scale=1",
})

const links: LinksFunction = () => {
    const links = [
        {
            rel: "stylesheet",
            href: globalStyles,
        },
        {
            rel: "stylesheet",
            href: tailwindStyles,
        },
    ]

    return links
}

const App = () => {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>

            <body>
                <div className="page">
                    <Header />

                    <div className="content">
                        <Outlet />
                    </div>

                    <Footer />
                </div>

                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

export default App
export {links, meta}
