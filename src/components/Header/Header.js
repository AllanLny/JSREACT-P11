import React from 'react'
import logo from "../../assets/Logo/.logo.png"
import '../Header/Header.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>  
      < NavLink to="/"> 
      <img src={logo} className='header_logo' alt='SportSee' />
      </NavLink> 
 <nav>
 <h1>Accueil</h1>
 <h1>Profil</h1>
 <h1>Réglage</h1>
 <h1>Communauté</h1>
 </nav>
    </header>
    
  )
}
