import PropTypes from "prop-types";
import React from "react";

class MediaQuery extends React.Component {
    constructor(props) {
        super(props);
        this.state = { type: "desktop" }
    }

    getChildContext() {
        return {
            type: this.state.type
        }
    }

    componentDidMount() {
        const checkMediaQuery = () => {
            const type = window.matchMedia("(min-width: 1025px)").matches ? "desktop" : "mobile";
            if(type !== this.state.type) {
                this.setState({type});
            }
        }

        window.addEventListener("resize", checkMediaQuery);
        checkMediaQuery();
    }

    render() {
        return this.props.children;
    }   
}

MediaQuery.childContextTypes = {
    type: PropTypes.string
}