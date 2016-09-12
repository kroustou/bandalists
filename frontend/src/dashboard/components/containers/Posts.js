import React from 'react'
import Thread from './Thread'

const Posts = ({threads, getPosts, selectedBand}) => {
    // if no threads loaded or threads from another dashboard
    // load threads.
    if (!threads || threads.results[0].dashboard !== selectedBand.pk) {
        getPosts(selectedBand.pk)
    }
    return (
        <div>
            {threads? threads.count: 'Loading'} Posts

            {threads ? (
                    threads.results.map((thread) => (
                           <Thread thread={thread}/>
                        )
                    )
                ): ''}
        </div>
    )
}

export default Posts
