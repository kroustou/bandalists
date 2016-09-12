import PostForm from '../../components/Dashboard/PostForm'
import BandSelector from '../../components/Dashboard/BandSelector'
import React from 'react'

export const Dashboard = (props) => {

    return (
        <div className='dashboard'>
            <BandSelector/>
            {props.children}
            <PostForm />
        </div>
    )
}
