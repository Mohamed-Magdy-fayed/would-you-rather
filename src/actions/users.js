import { _getUsers } from "../_DATA"

export const GET_USERS = 'GET_USERS'

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