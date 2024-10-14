import {NavLink} from "@remix-run/react"

const Navigation = () => {
    return (
        <nav className="flex gap-4 font-bold">
            <NavLink to="/" prefetch="intent">
                Home
            </NavLink>

            <NavLink to="/about" prefetch="intent">
                About
            </NavLink>

            <NavLink to="/sentry/frontend" prefetch="intent">
                Frontend
            </NavLink>

            <NavLink to="/sentry/loader" prefetch="intent">
                Loader
            </NavLink>

            <NavLink to="/sentry/action" prefetch="intent">
                Action
            </NavLink>
        </nav>
    )
}

export default Navigation
