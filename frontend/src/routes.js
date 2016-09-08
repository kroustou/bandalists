import React from "react";
import {Route} from "react-router";
import App from "./components/App";
import Posts from "./components/Posts";
import Profile from "./components/Profile";

export const routes = (
    <Route path="/" component={App}>
        <Route path="profile" component={Profile}/>
        <Route path="dashboard" component={Posts}/>
    </Route>
)
