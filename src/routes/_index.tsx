import type {MetaFunction} from "@remix-run/node"

export const meta: MetaFunction = () => [
    {
        title: "remix starter | home",
    },
]

const IndexRoute = () => {
    return (
        <>
            <h2 className="text-2xl font-bold">Home</h2>
        </>
    )
}

export default IndexRoute
