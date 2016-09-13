import React from 'react'
import PostForm from '../PostForm'
import moment from 'moment/moment'

const Comment = ({thread}) =>  <Thread thread={thread} child={true}/>

const Thread = ({thread, child}) => {
    const initialValues = {dashboard: thread.dashboard, parent: thread.id}
    return (
        <div className={child ? 'comment' : 'thread'}>
            <div className="text">{thread.text}</div>
            <span className="author">{thread.author}</span> <span className="date">{moment.unix(thread.last_edit).fromNow()}</span>
            {thread.seen_by.length ? 'Seen by:': ''}
            {!child ? <PostForm form={`postForm_${thread.id}`} initialValues={initialValues}/> : '' }
            {thread.children.map((thread) => {
                return <Comment key={thread.id} thread={thread}/>
            })}
       </div>
	)
}

export default Thread
