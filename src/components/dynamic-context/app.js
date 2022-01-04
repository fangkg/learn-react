import React from "react";
import { ThemeContext, themes } from "./theme-context";
import ThemedButton from "./ThemedButton";

function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: theme.light
        }

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark
            }))
        }
    }

    render() {
        return(
            <Page>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme}/>
                </ThemeContext.Provider>
                <Section>
                    <ThemedButton/>
                </Section>
            </Page>
        )
    }
}

ReactDOM.render(<App/>, document.root);