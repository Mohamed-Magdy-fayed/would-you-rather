import { combineReducers } from 'redux'
import { signIn } from './signin'
import { users } from './users'
import { questions } from './questions'

export default combineReducers({
    signIn,
    users,
    questions,
})