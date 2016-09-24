import React from 'react'
import Thread from './Thread'
import PostForm from '../PostForm'


class Posts extends React.Component {
    componentWillMount = () => {
        const {threads, getPosts, selectedBand} = this.props
        getPosts(selectedBand.id, threads)
    }

    render = () => {
        const {threads, getPosts, selectedBand, deletePost, user, loading} = this.props
        const initialValues = {dashboard: selectedBand.id}
        return (
            <div>
                <PostForm form="postForm" initialValues={initialValues}/>
                <div>
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
}

export default Posts
