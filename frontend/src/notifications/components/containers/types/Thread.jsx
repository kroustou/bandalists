import React from 'react'
import moment from 'moment/moment'
import Avatar from  '../../../../profile/components/containers/Avatar'
import Remarkable from 'remarkable'


class Thread extends React.Component {
	 rawMarkup = () => {
        let md = new Remarkable()
        let rawMarkup = md.render(this.props.message.text)
        return { __html: rawMarkup }
    }

    render = () => {
    	let {message} = this.props
    	return (
            <div className="row">
                <div className="row">
                    <div className="two columns">
                        <Avatar img={message.author.avatar} />
                    </div>
                    <div className="ten columns">
                        New {message.parent ? 'reply' : 'post'} from {message.author.username}
                    </div>
                </div>
                <div className="row" dangerouslySetInnerHTML={this.rawMarkup()}></div>
                <span className="date">{moment.unix(message.last_edit).fromNow()}</span>
            </div>
        )
    }
}

export default Thread
