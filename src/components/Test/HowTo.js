// Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from '../small/Button';
import Exercises from '../repo/Exercises'


class HowTo extends Component {

    state = {
        id:"",
        type:"",
        level:0,
        img:'',
        description:''
    }

    getExercise = () => {

        const exercise = this.props.location.state;

        console.log(exercise)

        this.setState({
            id:exercise.id,
            type:exercise.type,
            level: exercise.level,
            img: exercise.img,
            description: exercise.description,
        })
    }

    componentWillMount() {
        this.getExercise();
    }

    render() {
        
        console.log(this.state)

        return (

            <div id="" className="content">

                <h2>{this.state.id}</h2>
                <h2>{this.state.type}</h2>
                <h2>{this.state.level}</h2>
                <h2>{this.state.img}</h2>
                <h2>{this.state.description}</h2>
                <p>Te vamos a dar 1 minuto para hacer tantas <strong>hola</strong> como puedas.</p>
                <div id="question-squat" className="question-box">
                    <img className="question" src="" alt="interrogation" />
                </div>
                <div className="exercise-box">
                    <img className="exercise" src='' alt="squat" />
                </div>
                <Link to="/description"><Button value="¡ Vamos !" /></Link>

            </div>
        )
    }
}

export default HowTo;