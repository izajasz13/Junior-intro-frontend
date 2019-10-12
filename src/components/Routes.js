import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Map from './Map';
import Login from './Login';
import Tasks from './Tasks';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Map} />
            <Route path="/login" exact component={Login} />
            <Route path="/tasks/:id" exact component={Tasks} />
        </Switch>
    );
};

export default Routes;
