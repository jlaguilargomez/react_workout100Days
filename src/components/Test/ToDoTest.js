// Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import ExerciseBox from '../ExerciseBox';
import Button from '../small/Button';
import Exercises from '../repo/Exercises';



class ToDo extends Component {

    render() {

        const exerciseTest = (Exercises.push07);
        console.log(exerciseTest);

        return (
            <div className="frame__general flex__column">
                <div className="content flex__column">
                    <h3>Estos son los ejercicios de hoy</h3>
                    <ExerciseBox id='leg13' reps="8" time="60"></ExerciseBox>
                    <ExerciseBox id='push08' reps="10" time="30"></ExerciseBox>
                    <ExerciseBox id='abd04' reps="20" time="45"></ExerciseBox>
                    <ExerciseBox id='pull05' reps="8" time="60"></ExerciseBox>
                    <ExerciseBox id='push11' reps="10" time="30"></ExerciseBox>
                    <ExerciseBox id='abd07' reps="20" time="45"></ExerciseBox>
                    <ExerciseBox id='leg10' reps="20" time="45"></ExerciseBox>
                    <Link to={{ pathname:"/test/howto", state: { id:exerciseTest.id, type:exerciseTest.type, level: exerciseTest.level, img: exerciseTest.img, description: exerciseTest.description } }}><Button format="btn btn--white" value="Comenzar entreno"></Button></Link>  
                </div>
            </div>
        )
    }
};

export default ToDo;