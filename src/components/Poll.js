import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { Loader, Message, Progress } from 'semantic-ui-react'
import { useAuth } from '..'
import { handleAnswerQuestion } from '../actions/questions'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Poll = ({ viewed, poll }) => {

    const { id, author, optionOne, optionTwo } = poll

    const users = useSelector(store => store.users)
    const authedUser = useSelector(store => store.signIn.user)

    const [answered, setanswered] = useState(false)
    const [answer, setanswer] = useState('')
    const [processing, setprocessing] = useState(false)

    
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { currentUser } = useAuth()
    const user = users[author]

    useEffect(() => {
        if (optionOne.votes.includes(currentUser && currentUser.uid)
            || optionTwo.votes.includes(currentUser && currentUser.uid)) {
            setanswered(true)
        } else {
            setanswered(false)
        }
    }, [currentUser])

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
            uid: currentUser.uid,
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
        <div className='card flex text-white card ff-serif bg-dark'>
            <div className='card-header flex'>
                <div className='header-name'>
                    <p className='trnuc fs-400'>{user && user.text} asked:</p>
                </div>
                {viewed && (
                    <Button
                        className='button'
                        icon floated='right'
                        size='mini'
                        compact
                        labelPosition='left'
                        circular
                        onClick={(e) => handleBack(e)}
                    >
                        <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>
                    </Button>
                )}
            </div>
            <div className='card-content flex'>
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
                            <div className={poll.optionOne.votes.includes(authedUser && authedUser.id)
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
                            <div className={poll.optionTwo.votes.includes(authedUser && authedUser.id)
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
