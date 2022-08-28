import type {LinksFunction, MetaFunction} from "@remix-run/node"
import {
    Links,
    LiveReload,
    Meta,
    NavLink,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react"

import globalStyles from "~/styles/global.css"

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
                    <div className="header">
                        <h1>Remix Starter</h1>

                        <nav className="navigation">
                            <NavLink
                                to="/"
                                prefetch="intent"
                                className="navigation-link"
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/about"
                                prefetch="intent"
                                className="navigation-link"
                            >
                                About
                            </NavLink>
                        </nav>
                    </div>

                    <div className="content">
                        <Outlet />
                    </div>

                    <div className="footer">
                        <p>Footer</p>
                    </div>
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
