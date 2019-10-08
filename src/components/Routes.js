import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import StartTest from './StartTest';
import Description from './Description';
import HowTo from './HowTo'

import exit from '../media/icons/exit.png'

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Link to="/"><img className="exit-btn" src={exit} alt="exit icon" /></Link>
                </div>
                <Switch>
                    <Route exact path="/" component={StartTest}></Route>
                    <Route exact path="/home" component={StartTest}></Route>
                    <Route exact path="/description" component={Description}></Route>
                    <Route exact path="/howTo" component={HowTo}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
