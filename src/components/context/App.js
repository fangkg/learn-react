import React from "react";
import Toolbar from "./Toolbar";

const ThemeContext = React.createContext("light");
class App extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value="dark">
                <Toolbar/>
            </ThemeContext.Provider>
        )
    }
}