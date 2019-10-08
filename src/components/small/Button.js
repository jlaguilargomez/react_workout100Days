// Libraries
import React, { Component } from 'react';


class Button extends Component {

    render() {

        return (
            <button id="start-button" className="btn" type="button">{this.props.value}</button>
        );
    }
}


export default Button;