import React, { createContext } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
    const themes = {
        light: {
          light: true,
          primary: "bg-[#f5f5f5]",
          secondary: "bg-[#fff]",
          text: "text-[#000]",
        },
        dark: {
          light: false,
          primary: "bg-[#424242]",
          secondary: "bg-[#616161]",
          text: "text-[#fff]",
        }
      }
      const [theme, setTheme] = React.useState(themes.dark);
      const handleTheme = () => {
        setTheme(theme.light == true ? themes.dark : themes.light)
      }
    const data = { theme, handleTheme };
    return (
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}
export { ThemeProvider };
export default ThemeContext;
