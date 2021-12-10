import { ADD_QUESTION, ANSWER_QUESTION } from "../actions/questions";
import { ADD_USER, GET_USERS } from "../actions/users";

export const users = (state = [], action) => {
    switch (action.type) {
        case GET_USERS:
            return action.users
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.authedUser])
                }
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        case ADD_USER:
            return {
                ...state,
                [action.user.key]: action.user,
            }
        default:
            return state
    }
}