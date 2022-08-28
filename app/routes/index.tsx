import type {MetaFunction} from "@remix-run/node"

const meta: MetaFunction = () => ({
    title: "💿 remix starter | home",
})

const IndexRoute = () => {
    return <h2>Home</h2>
}

export default IndexRoute
export {meta}
