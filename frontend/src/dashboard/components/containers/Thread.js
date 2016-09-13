import React from 'react'

const Thread = ({thread}) => {
    return (
		<div className="thread">
          {thread.text}
       </div>
	)
}

export default Thread
