import React from 'react'
import Header from './header/Header'

require('./app.scss')
require('normalize.css/normalize.css')
require('skeleton-css/css/skeleton.css')

const App = ({children}) => (
	<div>
		<Header/>
		<h1>App</h1>
		{children}
	</div>
)


export default App
