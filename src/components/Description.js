// Libraries
import React, { Component } from 'react';
import exercisesGroup from '../media/images/exercisesGroup.png'
import { Link } from 'react-router-dom';

// Component
import Button from './small/Button';

// Media
import squat from '../media/images/squat.png'


class Description extends Component {

    render() {

        return (

            <div id="cod#02_description" className="content">
               
                <p>¡ Ponte ropa de entrenamiento y <strong>prepárate !</strong>
                    Vas a hacer <strong>tres ejercicios sencillos durante 1 minuto cada uno</strong> y, en función de las repeticiones que seas capaz de hacer <strong>te daremos tu punto de partida</strong> para el entrenamiento de la aplicación.
                </p>
                <img src={exercisesGroup} alt="grupo de entrenamiento" />
                <Link to={{pathname:"/HowTo", state:{exercise:'Sentadillas', image:squat}}}><Button value="¡ Estoy preparado !"/></Link>
        
            </div>
        )
    }
}

export default Description;