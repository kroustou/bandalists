import React from 'react'
import {Link, IndexLink} from 'react-router'

class Menu extends React.Component {
    render() {
        return (
            <ul className='seven columns menu' >
                { this.props.authenticated ? <li className='three columns'><a href="" onClick={e=>{
                    e.preventDefault()
                    this.props.logout()
                }}>Logout</a></li>: ''}
                { this.props.authenticated ? <li className='three columns'><Link activeClassName='active' to='/dashboard/'>dashboard</Link></li>: ''}
                { this.props.authenticated ? <li className='three columns'><Link activeClassName='active' to='/profile/'>profile</Link></li> : ''}

                { this.props.authenticated ? '' : <li className='three columns'><Link activeClassName='active' to='/login/'>login</Link></li> }
                <li className='three columns'><IndexLink to='/' activeClassName='active'>Home</IndexLink></li>
            </ul>
        )
    }
}

export default Menu
