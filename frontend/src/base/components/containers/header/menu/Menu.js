import React from 'react'
import {Link} from 'react-router'
import {Notifications} from '../../../../../notifications'
import Avatar from '../../../../../profile/components/containers/Avatar'

class Menu extends React.Component {
    render() {
        return (
            <ul className='six columns menu' >
                { this.props.authenticated ? <li className='two columns profile'><Link activeClassName='active' to='/profile/'>
                    <div className="avatar-circle">
                        {this.props.user ? <Avatar img={this.props.user.avatar}/> :'' }
                    </div>
                </Link></li> : ''}
                { this.props.authenticated ? '' : <li className='two columns'><Link activeClassName='active' to='/login/'><i className="fa fa-sign-in" aria-hidden="true"></i>
</Link></li>}
                { this.props.authenticated && this.props.selectedBand ? <li className='two columns'><Link activeClassName='active' to='/dashboard/'><i className="fa fa-comments" aria-hidden="true"></i></Link></li>: ''}
                { this.props.authenticated ? <Notifications/> : '' }
            </ul>
        )
    }
}

export default Menu
