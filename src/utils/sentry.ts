import pkg from "../../package.json"

const createRelease = () => {
    const release = `${pkg.name}@${pkg.version}`
    return release
}

export {createRelease}
