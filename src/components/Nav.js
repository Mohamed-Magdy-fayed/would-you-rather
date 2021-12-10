import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { signOut } from '../actions/signin'

const Nav = () => {

    const user = useSelector((store) => store.signIn.user)

    const [isExpanded, setisExpanded] = useState(false)
    const [isVisible, setisVisible] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignout = () => {
        dispatch(signOut())
        navigate('/signin')
    }

    const toggleNav = (e) => {
        e.preventDefault()
        if (!isVisible) {
            setisVisible(true)
            setisExpanded(true)
        } else {
            setisVisible(false)
            setisExpanded(false)
        }
    }

    return (
        <div className='primary-header flex bg-dark'>
            <p
                className='fs-300 ff-serif text-white user-name'
            >Welcome <span
                className='ff-serif fs-400 text-accent'
            >{user && user.text}
                </span>
                !</p>
            <button
                onClick={(e) => toggleNav(e)}
                aria-expanded={isExpanded}
                className='mobile-nav-toggle'
            ><span
                className='sr-only'
            >Menu</span></button>
            <div
                data-visible={isVisible}
                className='nav primary-navigation underline-indicators flex'
            >
                <Link
                    to='/'
                    exact='true'
                    className='fs-400 ff-sans-cond text-white'
                >
                    Home
                </Link>
                <Link
                    to='/new'
                    className='fs-400 ff-sans-cond text-white'
                >
                    New Poll
                </Link>
                <Link
                    to='/leaderboard'
                    className='fs-400 ff-sans-cond text-white'
                >
                    Leaderboard
                </Link>
                <Link
                    to='/signin'
                    onClick={() => handleSignout()}
                    className='fs-400 ff-sans-cond text-white'
                >
                    Sign Out
                </Link>
            </div>
        </div>
    )
}
export default Nav
