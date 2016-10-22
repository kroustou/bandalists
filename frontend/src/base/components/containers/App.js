import React from 'react'
import Header from './header/Header'
import {init} from '../../actions/'
import Notification from '../../../notifications/components/containers/Notification'
import DocumentTitle from 'react-document-title'

const Loading = () => (
    <div className="loader">
        <div className="loader__figure"></div>
        <p className="loader__label">Loading...</p>
    </div>
)

class App extends React.Component{
    componentWillMount() {
        init(this.props.dispatch)
    }
    render() {
        const {children, authenticated, messages, loading, notifications, selectedBand} = this.props
        let newNotifications = notifications.results.filter(notification => !notification.read).length.toString()
        let title = 'Bandalists'
        if (authenticated) {
            title += ` | ${ selectedBand ? selectedBand.name : '' } (${newNotifications})`
        }
        return (
            <DocumentTitle title={title}>
                <div id='main' className={loading ? 'loading' : ''}>
                    {loading ? <Loading/> : ''}
                    <Header authenticated={authenticated}/>
                    <ul className='messages'>
                        {messages.map(notification => <Notification key={notification} notification={notification} goToNotification={()=>{}}/>)}
                    </ul>
                    <div className='container'>
                        {children}
                    </div>
                </div>
            </DocumentTitle>
        )
    }
}

App.propTypes = {
    children: React.PropTypes.node
}


export default App
