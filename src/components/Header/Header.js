import React from 'react'
import logo from "../../assets/Logo/.logo.png"
import '../Header/Header.css'

export default function Header() {
  return (
    <header>  
 <img src={logo} className='header_logo' alt='SportSee' />
 <nav>
 <h1>Accueil</h1>
 <h1>Profil</h1>
 <h1>Réglage</h1>
 <h1>Communauté</h1>
 </nav>
    </header>
    
  )
}
