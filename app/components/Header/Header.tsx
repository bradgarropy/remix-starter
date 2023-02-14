import Navigation from "~/components/Navigation/Navigation"

const Header = () => {
    return (
        <header className="flex items-center justify-between px-8 py-12">
            <h1 className="text-3xl font-bold">Remix Starter</h1>
            <Navigation />
        </header>
    )
}

export default Header
