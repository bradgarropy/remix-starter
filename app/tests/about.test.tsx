import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import AboutRoute, {meta} from "~/routes/about"
import {metaArgs} from "~/utils/testUtils"

test("renders", () => {
    render(<AboutRoute />)
    expect(screen.getByText("About"))
})

test("meta", () => {
    const tags = meta(metaArgs)
    expect(tags).toEqual({title: "💿 remix starter | about"})
})
