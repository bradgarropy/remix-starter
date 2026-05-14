import {Links, Meta, Outlet, Scripts, ScrollRestoration} from "react-router"

import Error from "~/components/ErrorBoundary"
import Footer from "~/components/Footer"
import Header from "~/components/Header"
import tailwindStyles from "~/styles/tailwind.css?url"

const App = () => {
    return (
        <html lang="en">
            <head>
                <title>📍 react router starter</title>
                <link rel="stylesheet" href={tailwindStyles} />
                <link rel="icon" type="image/png" href="/favicon.png" />
                <meta charSet="utf-8" />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <meta
                    httpEquiv="Content-Type"
                    content="text/html;charset=utf-8"
                />

                <Meta />
                <Links />
            </head>

            <body className="bg-white text-black">
                <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
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

export const ErrorBoundary = () => {
    return (
        <html lang="en">
            <head>
                <title>📍 react router starter</title>
                <link rel="stylesheet" href={tailwindStyles} />
                <link rel="icon" type="image/png" href="/favicon.png" />
                <meta charSet="utf-8" />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <meta
                    httpEquiv="Content-Type"
                    content="text/html;charset=utf-8"
                />

                <Meta />
                <Links />
            </head>

            <body className="bg-white text-black">
                <Error />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default App
