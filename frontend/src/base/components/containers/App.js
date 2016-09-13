import React from 'react'
import Header from './header/Header'


const App = ({children, authenticated}) => (
    <div id="main">
        <Header authenticated={authenticated}/>
        <div className="container">
            {authenticated ? <div>Logged in!</div> : <div>Welcome. Please login.</div> }
            {children}
        </div>
    </div>
)

App.propTypes = {
    children: React.PropTypes.node
}


export default App
