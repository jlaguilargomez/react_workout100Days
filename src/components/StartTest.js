import React, { Component } from 'react';
import trainingStart from '../media/images/trainingStart.png'
import { NavLink } from 'react-router-dom';

class StartTest extends Component {

    render() {

        return (

            <div id="cod#01_startTest" className="content">
                    <h2>Prueba de nivel</h2>
                    <img src={trainingStart} alt="inicio test" />
                    <p>Comienza nuestro test para valorar tu nivel y poder darte ejercicios personalizados.</p>
                    <NavLink to="/description" activeClassName="active"><input id="start-button" class="btn" type="button" value="¡Genial!" /></NavLink>
            </div>
        )
    }
}

export default StartTest;