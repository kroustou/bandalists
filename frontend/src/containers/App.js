import React from 'react';
import Header from './header/Header';


const App = ({children, authenticated}) => (
    <div id="main">
        <Header/>
        <div className="container">
            {children}
        	<h6>Auth: {authenticated? 'logged in': 'not logged in'}</h6>
        </div>
    </div>
);

App.propTypes = {
     children: React.PropTypes.node
};


export default App;
