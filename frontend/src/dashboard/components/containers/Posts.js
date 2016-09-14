import React from 'react'
import Thread from './Thread'

export default ({threads, getPosts, selectedBand, threadsLoading}) => {
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
            {threads? threads.count: 'Loading'} Posts.
            {threads ? (
                threads.results.map((thread) => (
                       <Thread key={thread.id} thread={thread}/>
                    )
                )
            ): ''}
        </div>
    )
}
