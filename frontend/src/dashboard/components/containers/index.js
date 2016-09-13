import PostForm from '../PostForm'
import Posts from '../Posts'
import React from 'react'

export const Dashboard = ({selectedBand}) => {
    const initialValues = {dashboard: selectedBand.pk}
    return (
        <div className='dashboard'>
            <PostForm form="postForm" initialValues={initialValues}/>
            <Posts/>
        </div>
    )
}
