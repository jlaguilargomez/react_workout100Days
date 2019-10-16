// Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from '../small/Button';

// Media
import logo_grande from '../../media/images/logo_grande.png'

class Cover extends Component {
    render() {
        return (
            <div className="frame__general flex__column">
                <div>
                    <p className="text--red">¿Cómo funciona?</p>
                    <img src={logo_grande} alt="logo-workout100days"/>
                    <h1 className="title">Workout<strong>100Days</strong></h1>
                    <p>¡ No hay excusas !</p>

                    <Link to="/test/start"><Button format="btn btn--red" value="Text inicial" /></Link>
                    <Button format="btn btn--white" value="Entrenamiento aleatorio"></Button>
                </div>
            </div>


        )
    }
}

export default Cover;