import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StartTest from './StartTest';
import Description from './Description';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={StartTest}></Route>
                        <Route exact path="/home" component={StartTest}></Route>
                        <Route exact path="/description" component={Description}></Route>
                    </Switch>           
            </BrowserRouter>
        );
    }
}

export default Routes;
