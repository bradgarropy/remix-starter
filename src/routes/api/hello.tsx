import {json} from "@remix-run/node"

const loader = () => {
    return json({message: "world"}, {status: 200})
}

export {loader}
