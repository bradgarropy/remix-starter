import {data} from "react-router"

const loader = () => {
    return data({message: "world"}, {status: 200})
}

export {loader}
