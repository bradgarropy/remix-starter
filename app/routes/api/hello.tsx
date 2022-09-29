import type {LoaderFunction} from "@remix-run/node"
import {json} from "@remix-run/node"

const loader: LoaderFunction = (): Promise<void> => {
    return json({message: "world"}, {status: 200})
}

export {loader}
