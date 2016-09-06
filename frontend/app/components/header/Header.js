import React from 'react'
import Menu from './menu/Menu'

require('./header.scss')

const Header = () => (
	<header className='row'>
		<div className="Logo">Bandalists</div>
		<Menu/>
	</header>

)

export default Header
