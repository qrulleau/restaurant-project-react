import React from 'react';
import Logo from '../assets/logo.svg'

function Header(props){
  return (

      <header className={props.className}>
        <div className="d-flex direction-column">
          <img src={Logo} alt="" className='logo'/>
          <nav className='d-flex direction-column'>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/menu">Menu</a>
            <a href="/gallery">Gallery</a>
            <a href="/news">News</a>
            <a href="/contact">Contact</a>
          </nav>
          <a href="/reservation" className='btn'>Reservation</a>
        </div>
      </header>
  );
}

export default Header;