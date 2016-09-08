import {createStore} from "redux";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {Router, Route, hashHistory} from "react-router";
import App from "./components/App";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import {reducers} from  "./reducers";

const store = createStore(reducers);

// we need to render the app first...
ReactDOM.render(
     <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <Route path="profile" component={Profile}/>
            <Route path="dashboard" component={Posts}/>
          </Route>
        </Router>
      </Provider>,
    document.getElementById('app')
);
