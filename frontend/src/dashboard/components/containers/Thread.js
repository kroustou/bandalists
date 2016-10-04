import React from 'react'
import PostForm from '../PostForm'
import moment from 'moment/moment'
import Remarkable from 'remarkable'
import {escapeHtml, replaceEntities} from 'remarkable/lib/common/utils'

const Comment = ({thread, deletePost, user}) =>  <Thread thread={thread} child={true} deletePost={deletePost} user={user}/>

class Thread extends React.Component {
    rawMarkup = () => {
        let md = new Remarkable()
        md.renderer.rules.link_open = function (tokens, idx /*, options, env */) {
            var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : ''
            return '<a target="_blank" href="' + escapeHtml(tokens[idx].href) + '"' + title + '>'
        }
        let rawMarkup = md.render(this.props.thread.text)
        return { __html: rawMarkup }
    }

    render = () => {
        const {thread, child, deletePost, user} = this.props
        const initialValues = {dashboard: thread.dashboard, parent: thread.id}
        return (
            <div className={`row ${child ? 'comment' : 'thread'}`}>
                {user.username === thread.author.username ? <span className="delete" onClick={() => {deletePost(thread)}}>x</span>:''}
                <div className="row">
                    { thread.author.avatar ? <div className="author-avatar columns two"><img src={thread.author.avatar}/></div> : ''}
                    <div className="text columns ten" dangerouslySetInnerHTML={this.rawMarkup()}></div>
                </div>
                <span className="author">{thread.author.username}</span> <span className="date">{moment.unix(thread.last_edit).fromNow()}</span>
                {thread.seen_by.length ? <div className="seen">{`Seen by: ${thread.seen_by.map(user => user)}`}</div>: ''}
                {thread.children.map((thread) => {
                    return <Comment key={thread.id} thread={thread} deletePost={deletePost} user={user}/>
                })}
                {!child ? <PostForm form={`postForm_${thread.id}`} initialValues={initialValues} placeholder='Say something...' /> : '' }
           </div>
        )
    }
}

export default Thread
