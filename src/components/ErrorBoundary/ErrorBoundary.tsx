import {isRouteErrorResponse, useRouteError} from "@remix-run/react"

import {createErrorStack} from "~/utils/errors"

const ErrorBoundary = () => {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        return (
            <div className="w-screen h-screen grid place-content-center p-16">
                <h1 className="text-3xl font-bold mb-2">
                    {`${error.status} ${error.statusText}`}
                </h1>

                <pre className="overflow-auto">{error.data}</pre>
            </div>
        )
    }

    if (error instanceof Error) {
        return (
            <div className="w-screen h-screen grid place-content-center p-16">
                <h1 className="text-3xl font-bold mb-2">
                    {`Error: ${error.message}`}
                </h1>

                <pre className="overflow-auto">{createErrorStack(error)}</pre>
            </div>
        )
    }

    return (
        <div className="w-screen h-screen grid place-content-center p-16">
            <h1 className="text-3xl font-bold mb-2">Unknown error</h1>
        </div>
    )
}

export default ErrorBoundary
