import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Loader } from 'semantic-ui-react'
import { useAuth } from '..'
import { handleAddQuestion } from '../actions/questions'
import { useNavigateToHome } from '../_DATA'
import Nav from './Nav'

const New = () => {

    const [optionOneText, setoptionOne] = useState('')
    const [optionTwoText, setoptionTwo] = useState('')
    const [processing, setprocessing] = useState(false)

    const navigate = useNavigate()
    const { currentUser } = useAuth()
    const user = useSelector(store => store.signIn.user)

    useNavigateToHome(currentUser, navigate)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        setprocessing(true)
        const data = currentUser && {
            optionOneText,
            optionTwoText,
            author: currentUser && currentUser.uid
        }
        dispatch(handleAddQuestion(data))
        .then(() => {
            navigate('/')
            setprocessing(false)
        })
    }

    return (
        <div className='fill new flex col'>
            <Nav />
            <div className="card text-white flex bg-dark">
                <div className="card-header">
                    <p>Posting as {user && user.text}</p>
                </div>
                <form
                    className='flow form'
                    onSubmit={(e) => handleSubmit(e)}
                >
                    {processing ? (
                        <div className='grid relative'>
                            <div>
                                <Loader active size='massive' />
                            </div>
                            <span className='fs-500 ff-serif text-accent loading'>Submitting</span>
                        </div>
                    ) : (
                        <>
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
                        </>
                    )}
                </form>
            </div>
        </div>
    )
}

export default New
