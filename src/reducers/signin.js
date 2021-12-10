import { SIGN_IN, SIGN_OUT } from "../actions/signin";

export const signIn = (state = {
    user: {},
    logged: false,
}, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                user: action.user,
                logged: action.logged,
            }
        case SIGN_OUT:
            return {
                user: action.user,
                logged: action.logged,
            }
        default:
            return state
    }
}