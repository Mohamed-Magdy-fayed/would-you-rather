import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { handleAddQuestion } from '../actions/questions'
import { useNavigateToHome } from '../_DATA'
import Nav from './Nav'

const New = () => {

    const [optionOneText, setoptionOne] = useState('')
    const [optionTwoText, setoptionTwo] = useState('')
    const authedUser = useSelector(store => store.signIn)
    const navigate = useNavigate()

    useNavigateToHome(authedUser, navigate)

    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            optionOneText,
            optionTwoText,
            author: authedUser.user.key
        }
        dispatch(handleAddQuestion(data))
        navigate('/')
    }
    
    return (
        <div className='fill new'>
            <Nav />
            <div className="card text-white flex">
                <div className="card-header">
                    <p>Posting as {authedUser.user.text}</p>
                </div>
                <form
                    className='flow form'
                    onSubmit={(e) => handleSubmit(e)}
                    >
                    <div className='form flex'>
                        <p className='text-accent'>Would You Rather?</p>
                        <input
                        className='form-input bg-dark text-white fs-400 ff-sans-cond'
                        type='text'
                        placeholder='Enter Option One'
                        value={optionOneText}
                        onChange={(e) => setoptionOne(e.target.value)}
                        />
                        <p>Or</p>
                        <input
                        className='form-input bg-dark text-white fs-400 ff-sans-cond'
                        type='text'
                        placeholder='Enter Option Two'
                        value={optionTwoText}
                        onChange={(e) => setoptionTwo(e.target.value)}
                        />
                    </div>
                    <button
                    className='button d-block fs-500 ff-serif bg-trans text-accent'
                    type='submit'
                    >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default New
