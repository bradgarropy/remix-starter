import type {DataFunctionArgs} from "@remix-run/node"
import {Request} from "@remix-run/node"
import {expect, test} from "vitest"

import {loader} from "~/routes/api/hello"

const loaderArgs: DataFunctionArgs = {
    context: {},
    params: {},
    request: new Request("http://localhost:3000/api/hello"),
}

test("returns", async () => {
    const response = await loader(loaderArgs)
    const json = await response.json()

    expect(response.status).toEqual(200)
    expect(json).toEqual({message: "world"})
})
