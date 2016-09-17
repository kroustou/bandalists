import PostForm from '../PostForm'
import Posts from '../Posts'
import React from 'react'
import BandBlock from '../../../bands/components/BandBlock'

export const Dashboard = ({selectedBand, children}) => {
    const initialValues = {dashboard: selectedBand.pk}
    return (
        <div className='dashboard'>
            <div className="eight columns">
                <PostForm form="postForm" initialValues={initialValues}/>
                {children}
                <Posts/>
            </div>
            <div className="four columns members">
                <BandBlock editing={false}/>
            </div>
        </div>
    )
}
