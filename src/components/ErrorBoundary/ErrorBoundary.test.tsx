import type {ErrorResponse} from "@remix-run/react"
import {isRouteErrorResponse, useRouteError} from "@remix-run/react"
import {render, screen} from "@testing-library/react"
import {expect, test, vitest} from "vitest"

import ErrorBoundary from "~/components/ErrorBoundary"

vitest.mock("@remix-run/react", () => ({
    useRouteError: vitest.fn(),
    isRouteErrorResponse: vitest.fn(),
}))

const useRouteErrorMock = vitest.mocked(useRouteError)
const isRouteErrorResponseMock = vitest.mocked(isRouteErrorResponse)

test("shows route error", () => {
    const mockErrorResponse: ErrorResponse = {
        status: 500,
        statusText: "Internal Server Error",
        data: "Something went wrong",
    }

    useRouteErrorMock.mockReturnValue(mockErrorResponse)
    isRouteErrorResponseMock.mockReturnValue(true)

    render(<ErrorBoundary />)

    expect(
        screen.getByText(
            `${mockErrorResponse.status} ${mockErrorResponse.statusText}`,
        ),
    ).toBeInTheDocument()

    expect(screen.getByText(mockErrorResponse.data)).toBeInTheDocument()
})

test("shows javascript error", () => {
    const mockError = new Error("Something went wrong", {cause: "Unknown"})

    useRouteErrorMock.mockReturnValue(mockError)
    isRouteErrorResponseMock.mockReturnValue(false)

    render(<ErrorBoundary />)

    expect(screen.getByText(mockError.message)).toBeInTheDocument()

    expect(
        screen.getByText("Error: Something went wrong", {exact: false}),
    ).toBeInTheDocument()

    expect(screen.getByText("at file://", {exact: false})).toBeInTheDocument()
})

test("shows unknown error", () => {
    useRouteErrorMock.mockReturnValue("Something went wrong")
    isRouteErrorResponseMock.mockReturnValue(false)

    render(<ErrorBoundary />)

    expect(screen.getByText("Unknown Error")).toBeInTheDocument()
})
