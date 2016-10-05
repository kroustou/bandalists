import React from 'react'
import Thread from './Thread'
import {Link} from 'react-router'

class ThreadDetails extends React.Component {
    componentDidMount() {
        this.props.getPosts(this.props.dashboard.id)
    }
    render() {
        let thread = this.props.currentThread
        const {deletePost, user} = this.props
        if (thread) {
            return (
                <div className="thread-detail">
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
