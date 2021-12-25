import { getQuestions, saveQuestion, saveQuestionAnswer } from "../firebase/firestore"
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../_DATA"

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

const addQsToState = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions,
    }
}

export const handleGetQuestions = () => {
    return (dispatch) => {
        return getQuestions()
            .then((questions) => dispatch(addQsToState(questions)))
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
        return saveQuestion(data)
        .then(question => dispatch(addQuestion(question)))
    }
}

const answerQuestion = (question) => {
    return {
        type: ANSWER_QUESTION,
        uid: question.uid,
        qid: question.qid,
        answer: question.answer,
    }
}

export const handleAnswerQuestion = (question) => {
    return (dispatch) => {
        return saveQuestionAnswer(question)
        .then(() => dispatch(answerQuestion(question)))
    }
}