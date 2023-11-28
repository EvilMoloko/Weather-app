import ThemeContext from "../context/ThemeContext"
import changeCSSRootVariables from "../model/changeCssRootVariables"
import storage from "../model/storage"
import { useState } from "react"

const ThemeProvider = ({ children, ...props }) => {
    const [theme, setTheme] = useState(storage.getItem("theme") || "light")

    changeCSSRootVariables(theme)
    const changeTheme = (theme) => {
        storage.setItem("theme", theme)
        setTheme(theme)
        changeCSSRootVariables(theme)
    }

    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                changeTheme: changeTheme,
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
