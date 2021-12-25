import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Loader } from 'semantic-ui-react'
import { handleAddUser } from '../actions/users'
import profile from '../assets/profile.png'
import PasswordChecklist from 'react-password-checklist'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'
import { useAuth } from '..'
import { upload } from '../firebase/upload'
import { Alert, Button, Container, Form } from 'react-bootstrap'
import { BsArrowLeftCircle } from 'react-icons/bs'

const SignUp = () => {
    const [url, seturl] = useState(null)
    const [name, setname] = useState('')
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [isHidden, setisHidden] = useState(false)
    const [processing, setprocessing] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { signup } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!url) {
            alert('Please choose a profile picture!')
            return
        } else if (username === '') {
            alert('Please add a user name!')
            return
        } else if (password === '' || password.length < 4) {
            alert('Password should be 4 characters long!')
            return
        }
        setprocessing(true)
        const user = {
            name,
            username,
            password,
        }

        dispatch(handleAddUser(user, signup))
            .then(() => {
                setTimeout(() => {
                    navigate('/signin')
                    setprocessing(false)
                }, 300);
            })
    }

    return (
        <Container>
            <Container className='p-0'>
                <Button
                    size='sm'
                    variant='secondary'
                    className='mb-3'
                    onClick={() => navigate('/signin')}
                >Back
                    <BsArrowLeftCircle
                        className='m-2'
                    />
                </Button>
            </Container>
            <Form
                className='d-grid gap-2'
                onSubmit={(e) => handleSubmit(e)}
            >
                <Form.Label
                    htmlFor='name'>Name</Form.Label>
                <Form.Control
                    className='fs-400 ff-sans-cond'
                    id='name'
                    name='name'
                    value={name}
                    type='text'
                    placeholder='Your Name'
                    onChange={(e) => setname(e.target.value)}
                />
                <Form.Label
                    htmlFor='user-name'>Email</Form.Label>
                <Form.Control
                    className='fs-400 ff-sans-cond'
                    id='user-name'
                    name='user-name'
                    value={username}
                    type='text'
                    placeholder='email'
                    onChange={(e) => setusername(e.target.value)}
                />
                <Form.Label
                    htmlFor='password'>Password</Form.Label>
                <Form.Control
                    className='fs-400 ff-sans-cond'
                    id='password'
                    name='password'
                    value={password}
                    type='password'
                    placeholder='Password'
                    onChange={(e) => {
                        const test = /^[0-9\b]+$/
                        if (test.test(e.target.value) || e.target.value === '') {
                            setpassword(e.target.value)
                        } else {
                            setisHidden(true)
                        }
                        setTimeout(() => setisHidden(false), 5000)
                    }}
                />
                <Alert
                    variant='danger'
                    className={!isHidden ? 'hide' : ''}>
                    Please enter numbers only!
                </Alert>
                <PasswordChecklist
                    className='text-accent fs-200 ff-sans-cond'
                    rules={['minLength']}
                    value={password}
                    minLength={6}
                    iconSize={10}
                    messages={{
                        minLength: 'Password should be 6 characters long!'
                    }}
                />
                <Button
                    variant='primary'
                    disabled={processing}
                    type='submit'
                >
                    {processing ? <Loader active inverted size='small' /> : 'Sign Up'}
                </Button>
            </Form>
        </Container>
    )
}

export default SignUp
