import {expect, test} from "vitest"

import {createErrorStack} from "~/utils/errors"

test("creates error stack", () => {
    const error = new Error("Internal server error")
    const stack = createErrorStack(error)

    expect(stack).toContain("Error: Internal server error")
})

test("handles empty error", () => {
    const error = new Error()
    error.stack = undefined

    const stack = createErrorStack(error)

    expect(stack).toEqual("")
})
