import { useAuth } from ".."
import { auth } from "../firebase/config"
import { getUsers, saveUser } from "../firebase/firestore"
import { _addUser, _getUsers } from "../_DATA"
import { signIn } from "./signin"

export const GET_USERS = 'GET_USERS'
export const ADD_USER = 'ADD_USER'

const users = (users) => {
    return {
        type: GET_USERS,
        users,
    }
}

export const handleGetUsers = () => {
    return (dispatch) => {
        return getUsers()
        .then((allUsers => dispatch(users(allUsers))))
    }
}

const addUser = (user) => {
    return {
        type: ADD_USER,
        user,
    }
}

export const handleAddUser = (user, signup) => {
    return (dispatch) => {
        return signup(user.username, user.password)
        .then(() => {
            saveUser(user).then(u => dispatch(addUser(u)))
            .then(() => signIn(user))   
        })
    }
}