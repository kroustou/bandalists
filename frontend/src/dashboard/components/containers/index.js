import PostForm from '../PostForm'
import Posts from '../Posts'
import React from 'react'

export const Dashboard = ({selectedBand}) => {
    const initialValues = {dashboard: selectedBand.pk}
    return (
        <div className='dashboard'>
            <div className="eight columns">
                <PostForm form="postForm" initialValues={initialValues}/>
                <Posts/>
            </div>
            <div className="four columns members">
                <h5>{selectedBand.name}</h5>
                <ul>
                    {selectedBand.members.map((member) => <li key={member.id} className="member">{member.username}</li>)}
                </ul>
            </div>
        </div>
    )
}
