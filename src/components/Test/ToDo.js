import React, { Component } from 'react';
import squat01 from '../../media/images/exercisesLeg/squat01.jpg'

// Components
import Exercises from '../repo/Exercises';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          exercise01: Exercises.squat01,
          exercise02: Exercises.pushUp01,
          exercise03: Exercises.abd01
        }
    }

    render(){
        console.log(squat01)
        return(
            <div>
                <p>{this.state.exercise01.id}</p>
                <img src="./foto.jpg" alt="image"/>
            </div>
            
        )
    }
};

export default ToDo;