import {data} from "@remix-run/node"

const loader = () => {
    return data({message: "world"}, {status: 200})
}

export {loader}
