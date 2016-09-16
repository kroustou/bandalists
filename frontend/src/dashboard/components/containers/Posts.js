import React from 'react'
import Thread from './Thread'

export default ({threads, getPosts, selectedBand, deletePost, user}) => {
    let msg = ''
    if (threads) {
        if (selectedBand.id !== threads.dashboard) {
            getPosts(selectedBand.id)
        }
    } else {
        getPosts(selectedBand.id)
    }
    return (
        <div>
            {threads? threads.count: 'Loading'} Posts {user.username}.
            {threads ? (
                threads.results.map((thread) => (
                       <Thread key={thread.id} thread={thread} deletePost={deletePost} user={user}/>
                    )
                )
            ): ''}
        </div>
    )
}
