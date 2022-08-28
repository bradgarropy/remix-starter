import type {LoaderFunction} from "@remix-run/node"
import {json} from "@remix-run/node"

const loader: LoaderFunction = () => {
    return json("world", {status: 200})
}

export {loader}
