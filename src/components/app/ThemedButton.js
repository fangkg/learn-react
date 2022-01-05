import React from "react";
import Button from "./Button";

class ThemedButton extends React.Component {
    render() {
        return <Button theme={this.props.theme}/>
    }
}

export default ThemedButton;