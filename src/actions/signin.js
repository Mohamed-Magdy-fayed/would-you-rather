import { _login } from "../_DATA"

export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'

const signIn = (user) => {
    return {
        type: SIGN_IN,
        user,
        logged: true,
    }
}

export const handleSignIn = (user) => {
    return (dispatch) => {
        return _login(user)
        .then(() => dispatch(signIn(user)))
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT,
        user: {},
        logged: false,
    }
}