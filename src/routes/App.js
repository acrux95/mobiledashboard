import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from "@components/Layout";
import Dashboard from '@containers/Dashboard';
import Retirement from "@containers/Retirement";
import NotFound from '@containers/NotFound';


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/retirement" component={Retirement} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;