import PostForm from '../PostForm'
import Posts from '../Posts'
import React from 'react'

export const Dashboard = () => {
    return (
        <div className='dashboard'>
            <PostForm />
            <Posts/>
        </div>
    )
}
