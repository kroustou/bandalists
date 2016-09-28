import React from 'react'
import {api} from '../../../api'
import Thread from './Thread'
import {Link} from 'react-router'

class ThreadDetails extends React.Component {
    componentDidMount() {
        this.props.getPosts(this.props.dashboard.id)
    }
    componentDidUpdate() {
        // if we get a signal that a post was updated
        // then we have to reload posts
        if (this.props.submitted) {
            this.getThread(this.props.params.id)
        }
    }

    render() {
        let thread = this.props.currentThread
        const {deletePost, user} = this.props
        if (thread) {
            return (
                <div>
                    <Link activeClassName='active' to='/dashboard/'>
                        <input type="button" value="Back to dashboard" />
                    </Link>
                    <Thread key={thread.id} thread={thread} deletePost={deletePost} user={user}/>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default ThreadDetails
