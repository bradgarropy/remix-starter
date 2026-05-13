import {data} from "@remix-run/cloudflare"

const loader = () => {
    return data({message: "world"}, {status: 200})
}

export {loader}
