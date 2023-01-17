import React from 'react'
export default function App() {
  const themes = {
    light: {
      light: true,
      primary: "bg-[#f5f5f5]",
    },
    dark: {
      light: false,
      primary: "bg-[#424242]",
    }
  }
  const [theme, setTheme] = React.useState(themes.dark);
  const handleTheme = () => {
    setTheme(theme.light == true ? themes.dark : themes.light)
  }
  return (
    <div className={`${theme.primary}`}>
      <button onClick={handleTheme}>Cambiar Tema</button>
    </div>
  )
}



