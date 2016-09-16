import React from 'react'
import Header from './header/Header'


const App = ({children, authenticated, message}) => (
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

App.propTypes = {
    children: React.PropTypes.node
}


export default App
