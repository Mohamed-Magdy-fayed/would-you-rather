import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../_DATA"

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

const getQuestions = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions,
    }
}

export const handleGetQuestions = () => {
    return (dispatch) => {
        return _getQuestions()
            .then((questions) => dispatch(getQuestions(questions)))
    }
}

const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export const handleAddQuestion = (data) => {
    return (dispatch) => {
        return _saveQuestion(data)
        .then(question => dispatch(addQuestion(question)))
    }
}

const answerQuestion = (question) => {
    return {
        type: ANSWER_QUESTION,
        authedUser: question.authedUser,
        qid: question.qid,
        answer: question.answer,
    }
}

export const handleAnswerQuestion = (question) => {
    return (dispatch) => {
        return _saveQuestionAnswer(question)
        .then(() => dispatch(answerQuestion(question)))
    }
}