import React, { Component } from "react";
import { ThemeConsumer, UserConsumer } from "../Context";

export default class ConsumerPage extends Component {
    render() {
        return (
            <div>
                <h4>ConsumerPage</h4>
                <ThemeConsumer>
                    {
                        context => (
                            <div className={context.themeColor}>
                                test
                                <UserConsumer>
                                    {
                                        user => <p>{user.name}</p>
                                    }
                                </UserConsumer>
                            </div>
                        )
                    }
                </ThemeConsumer>
            </div>
        )
    }
}