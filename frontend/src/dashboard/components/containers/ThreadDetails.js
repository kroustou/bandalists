import React from 'react'
import {api} from '../../../api'
import Thread from './Thread'
import {Link} from 'react-router'

class ThreadDetails extends React.Component {
    componentDidMount() {
        this.getThread(this.props.params.id)
    }
    componentDidUpdate() {
        // if we get a signal that a post was updated
        // then we have to reload posts
        if (this.props.threadUpdated) {
            this.getThread(this.props.params.id)
        }
    }
    getThread = (threadId) => {
        // if no threads loaded or threads from another dashboard
        // load threads.
        api('/threads/' + threadId + '/').then(resp => {
            this.setState({currentThread: resp.data})
            this.props.updateDone()
        })
    }

    render() {
        let thread
        if (this.state) {
            thread = this.state.currentThread
        } else {
            thread = false
        }
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
            return <div>loading...</div>
        }
    }
}

export default ThreadDetails
