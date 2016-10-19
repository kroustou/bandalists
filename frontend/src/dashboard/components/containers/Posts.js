import React from 'react'
import Thread from './Thread'
import PostForm from '../PostForm'
import _ from 'underscore'


class Posts extends React.Component {
    isAtBottom = () => {
        let b = document.body
        let h = document.documentElement
        let height
        if (typeof document.height !== 'undefined') {
            height = document.height // For webkit browsers
        } else {
            height = Math.max( b.scrollHeight, b.offsetHeight,h.clientHeight, h.scrollHeight, h.offsetHeight )
        }

        if (height <= screen.height + window.scrollY) {
            if (this.props.threads.next) {
                this.props.getNextPage(this.props.threads.next)
            }
        }
    }

    componentWillMount = () => {
        const {getPosts, selectedBand} = this.props
        getPosts(selectedBand.id)
        window.addEventListener('mousewheel', _.throttle(this.isAtBottom, 2000))
    }

    componentWillUnmount = () => {
        window.removeEventListener('mousewheel', _.throttle(this.isAtBottom, 2000))
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
