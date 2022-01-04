import React, { Component} from "react";
import Message from "./Message";
import propTypes from "prop-types";

class MessageList extends React.Component {
    getChildContext() {
        return {
            color: "purple"
        }
    }
    render() {
        const color = "purple";
        const children = this.props.messages.map((message) => {
            <Message text={message.text} color={color}/>
        });
        return <div>{children}</div>
    }
}

MessageList.childContextTypes = {
    color: propTypes.string
}