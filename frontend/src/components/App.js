import React from 'react';
import Header from './header/Header';

require('./app.scss');

const App = ({children}) => (
    <div id="main">
        <Header/>
        <h1>App</h1>
        {children}
    </div>
);

App.propTypes = {
     children: React.PropTypes.node
};


export default App;
