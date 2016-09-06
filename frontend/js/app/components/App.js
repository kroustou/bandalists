import React from 'react'
import {Link} from 'react-router'

const App = ({children}) => (
	<div>
		<h1>App</h1>
		<ul>
			<li><Link to='foo'>foo</Link></li>
			<li><Link to='bar'>bar</Link></li>
		</ul>
		{children}
	</div>
)



export default App
