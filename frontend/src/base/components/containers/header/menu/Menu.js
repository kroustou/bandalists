import React from 'react'
import {Link} from 'react-router'
import {Notifications} from '../../../../../notifications'
import Avatar from '../../../../../profile/components/containers/Avatar'

class Menu extends React.Component {
    render() {
        return (
            <ul className='twelve columns menu' >
                { this.props.authenticated ? <li className='two columns profile'><Link activeClassName='active' to='/profile/'>
                    <div className="avatar-circle">
                        {this.props.user ? <Avatar img={this.props.user.avatar}/> :'' }
                    </div>
                </Link></li> : ''}
                { this.props.authenticated ? <Notifications/> : '' }
                { this.props.authenticated ? '' : <li className='two columns'><Link activeClassName='active' to='/login/'>login</Link></li>}
                { this.props.authenticated && this.props.selectedBand ? <li className='two columns'><Link activeClassName='active' to='/dashboard/'>dashboard</Link></li>: ''}
            </ul>
        )
    }
}

export default Menu
