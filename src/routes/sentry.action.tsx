import type {MetaFunction} from "@remix-run/node"

export const meta: MetaFunction = () => [
    {
        title: "remix starter | home",
    },
]

export const action = () => {
    throw new Error("Sentry Action Error")
}

const Route = () => {
    return (
        <>
            <h2 className="text-2xl font-bold">Home</h2>

            <form method="post">
                <input type="text" name="name" id="name" />
                <button type="submit">submit</button>
            </form>
        </>
    )
}

export default Route
