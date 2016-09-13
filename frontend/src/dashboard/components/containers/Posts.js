import React from 'react'
import Thread from './Thread'

const Posts = ({threads, getPosts, selectedBand}) => {
    getPosts(selectedBand.pk, threads)
    return (
        <div>
            {threads? threads.count: 'No'} Posts.

            {threads ? (
                    threads.results.map((thread) => (
                           <Thread key={thread.id} thread={thread}/>
                        )
                    )
                ): ''}
        </div>
    )
}

export default Posts
