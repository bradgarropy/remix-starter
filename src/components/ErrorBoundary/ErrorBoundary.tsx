import {isRouteErrorResponse, useRouteError} from "@remix-run/react"

const ErrorBoundary = () => {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        return (
            <>
                <h1>
                    {error.status} {error.statusText}
                </h1>

                <pre>{error.data}</pre>
            </>
        )
    }

    if (error instanceof Error) {
        return (
            <>
                <h1>Error</h1>
                <p>{error.message}</p>
                <p>The stack trace is:</p>
                <pre>{error.stack}</pre>
            </>
        )
    }

    return <h1>Unknown Error</h1>
}

export default ErrorBoundary
