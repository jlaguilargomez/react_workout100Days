import React, { Component } from 'react';

// Components
import Exercises from '../repo/Exercises';


// Media
import interrogation from '../../media/icons/interrogation.png'

class ExerciseBox extends Component {

    render(){  
        
        const exercise = Exercises[this.props.id]

        return(
            <div className="exercise-box flex__row frame--white">
                <img className="img--small" src={exercise.img}></img>
                <div className="flex__column">
                    <h4>{exercise.id}</h4>
                    <div className="flex__row">
                        <span>Repeticiones</span>
                        <span>{this.props.reps}x</span>
                    </div>
                    <div className="flex__row">
                        <span>Tiempo</span>
                        <span>{this.props.time}"</span>
                    </div>
                </div>
                <img className="question" src={interrogation} alt="interrogation" />
            </div>

        
        )
    }
}

export default ExerciseBox;