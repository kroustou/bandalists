import React from 'react'

const Posts = ({threads, getPosts}) => {
    if (!threads) {
        getPosts()
    }
    return (
        <div>
            {threads? threads.count: 'Loading'} Posts
        </div>
    )
}

export default Posts
