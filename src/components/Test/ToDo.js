import React, { Component } from 'react';
import squat01 from '../../media/images/exercisesLeg/squat01.jpg'

// Components
import Exercises from '../repo/Exercises';
import ExerciseBox from './ExerciseBox';



class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercise01: Exercises.squat01,
            exercise02: Exercises.pushUp01,
            exercise03: Exercises.abd01
        }
    }

    render() {

        console.log(squat01)
        return (
            <div className="frame__general flex__column">
                <div className="flex__column">
                    <h3>Estos son los ejercicios de hoy</h3>
                    <ExerciseBox id='squat01' reps="8" time="60"></ExerciseBox>
                    <ExerciseBox id='pushUp01' reps="10" time="30"></ExerciseBox>
                    <ExerciseBox id='abd01' reps="20" time="45"></ExerciseBox>
                </div>
            </div>
        )
    }
};

export default ToDo;