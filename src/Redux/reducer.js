
export const loginDetails = (data = [], action) => {
    switch (action.type) {
        case "loginDetail":
            console.warn("loginDetails condition ", action)
            return action.data
        default:
            return []
    }
}