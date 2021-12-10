import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useNavigateToHome } from '../_DATA'
import Nav from './Nav'
import Poll from './Poll'

const Home = () => {

    const questions = useSelector(store => store.questions)
    const authedUser = useSelector(store => store.signIn)

    const [answered, setanswered] = useState(false)
    
    const navigate = useNavigate()

    let allAnswered = []
    let allNotAnswered = []

    Object.keys(questions).forEach(q => {
        if (questions[q].optionTwo.votes.includes(authedUser.user.key)) {
            allAnswered.push(questions[q])
        } else if (questions[q].optionOne.votes.includes(authedUser.user.key)) {
            allAnswered.push(questions[q])
        } else {
            allNotAnswered.push(questions[q])
        }
    })

    allAnswered.sort((a,b) => {
        return b.timestamp - a.timestamp
    })
    allNotAnswered.sort((a,b) => {
        return b.timestamp - a.timestamp
    })

    useNavigateToHome(authedUser, navigate)

    return (
        <div className='fill bg-dark'>
            <Nav />
            <div className="home-menu flex bg-black underline-indicators">
                <button
                    className={answered ? 'active bg-trans' : 'bg-trans text-accent'}
                    onClick={() => setanswered(true)}
                >Answered</button>
                <button
                    className={!answered ? 'active bg-trans' : 'bg-trans text-accent'}
                    onClick={() => setanswered(false)}
                >Not Answered</button>
            </div>
            <ul className='cards-container'>
                {answered === true
                    ? (allAnswered.map((poll) => (
                        <li key={poll.id}>
                            <Poll poll={poll} answered={true} />
                        </li>
                    )))
                    : (allNotAnswered.map((poll) => (
                        <li key={poll.id}>
                            <Poll poll={poll} answered={false} />
                        </li>
                    )))
                }
            </ul>
        </div>
    )
}

export default Home
