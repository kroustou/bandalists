import PostForm from '../PostForm'
import Posts from '../Posts'
import React from 'react'

export const Dashboard = ({selectedBand}) => {
    const initialValues = {dashboard: selectedBand.pk}
    return (
        <div className='dashboard'>
            <PostForm form="postForm" initialValues={initialValues}/>
            <Posts/>
            <div className="members">
                <h6>Members</h6>
                {selectedBand.members.map((member) => {
                    return <div className="member">{member}</div>
                })}
            </div>
        </div>
    )
}
