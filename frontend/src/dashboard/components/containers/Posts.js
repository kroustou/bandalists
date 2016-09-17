import React from 'react'
import Thread from './Thread'
import PostForm from '../PostForm'

export default ({threads, getPosts, selectedBand, deletePost, user}) => {
    const initialValues = {dashboard: selectedBand.pk}
    if (threads) {
        if (selectedBand.id !== threads.dashboard) {
            getPosts(selectedBand.id)
        }
    } else {
        getPosts(selectedBand.id)
    }
    return (
        <div>
            <PostForm form="postForm" initialValues={initialValues}/>
            <div>
                {threads? threads.count: 'Loading'} Posts {user.username}.
                {threads ? (
                    threads.results.map((thread) => (
                           <Thread key={thread.id} thread={thread} deletePost={deletePost} user={user}/>
                        )
                    )
                ): ''}
            </div>
        </div>
    )
}
