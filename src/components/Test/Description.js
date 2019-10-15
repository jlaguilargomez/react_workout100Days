// Libraries
import React, { Component } from 'react';
import exercisesGroup from '../../media/images/exercisesGroup.png'
import { Link } from 'react-router-dom';

// Component
import Button from '../small/Button';

// Media
import squat from '../../media/images/squat.png'


class Description extends Component {

    render() {

        return (
            <div className="frame__general frame--white flex__column">
                <div id="" className="content">

                    <p className="">¡ Ponte ropa de entrenamiento y <strong>prepárate !</strong></p>
                    <p>Vas a hacer <strong>tres ejercicios sencillos</strong> y, en función de las repeticiones que seas capaz de hacer <strong>te daremos tu punto de partida</strong>.</p>
                        

                    <img src={exercisesGroup} alt="grupo de entrenamiento" />
                    <Link to="/test/todo"><Button style="btn btn--red" value="¡ Estoy preparado !" /></Link>

                </div>

            </div>


        )
    }
}

export default Description;