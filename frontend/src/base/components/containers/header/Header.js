import React from 'react'
import Menu from '../../../components/Menu'

const Header = ({authenticated}) => (
    <header className='row'>
        <div className='container'>
            <div className='logo two columns'>
                <img src={logo}/>
            </div>
            <Menu/>
        </div>
	</header>
)

import logo from '../../../../static/images/logo.png'
export default Header
