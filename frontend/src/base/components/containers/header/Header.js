import React from 'react'
import Menu from '../../../components/Menu'
import {BandSelector} from '../../../../dashboard/'

const Header = () => (
    <header className='row'>
        <div className='container'>
            <div className='logo two columns'>
                <img src={logo}/>
                <BandSelector/>
            </div>
            <Menu/>
        </div>
	</header>
)

import logo from '../../../../static/images/logo.png'
export default Header
