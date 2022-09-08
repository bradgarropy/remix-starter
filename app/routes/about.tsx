import type {MetaFunction} from "@remix-run/node"

const meta: MetaFunction = () => ({
    title: "💿 remix starter | about",
})

const AboutRoute = () => {
    return <h2 className="text-2xl font-bold">About</h2>
}

export default AboutRoute
export {meta}
