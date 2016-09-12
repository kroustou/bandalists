import React from 'react'

const Thread = ({thread}) => {
	return (
		<div key={thread.id} className="thread">
          {thread.text}
       </div>
	)
}

export default Thread
