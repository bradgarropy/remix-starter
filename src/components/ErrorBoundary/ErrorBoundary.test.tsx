import type {ErrorResponse} from "@remix-run/react"
import {render, screen} from "@testing-library/react"
import {beforeEach,expect, test, vi} from "vitest"

import ErrorBoundary from "~/components/ErrorBoundary"

vi.mock("@remix-run/react", () => ({
    useRouteError: vi.fn(),
    isRouteErrorResponse: vi.fn()
}))

// Import the mocked functions
import {isRouteErrorResponse,useRouteError} from "@remix-run/react"

beforeEach(() => {
  vi.resetAllMocks()
})

test("shows route error", () => {
  const mockErrorResponse: ErrorResponse = {
    status: 500,
    statusText: "Internal Server Error",
    data: "Something went wrong",
  }

  vi.mocked(useRouteError).mockReturnValue(mockErrorResponse)
  vi.mocked(isRouteErrorResponse).mockReturnValue(true)

  render(<ErrorBoundary />)

  expect(screen.getByText(`${mockErrorResponse.status} ${mockErrorResponse.statusText}`)).toBeInTheDocument()
  expect(screen.getByText(mockErrorResponse.data)).toBeInTheDocument()
})