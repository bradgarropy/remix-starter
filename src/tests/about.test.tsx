import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Route, {meta} from "~/routes/about"
import {metaArgs} from "~/utils/testUtils"

test("renders", () => {
    render(<Route />)
    expect(screen.getByText("About")).toBeInTheDocument()
})

test("meta", () => {
    const tags = meta(metaArgs)
    expect(tags).toEqual([{title: "💿 remix starter | about"}])
})
