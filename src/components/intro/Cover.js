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
            <div className="framework--invisible">
                <div>
                    <p class="text--red">¿Cómo funciona?</p>
                    <img src={logo_grande} />
                    <h1 className="title">Workout<strong>100Days</strong></h1>
                    <p>¡ No hay excusas !</p>

                    <Link to="/test/start"><Button style="btn btn--red" value="Text inicial" /></Link>
                    <Button style="btn btn--white" value="Entrenamiento aleatorio"></Button>
                </div>
            </div>


        )
    }
}

export default Cover;