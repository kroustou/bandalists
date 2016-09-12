import React from 'react'

const Posts = ({threads, getPosts}) => {
    if (!threads) {
        getPosts()
    }
    return (
        <div>
            <input onClick={getPosts} className='button-primary' value='get threads' type='button'/>
            {threads? threads.count: 'Loading'} Posts
        </div>
    )
}

export default Posts
