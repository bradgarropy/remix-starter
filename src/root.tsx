import type {LinksFunction, MetaFunction} from "@remix-run/node"
import {Links, Meta, Outlet, Scripts, ScrollRestoration} from "@remix-run/react"

import Footer from "~/components/Footer/Footer"
import Header from "~/components/Header/Header"
import tailwindStyles from "~/styles/tailwind.css?url"

export const meta: MetaFunction = () => [
    {charset: "utf-8"},
    {title: "💿 remix starter"},
    {viewport: "width=device-width,initial-scale=1"},
]

export const links: LinksFunction = () => {
    const links = [
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

            <body className="bg-white text-black">
                <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
                    <Header />

                    <div className="p-8">
                        <Outlet />
                    </div>

                    <Footer />
                </div>

                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default App
