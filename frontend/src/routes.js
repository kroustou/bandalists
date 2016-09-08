import React from "react";
import {Route} from "react-router";
import App from "./components/App";
import Posts from "./containers/Posts";
import Profile from "./containers/Profile";
import Login from "./components/auth/Login";

export const routes = (
    <Route path="/" component={App}>
        <Route path="/profile/" component={Profile}/>
        <Route path="/dashboard/" component={Posts}/>
        <Route path="/login/" component={Login}/>
    </Route>
)
