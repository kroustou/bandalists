import Posts from './Posts'
import PostForm from '../../components/Dashboard/PostForm'
import BandSelector from './BandSelector'
import React from 'react'

export const Dashboard = (props) => {

    return (
        <div className='dashboard'>
        	<BandSelector/>
            <PostForm />
        </div>
    )
}
