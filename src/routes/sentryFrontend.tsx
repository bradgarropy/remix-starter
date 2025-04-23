const Route = () => {
    return (
        <>
            <title>💿 remix starter | sentry</title>
            <h2 className="text-2xl font-bold">Sentry | Frontend Error</h2>

            <button
                type="button"
                onClick={() => {
                    throw new Error("Sentry Frontend Error")
                }}
            >
                Throw error
            </button>
        </>
    )
}

export default Route
