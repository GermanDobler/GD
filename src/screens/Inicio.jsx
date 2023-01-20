import React from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../context/styleContext';
import Yo from '../assets/img/YoCara.png'
export default function Inicio() {
  const { theme, handleTheme } = React.useContext(ThemeContext);
  console.log(theme)
  return (
    <div className='h-screen w-screen bg-[#1D1E22]'>
      <div className="flex justify-around items-center h-[110px] border-b">
        <h1 className="text-2xl font-bold text-white">German Dobler</h1>
        <div className="flex space-x-5">
          <Link to="/" className="text-lg font-semibold text-white">Inicio</Link>
          <Link to="/acerca" className="text-lg font-semibold text-white">Acerca</Link>
          <button className="bg-[#1D1E2280] text-white text-lg font-semibold border rounded-full px-3 py-2 sm:px-8">
            Descargar CV
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-around gap-10 pt-[150px] ">
        <div className="flex-col ">
          <p className="text-4xl font-extrabold text-gray-500">🖐Hola, me llamo</p>
          <p className="text-7xl font-extrabold text-white mt-4">German Dobler.</p>
          <p className="text-7xl font-extrabold text-[#FF8E5E] mt-4">Técnico</p>
          <p className="text-7xl font-extrabold text-[#FF8E5E]">Programador</p>
          <p className="text-7xl font-extrabold text-[#FF8E5E]">Full Stack.</p>
          <p className="text-2xl text-white w-[500px] mt-4">Soy Desarrollador Web con conocimientos en lenguajes PHP, JavaScript, HTML 5, CSS (Bootstrap, Tailwind), SQL, NoSQL, frameworks Yii 2/React JS, Vite JS/React Native </p>
        </div>
        <div className="flex justify-center items-center" >
          <img src={Yo} alt="Yo" className="w-[300px] md:h-[550px] md:w-[400px]" />
        </div>
      </div>
    </div>


  )
}

