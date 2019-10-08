// Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from './small/Button';

// Media
import trainingStart from '../media/images/trainingStart.png'


class StartTest extends Component {

    render() {

        return (

            <div id="cod#01_startTest" className="content">
                    <h2>Prueba de nivel</h2>
                    <img src={trainingStart} alt="inicio test" />
                    <p>Comienza nuestro test para valorar tu nivel y poder darte ejercicios personalizados.</p>
                    <Link to="/description"><Button value="¡ Genial !" /></Link>
            </div>
        )
    }
}

export default StartTest;