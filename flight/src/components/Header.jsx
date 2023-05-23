import React from "react";
import logo from './assets/Mini-projet.png';

export default function Header() {
  return (
    <a className='navbar-brand' href='/'>
      <header className='navbar bg-light mb-4 p-0' style={{ color: 'black', position: 'fixed', top: 0, left: 0, width: '100%', display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt='logo' className='mr-2' style={{ width: "auto", height: "auto" }} />
        <h1 style={{ color: 'black', marginLeft: '10px' }}>Mini-Projet</h1>
      </header>
    </a>
  );
}