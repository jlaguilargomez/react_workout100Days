import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import interrogation from '../media/icons/interrogation.png'



class HowTo extends Component {

    render() {

        const  { exercise, image } = this.props.location.state;

        return (

            <div id="cod#03_howToSquat" className="content">
                
                    <h2>{exercise}</h2>
                    <p>Te vamos a dar 1 minuto para hacer tantas <strong>{exercise}</strong> como puedas.</p>
                    <div id="question-squat" className="question-box">
                        <img className="question" src={interrogation} alt="interrogation" />
                    </div>
                    <div className="exercise-box">
                        <img className="exercise" src={image} alt="squat image" />
                    
                </div>
            </div>
        )
    }
}

export default HowTo;