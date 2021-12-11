import React from 'react'
import { Loader } from 'semantic-ui-react'

const Loading = () => {
    return (
        <div className='grid'>
            <div>
                <Loader active size='massive' />
            </div>
            <span className='fs-500 ff-serif text-dark loading'>Loading Data...</span>
        </div>
    )
}

export default Loading
