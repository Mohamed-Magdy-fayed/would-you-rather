import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Image, Label, Loader } from 'semantic-ui-react'
import { handleAddUser } from '../actions/users'
import profile from '../assets/profile.png'
import PasswordChecklist from 'react-password-checklist'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'

const SignUp = () => {
    const [url, seturl] = useState(null)
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [isHidden, setisHidden] = useState(false)
    const [processing, setprocessing] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

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
            url,
            username,
            password,
        }
        dispatch(handleAddUser(user))
            .then(() => {
                setTimeout(() => {
                    navigate('/signin')
                    setprocessing(false)
                }, 300);
            })
    }

    return (
        <div className='flex col text-white'>
            <Button
                label='Back to Login'
                color='facebook'
                icon='left arrow'
                size='small'
                onClick={() => navigate('/signin')}
            />
            <form
                className='form flex'
                onSubmit={(e) => handleSubmit(e)}
            >
                <Image
                    src={url ? url : profile}
                    avatar
                    size='small'
                />
                <input
                    type='file'
                    onChange={(e) => seturl(window.URL.createObjectURL(e.target.files[0]))}
                >

                </input>
                <label
                    htmlFor='user-name'>User Name</label>
                <input
                    className='form-input bg-dark text-white fs-400 ff-sans-cond'
                    id='user-name'
                    name='user-name'
                    value={username}
                    type='text'
                    placeholder='User Name'
                    onChange={(e) => setusername(e.target.value)}
                />
                <label
                    htmlFor='password'>Password</label>
                <input
                    className='form-input bg-dark text-white fs-400 ff-sans-cond'
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
                <PasswordChecklist
                    className='text-accent fs-200 ff-sans-cond'
                    rules={['minLength']}
                    value={password}
                    minLength={4}
                    iconSize={10}
                    messages={{
                        minLength: 'Password should be 4 characters long!'
                    }}
                />
                <div className={!isHidden ? 'hide' : ''}>
                    <Label
                        basic
                        color='red'
                        pointing
                    >
                        Please enter numbers only!
                    </Label>
                </div>
                <button
                    disabled={processing}
                    type='submit'
                    className='button bg-trans text-accent'>
                    {processing ? <Loader active inverted size='small' /> : 'Sign Up'}
                </button>
            </form>
        </div>
    )
}

export default SignUp
