import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '@containers/Dashboard';
import NotFound from '@containers/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
};

export default App;