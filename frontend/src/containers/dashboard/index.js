import Posts from './Posts'
import PostForm from '../../components/Dashboard/PostForm'
import React from 'react'

export const Dashboard = (props) => {

    return (
        <div className='dashboard'>
            <PostForm />
            <input onClick={props.getPosts} className='button-primary' value='get threads' type='button'/>
            <Posts {...props}/>
        </div>
    )
}
