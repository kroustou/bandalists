import React from 'react'
import Header from './header/Header'
import {init} from '../../actions/'
import Notification from '../../../notifications/components/containers/Notification'

class App extends React.Component{
    componentWillMount() {
        init(this.props.dispatch)
    }
    render() {
        const {children, authenticated, messages} = this.props
        return (
            <div id='main'>
                <Header authenticated={authenticated}/>
                <ul className='messages'>
                    {messages.map(notification => <Notification key={notification} notification={notification} goToNotification={()=>{}}/>)}
                </ul>
                <div className='container'>
                    {children}
                </div>
            </div>
        )
    }
}

App.propTypes = {
    children: React.PropTypes.node
}


export default App
