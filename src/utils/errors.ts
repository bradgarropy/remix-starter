const createErrorStack = (error: Error) => {
    if (!error.stack) {
        return ""
    }

    const shortStack = error.stack.split("\n").slice(0, 10).join("\n")
    return shortStack
}

export {createErrorStack}
