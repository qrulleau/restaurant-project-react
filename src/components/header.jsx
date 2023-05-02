import React from 'react';
import LogoWhite from '../assets/logo/logo.svg'
import LogoBlack from '../assets/logo/logo-black.png'

function Logo({background}){
  if (background === true){
    return <img src={LogoWhite} alt="" className='logo'/>;
  }
  return <img src={LogoBlack} alt="" className='logo'/>;
}

function Header(props){

  const buttonClass = props.background ? "btn-white" : "btn-black";

  return (

      <header className={props.className}>
        <div className="d-flex direction-column">
         <Logo background={props.background}/>
          
          <nav className='d-flex direction-column'>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/menu">Menu</a>
            <a href="/gallery">Gallery</a>
            <a href="/news">News</a>
            <a href="/contact">Contact</a>
          </nav>
          <a href="/reservation" className={`btn ${buttonClass}`}>Reservation</a>
        </div>
      </header>
  );
}

export default Header;