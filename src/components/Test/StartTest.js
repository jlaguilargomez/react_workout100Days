// Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from '../small/Button';

// Media
import trainingStart from '../../media/images/trainingStart.png'


class StartTest extends Component {

    render() {

        return (
            <div className="frame__general frame--white flex__column">
                <div id="" className="content">
                    <h2>Prueba de nivel</h2>
                    <img src={trainingStart} alt="inicio test" />
                    <p>Comienza nuestro test para valorar tu nivel y poder darte ejercicios personalizados.</p>
                    <Link to="/test/description"><Button format="btn btn--red" value="¡ Genial !" /></Link>
                </div>
            </div>
            
        )
    }
}

export default StartTest;