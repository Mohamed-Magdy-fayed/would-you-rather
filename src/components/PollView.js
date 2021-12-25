import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router'
import { Button, Icon, Message } from 'semantic-ui-react'
import { useAuth } from '..'
import { useNavigateToHome } from '../_DATA'
import Nav from './Nav'
import Poll from './Poll'

const PollView = () => {

    const navigate = useNavigate()
    const { currentUser } = useAuth()

    useNavigateToHome(currentUser, navigate)

    const { id } = useParams()

    const questions = useSelector(store => store.questions)
    const poll = questions[id]

    const handleBack = (e) => {
        e.preventDefault()
        navigate(-1)
    }

    if (!poll) {
        return (
            <div className='container fill'>
                <Nav />
                <Message negative size='massive'>
                    <Message.Header>We're sorry we couldn't find this poll</Message.Header>
                    <p>Error 404 NOT FOUND</p>
                    <Button
                        labelPosition='right'
                        label='Go back'
                        icon 
                        floated='left'
                        compact
                        circular
                        onClick={(e) => handleBack(e)}
                    >
                        hifasd<Icon name='left arrow' />
                    </Button>
                </Message>
            </div>
        )
    }

    return (
        <div className='container fill'>
            <Nav />
            <div className='poll-view'>
                <Poll poll={poll} viewed={true} />
            </div>
        </div>
    )
}

export default PollView
