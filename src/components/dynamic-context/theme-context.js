import React from "react";

export const themes = {
    light: {
        foreground: "#00000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
}

export const ThemeContext = React.createContext(themes.dark);