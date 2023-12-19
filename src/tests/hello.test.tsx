import {expect, test} from "vitest"

import {loader} from "~/routes/api/hello"

test("returns", async () => {
    const response = await loader()
    const json = await response.json()

    expect(response.status).toEqual(200)
    expect(json).toEqual({message: "world"})
})
