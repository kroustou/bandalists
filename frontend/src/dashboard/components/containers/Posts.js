import React from 'react'

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
                           <div key={thread.id} className="thread">
                              {thread.text}
                           </div>
                        )
                    )
                ): ''}
        </div>
    )
}

export default Posts
