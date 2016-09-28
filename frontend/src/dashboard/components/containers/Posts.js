import React from 'react'
import Thread from './Thread'
import PostForm from '../PostForm'


class Posts extends React.Component {
    componentWillMount = () => {
        const {getPosts, selectedBand} = this.props
        getPosts(selectedBand.id)
    }

    render = () => {
        const {threads, selectedBand, deletePost, user} = this.props
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
