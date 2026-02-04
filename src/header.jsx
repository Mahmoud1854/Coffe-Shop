import { useState } from 'react';
import logo from './imgs/logo.png';
import './App.css';

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
     <header>
      <nav>
      <img src={logo} alt="logo" className='logo'/>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} id="hamburger" onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
      <ul className={isOpen ? 'active' : ''}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#menu" onClick={() => setIsOpen(false)}>Menu</a></li>
        <li><a href="#Test" onClick={() => setIsOpen(false)}>customersOpinions</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
      </nav>
    </header>
    )
}