import {render, screen} from "@testing-library/react"
import {MemoryRouter} from "react-router"
import {expect, test} from "vitest"

import Header from "~/components/Header"

test("renders", () => {
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>,
    )

    expect(screen.getByText("Remix Starter"))
})
