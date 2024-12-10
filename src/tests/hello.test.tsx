import {expect, test} from "vitest"

import {loader} from "~/routes/api/hello"

test("returns", async () => {
    const {data, init} = loader()

    expect(init).toMatchObject({status: 200})
    expect(data).toEqual({message: "world"})
})
