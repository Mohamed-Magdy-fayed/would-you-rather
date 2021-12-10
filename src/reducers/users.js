import { ANSWER_QUESTION } from "../actions/questions";
import { GET_USERS } from "../actions/users";

export const users = (state = [], action) => {
    switch (action.type) {
        case GET_USERS:
            return action.users
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
        default:
            return state
    }
}