import React from 'react'
import {Link} from "react-router-dom"
import style from "./MainPage.module.css"
const MainPage = () => {
  return (
    <div className={style.container} >
        <ul>
            <li><Link className={style.link} to="/">LOGIN</Link> </li>
            <li><Link  className={style.link} to="/SignUp">registration</Link> </li>
            <li><Link className={style.link} to="/home">home</Link> </li>
        </ul>
    </div>
  )
}

export default MainPage