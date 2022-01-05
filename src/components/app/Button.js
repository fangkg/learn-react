import React, { Component } from "react";
import propTypes from "prop-types";

class Button extends React.Component{
    render() {
        return (
            <button style={{background: this.props.color, color: this.context.color}}>
                {this.props.children}
            </button>
        )
    }
}

Button.contextType = {
    color: propTypes.string
}

export default Button;