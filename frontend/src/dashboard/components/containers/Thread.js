import React from 'react'
import PostForm from '../PostForm'
import moment from 'moment/moment'

const Comment = ({thread, deletePost}) =>  <Thread thread={thread} child={true} deletePost={deletePost}/>

const Thread = ({thread, child, deletePost}) => {
    const initialValues = {dashboard: thread.dashboard, parent: thread.id}
    return (
        <div className={child ? 'comment' : 'thread'}>
            <span className="delete" onClick={() => {deletePost(thread)}}>x</span>
            <div className="text">{thread.text}</div>
            <span className="author">{thread.author}</span> <span className="date">{moment.unix(thread.last_edit).fromNow()}</span>
            {thread.seen_by.length ? <div className="seen">{`Seen by: ${thread.seen_by.map(user => user)}`}</div>: ''}
            {!child ? <PostForm form={`postForm_${thread.id}`} initialValues={initialValues}/> : '' }
            {thread.children.map((thread) => {
                return <Comment key={thread.id} thread={thread} deletePost={deletePost}/>
            })}
       </div>
	)
}

export default Thread
