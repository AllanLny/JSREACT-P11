import React from 'react'
import '../SideBar/Sidebar.css'
import Logo1 from "../../assets/Logo/.icon.png"
import Logo2 from "../../assets/Logo/.icon2.png"
import Logo3 from "../../assets/Logo/.icon3.png"
import Logo4 from "../../assets/Logo/.icon4.png"

export default function Sidebar() {
  return (
    <div className='divSide'>
        <nav className='navSide'>
        <img src={Logo1} className='side_icon' alt='side_icon' />
        <img src={Logo2} className='side_icon' alt='side_icon' />
        <img src={Logo3} className='side_icon' alt='side_icon' />
        <img src={Logo4} className='side_icon' alt='side_icon' />
        </nav>
        <p className='Copiryght'>Copiryght, SportSee 2020</p>
    </div>
  )
}
