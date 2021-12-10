import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { arraying, useNavigateToHome } from '../_DATA'
import Nav from './Nav'
import User from './User'

const Leaderboard = () => {

    const users = useSelector(store => store.users)
    const usersArray = arraying(users)

    const scoresArray = usersArray.map(user => {
        const answers = arraying(user.answers).length
        const questions = user.questions.length
        const total = answers + questions
        return {
            ...user,
            score: total,
        }
    }).sort((a,b) => b.score - a.score)

    const authedUser = useSelector(store => store.signIn)
    const navigate = useNavigate()

    useNavigateToHome(authedUser, navigate)

    return (
        <div className='fill'>
            <Nav />
            <ul className='cards-container'>
                {scoresArray.map(user => (
                    <li key={user.key}>
                        <User user={user} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Leaderboard
