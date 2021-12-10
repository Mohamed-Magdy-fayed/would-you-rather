import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Image } from 'semantic-ui-react'
import { handleAddUser } from '../actions/users'
import profile from '../assets/profile.png'

const SignUp = () => {
    const [url, seturl] = useState(null)
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            url,
            username,
            password,
        }
        dispatch(handleAddUser(user))
    }
    return (
        <div>
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
                >
                </input>
                <label
                    htmlFor='password'>Password</label>
                <input
                    className='form-input bg-dark text-white fs-400 ff-sans-cond'
                    id='password'
                    name='password'
                    value={password}
                    type='text'
                    placeholder='Password'
                    onChange={(e) => setpassword(e.target.value)}
                >
                </input>
                <button
                    type='submit'
                    className='button bg-trans text-accent'>
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default SignUp
