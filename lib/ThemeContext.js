import React, { useContext, useState } from "react";

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {

    const [menuRef, setMenuRef] = useState()

    return (
        <ThemeContext.Provider value = {{menuRef, setMenuRef}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}