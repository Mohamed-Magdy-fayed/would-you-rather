import { ADD_QUESTION, ANSWER_QUESTION, GET_QUESTIONS } from "../actions/questions";

export const questions = (state = {}, action) => {
    switch (action.type) {
        case GET_QUESTIONS:     
            return action.questions
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        case ANSWER_QUESTION:     
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.uid])
                    }
                }
            }
        default:
            return state
    }
}