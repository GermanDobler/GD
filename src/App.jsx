import React from 'react'
import ThemeContext from './context/styleContext';
export default function App() {
  const { theme, handleTheme } = React.useContext(ThemeContext);
  return (
    <div>
      <div className={`${theme.primary} ${theme.text}`}>
        <button onClick={handleTheme}>Cambiar Tema</button>
      </div>
      <div className={`${theme.primary}`}>
        <h1 className={`${theme.text}`}>Titulo</h1>
      </div>
      <div className={`${theme.secondary}`}>
        <p className={`${theme.text}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
      </div>
    </div>
  )
}
 







