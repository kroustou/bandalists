import React from 'react'
import {Link, IndexLink} from 'react-router'

class Menu extends React.Component {
    render() {
        return (
            <ul className='twelve columns menu' >
                { this.props.authenticated ? <li className='two columns'><a href="" onClick={e=>{
                    e.preventDefault()
                    this.props.logout()
                }}>Logout</a></li>: ''}
                { this.props.authenticated && this.props.selectedBand ? <li className='two columns'><Link activeClassName='active' to='/dashboard/'>dashboard</Link></li>: ''}
                { this.props.authenticated ? <li className='two columns'><Link activeClassName='active' to='/profile/'>profile</Link></li> : ''}
                { this.props.authenticated ? <li className='two columns'><Link activeClassName='active' to='/bands/'>bands</Link></li> : '' }
                { this.props.authenticated ? '' : <li className='two columns'><Link activeClassName='active' to='/login/'>login</Link></li> }
                <li className='two columns'><IndexLink to='/' activeClassName='active'>Home</IndexLink></li>
            </ul>
        )
    }
}

export default Menu
