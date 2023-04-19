import {render, screen} from "@testing-library/react"

import Footer from "~/components/Footer"

test("renders", () => {
    render(<Footer />)
    expect(screen.getByText("Footer"))
})
