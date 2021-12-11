import React, { Component, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { Button, Form, Icon, Image, Loader, Message, Progress } from 'semantic-ui-react'
import { handleAnswerQuestion } from '../actions/questions'

const Poll = ({ viewed, poll }) => {

    const { id, author, optionOne, optionTwo } = poll

    const users = useSelector(store => store.users)
    const authedUser = useSelector(store => store.signIn.user)

    const [answered, setanswered] = useState(false)
    const [answer, setanswer] = useState('')
    const [processing, setprocessing] = useState(false)

    useEffect(() => {
        if (optionOne.votes.includes(authedUser.key)
            || optionTwo.votes.includes(authedUser.key)) {
            setanswered(true)
        } else {
            setanswered(false)
        }
    }, [])


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = users[author]

    const optionOneVotes = optionOne.votes.length
    const optionTwoVotes = optionTwo.votes.length
    const total = optionOneVotes + optionTwoVotes

    const handleSubmit = (e) => {
        e.preventDefault()
        if (answer === '') {
            alert('Please choose an answer!')
            return
        }
        setprocessing(true)
        const question = {
            authedUser: authedUser.key,
            qid: id,
            answer,
        }
        dispatch(handleAnswerQuestion(question))
            .then(() => {
                setanswered(true)
                setprocessing(false)
            })
    }

    const handleBack = (e) => {
        e.preventDefault()
        navigate(-1)
    }

    return (
        <div className='flex text-white card ff-serif'>
            <div className='card-header flex'>
                <p className='fs-400'>{user.text} asked:</p>
                {viewed && (
                    <Button
                        icon floated='right'
                        size='mini'
                        compact
                        circular
                        onClick={(e) => handleBack(e)}
                    >
                        <Icon name='left arrow' />
                    </Button>
                )}
            </div>
            <div className='card-content flex'>
                <div className='card-img'><Image src={user.image.src} alt='user avatar' size='massive' avatar wrapped /></div>
                <div className="card-info">
                    {!viewed && (
                        <div>
                            <p className='uppercase text-accent'>Would You Rather?</p>
                            <p className='fs-400 ff-sans-cond'>{poll.optionOne.text} or ...</p>
                            <Link
                                className='button d-block fs-500 ff-serif bg-trans text-accent'
                                to={`/poll/${poll.id}`}>View</Link>
                        </div>
                    )}
                    {viewed && answered && (
                        <div className='flex col'>
                            <p>Would You Rather?</p>
                            <div className={poll.optionOne.votes.includes(authedUser.key)
                                ? 'selected-answer flex col card-answer'
                                : 'not-selected-answer flex col card-answer'
                            }>
                                <p>{poll.optionOne.text}</p>
                                <div className='prog'>
                                    <Progress
                                        inverted
                                        percent={Math.round(optionOneVotes / total * 100)}
                                        progress
                                        indicating
                                    />
                                </div>
                                <p>{optionOneVotes} out of {total} votes</p>
                            </div>
                            <div className={poll.optionTwo.votes.includes(authedUser.key)
                                ? 'selected-answer flex col card-answer'
                                : 'not-selected-answer flex col card-answer'
                            }>
                                <p>{poll.optionTwo.text}</p>
                                <div className='prog'>
                                    <Progress
                                        inverted
                                        percent={Math.round(optionTwoVotes / total * 100)}
                                        progress
                                        indicating
                                    />
                                </div>
                                <p>{optionTwoVotes} out of {total} votes</p>
                            </div>
                        </div>
                    )}
                    {viewed && answered === false && (
                        <form
                            onSubmit={(e) => handleSubmit(e)}
                            className='flow form'
                        >
                            {processing ? (
                                <div className='grid relative'>
                                    <div>
                                        <Loader active size='massive' />
                                    </div>
                                    <span className='fs-500 ff-serif text-accent loading'>Loading Data...</span>
                                </div>
                            ) : (
                                <>
                                    <p>Would You Rather?</p>
                                    <div className='flex'>
                                        <input
                                            type='radio'
                                            id='optionOne'
                                            name='options'
                                            value={poll.optionOne.text}
                                            onChange={(e) => setanswer(e.target.id)} />
                                        <label
                                            className='ff-sans-cond fs-400'
                                            htmlFor='optionOne'>{poll.optionOne.text}</label>
                                    </div>
                                    <div className='flex'>
                                        <input
                                            type='radio'
                                            id='optionTwo'
                                            name='options'
                                            value={poll.optionTwo.text}
                                            onChange={(e) => setanswer(e.target.id)} />
                                        <label
                                            className='ff-sans-cond fs-400'
                                            htmlFor='optionTwo'>{poll.optionTwo.text}</label>
                                    </div>
                                    <button
                                        type='submit'
                                        className='bg-trans text-accent button'
                                    >
                                        Submit
                                    </button>
                                </>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Poll
