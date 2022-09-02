import {NavLink} from "@remix-run/react"

const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink to="/" prefetch="intent" className="navigation-link">
                Home
            </NavLink>

            <NavLink to="/about" prefetch="intent" className="navigation-link">
                About
            </NavLink>
        </nav>
    )
}

export default Navigation
