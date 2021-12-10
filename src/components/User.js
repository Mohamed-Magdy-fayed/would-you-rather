import React from 'react'
import { Image } from 'semantic-ui-react'
import { arraying } from '../_DATA'

const User = ({ user }) => {

    const answers = arraying(user.answers).length
    const questions = user.questions.length
    const total = answers + questions

    return (
        <div className='card text-white ff-serif flex'>
            <div className='card-header'>
                <p className='fs-400'>User Name: <span className='text-accent'>{user.text}</span></p>
            </div>
            <div className="card-content flex">
                <div className='card-img'>
                    <Image src={user.image.src} size='massive' avatar wrapped  />
                </div>
                <div className='card-info'>
                    <div className="flex">
                        <p className='fs-400'>Answered Questions </p><span className="text-accent">{answers}</span>
                    </div>
                    <div className="flex">
                        <p className='fs-400'>Created Questions </p><span className="text-accent">{questions}</span>
                    </div>
                </div>
            </div>
            <div className='card-fotter'>
                <p>Total Score <span className="text-accent">{total}</span></p>
            </div>
        </div>
    )
}

export default User
