import React from 'react'
import "./header.css"
import beerk from "./beerk.jpg";
const Header = () => {
  return (
    <div className="mobile-menu-wrapper" >
        <div className="flex max-width header">
            <img src={beerk} className="header-logo"  />
            <div  >
                <div className="header-text typing-demo">Aditya Birkodi</div>
            </div>
        </div>
    </div>
  )
}

export default Header;