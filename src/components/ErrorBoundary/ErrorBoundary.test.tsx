import type {ErrorResponse} from "@remix-run/react"
import * as remix from "@remix-run/react"
import {render, screen} from "@testing-library/react"
import {expect, test, vitest} from "vitest"

import ErrorBoundary from "~/components/ErrorBoundary"

const useRouteErrorSpy = vitest.spyOn(remix, "useRouteError")
const isRouterErrorSpy = vitest.spyOn(remix, "isRouteErrorResponse")

test.only("shows route error", () => {
    const mockErrorResponse: ErrorResponse = {
        status: 500,
        statusText: "Internal Server Error",
        data: "Something went wrong",
    }

    useRouteErrorSpy.mockReturnValue(mockErrorResponse)
    isRouterErrorSpy.mockReturnValue(true)

    render(<ErrorBoundary />)

    expect(
        screen.getByText(
            `${mockErrorResponse.status} ${mockErrorResponse.statusText}`,
        ),
    ).toBeInTheDocument()

    expect(screen.getByText(mockErrorResponse.data)).toBeInTheDocument()
})

test("shows javascript error", () => {
    const mockError: Error = {
        name: "Error",
        message: "Something went wrong",
        stack: "at FunctionName (file.js:1:1)",
        cause: "Unknown",
    }

    useRouteErrorSpy.mockReturnValue(mockError)
    isRouterErrorSpy.mockReturnValue(false)

    render(<ErrorBoundary />)

    expect(screen.getByText(mockError.message)).toBeInTheDocument()
    expect(screen.getByText(mockError.stack as string)).toBeInTheDocument()
})

test("shows unknown error", () => {
    useRouteErrorSpy.mockReturnValue("Something went wrong")
    isRouterErrorSpy.mockReturnValue(false)

    render(<ErrorBoundary />)

    expect(screen.getByText("Unknown Error")).toBeInTheDocument()
})
