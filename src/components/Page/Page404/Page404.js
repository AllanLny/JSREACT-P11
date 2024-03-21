import React from 'react'
import Header from '../../Header/Header';
import SideBar from '../../SideBar/Sidebar';
import "./Page404.css"

export default function Page404() {
  return (
    <div>
        <Header/>
        <SideBar/>
        <h5>
            Page introuvable !
        </h5>
    </div>
  )
}
