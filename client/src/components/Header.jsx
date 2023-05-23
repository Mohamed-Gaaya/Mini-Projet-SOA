import React from "react";
import logo from './assets/Mini-projet.png';

export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <div className='d-flex'>
            <img src={logo} alt='logo' className='mr-2' style={{width:"auto",height:"auto"}}/>
            <div>Mini-Projet</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
