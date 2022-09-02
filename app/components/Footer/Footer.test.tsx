import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Footer from "~/components/Footer"

test("renders", () => {
    render(<Footer />)
    expect(screen.getByText("Footer"))
})
