import { _addUser, _getUsers } from "../_DATA"

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
        return _getUsers()
        .then((allUsers => dispatch(users(allUsers))))
    }
}

const addUser = (user) => {
    return {
        type: ADD_USER,
        user,
    }
}

export const handleAddUser = (user) => {
    return (dispatch) => {
        return _addUser(user)
        .then(user => dispatch(addUser(user)))
    }
}