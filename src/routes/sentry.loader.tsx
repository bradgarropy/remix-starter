import type {MetaFunction} from "@remix-run/node"

export const meta: MetaFunction = () => [
    {
        title: "remix starter | home",
    },
]

export const loader = () => {
    throw new Error("Sentry Loader Error")
}

const Route = () => {
    return (
        <>
            <h2 className="text-2xl font-bold">Sentry Loader</h2>
        </>
    )
}

export default Route
