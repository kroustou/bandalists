import PostForm from '../PostForm'
import BandSelector from '../BandSelector'
import Posts from '../Posts'
import React from 'react'

export const Dashboard = () => {
    return (
        <div className='dashboard'>
            <BandSelector/>
            <PostForm />
            <Posts/>
        </div>
    )
}
