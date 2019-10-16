// Libraries
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Components
import StartTest from './Test/StartTest';
import Description from './Test/Description';
import Cover from './intro/Cover';
import ToDo from './Test/ToDoTest';
import HowTo from './Test/HowTo';

// Media
import exit from '../media/icons/exit.png'



class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Link to="/"><img className="exit-btn" src={exit} alt="exit icon" /></Link>
                </div>
                <Switch>

                    {/* Home */}
                    <Route exact path="/" component={Cover}></Route>
                    
                    {/* Test */}
                    <Route exact path="/test/start" component={StartTest}></Route>
                    <Route exact path="/test/description" component={Description}></Route>
                    <Route exact path="/test/todo" component={ToDo}></Route>
                    <Route exact path="/test/howto" component={HowTo}></Route>

                    {/* Random */}


                    {/* Login */}


                    {/* Profile */}
                
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
