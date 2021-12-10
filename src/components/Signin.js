import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Dropdown, Image, Label } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css'
import { handleSignIn } from "../actions/signin"
import { arraying } from "../_DATA"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

const Signin = () => {

    const users = arraying(useSelector((store) => store.users))

    const [selectedUser, setselectedUser] = useState(users[0].text)
    const [img, setimg] = useState(users[0].image.src)
    const [password, setpassword] = useState('')
    const [isHidden, setisHidden] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignin = (e, user) => {
        e.preventDefault()
        if (password !== user.password) {
            alert('Incorrect Password!')

            return
        }
        dispatch(handleSignIn(user))
            .then(() => navigate('/'))
    }

    return (
        <div className='signin container bg-dark text-white'>
            <Image src={img} centered circular size='small' />
            <div className='dropdown flex container'>
                <span className='fs-400 ff-sans-cond text-white'>Select Your User Name:
                    <Dropdown
                        className='fs-400 ff-sans-normal text-white'
                        inline
                        options={users}
                        defaultValue={users[0].value}
                        onChange={(e) => {
                            setselectedUser(e.currentTarget.textContent)
                            setimg(e.currentTarget.firstChild.getAttribute('src'))
                        }}
                    />
                </span>
                <input
                    className='form-input bg-dark text-white fs-400 ff-sans-cond'
                    type='password'
                    name="password"
                    value={password}
                    onChange={(e) => {
                        const test = /^[0-9\b]+$/
                        if (test.test(e.target.value) || e.target.value === '') {
                            setpassword(e.target.value)
                        } else {
                            setisHidden(true)
                        }
                        setTimeout(() => setisHidden(false), 5000)
                    }}
                    placeholder="Password" />
                <div className={!isHidden ? 'hide' : ''}>
                    <Label
                        basic
                        color='red'
                        pointing
                    >
                        Please enter numbers only!
                    </Label>
                </div>
            </div>
            <div className="underline-indicators container">
                <button
                    className='d-block fs-500 ff-serif bg-dark text-accent'
                    onClick={(e) => {
                        if (!selectedUser) {
                            alert('Please Select Your User Name')
                            return
                        }
                        for (let i = 0; i < users.length; i++) {
                            const target = users[i]
                            if (target.text === selectedUser) {
                                handleSignin(e, target)
                            }
                        }
                    }}>
                    Sign In
                </button>
            </div>
            <Link
                to={'/signup'}
                className='d-block fs-400 ff-serif bg-dark text-accent'
            >
                New User? Sign Up here.
            </Link>
        </div>
    )
}

export default Signin
