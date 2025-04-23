export const action = () => {
    throw new Error("Sentry Action Error")
}

const Route = () => {
    return (
        <>
            <title>💿 remix starter | sentry</title>
            <h2 className="text-2xl font-bold">Sentry | Action Error</h2>

            <form method="post">
                <input type="text" name="name" id="name" />
                <button type="submit">submit</button>
            </form>
        </>
    )
}

export default Route
