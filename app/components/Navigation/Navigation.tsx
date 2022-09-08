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
        </nav>
    )
}

export default Navigation
