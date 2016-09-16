import React from 'react'
import Header from './header/Header'
import {init} from '../../actions/'

class App extends React.Component{
    componentWillMount() {
        init(this.props.dispatch)
    }
    render() {
        const {children, authenticated, message} = this.props
        return (
            <div id="main">
                <Header authenticated={authenticated}/>
                {message ? <div className="message">
                    {message}
                </div> : '' }
                <div className="container">
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
