import React from 'react'
import {Link} from 'react-router'
import {Notifications} from '../../../../../notifications'
import Avatar from '../../../../../profile/components/containers/Avatar'
import {BandSelector} from '../../../../../bands/'


class Menu extends React.Component {
    render() {
        return (
            <ul className='menu' >
                { this.props.authenticated ? <li className=""><BandSelector/></li> : '' }
                { this.props.authenticated ? <li className=' profile'><Link activeClassName='active' to='/profile/'>
                    <div className="avatar-circle">
                        {this.props.user ? <Avatar user={this.props.user}/> :'' }
                    </div>
                </Link></li> : ''}
                { this.props.authenticated ? '' : <li className=''><Link activeClassName='active' to='/login/'><i className="fa fa-sign-in" aria-hidden="true"></i></Link></li>}
                { this.props.authenticated ? '' : <li className=''><Link activeClassName='active' to='/sign-up/'><i className="fa fa-user-plus" aria-hidden="true"></i></Link></li>}
                { this.props.authenticated && this.props.selectedBand ? <li className=''><Link activeClassName='active' to='/dashboard/'><i className="fa fa-comments" aria-hidden="true"></i></Link></li>: ''}
                { this.props.authenticated ? <Notifications/> : '' }
            </ul>
        )
    }
}

export default Menu
