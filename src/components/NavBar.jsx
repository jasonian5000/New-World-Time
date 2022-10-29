import React from 'react'
import "../css/NavBar.css"

export default function NavBar() {
  return (
    <div className='navbar_wrapper'>
        <img className='logo' src={require("../assets/logo.png")} alt="logo" />
        <h1 className='page_title'>New World Clock</h1>
    </div>
  )
}
