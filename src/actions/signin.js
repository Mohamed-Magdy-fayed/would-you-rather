import { saveUser } from "../firebase/firestore"
import { _login } from "../_DATA"

export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'

export const signIn = (user) => {
    return {
        type: SIGN_IN,
        user: user,
        logged: true,
    }
}

export const handleSignIn = (user, login, users) => {
    return (dispatch) => {
        return login(user.username, user.password)
        .then((e) => {
            dispatch(signIn(users[e.user.uid]))
        }).catch(e => console.log(e))
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT,
        user: {},
        logged: false,
    }
}