import React, { Component } from 'react';
import { Route, BrowserRouter, Switch  } from 'react-router-dom';

import {Protected_Route} from './protected-routes';
import App from '../App';
import Login from './login';
import Users from './users';
import Notfound from './not-found';


class Route_Links extends Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Protected_Route exact path="/users" component={Users} />
                    <Route path="/login" component={Login} />
                    <Route component={Notfound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Route_Links;