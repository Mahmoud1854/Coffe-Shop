import logo from './imgs/logo.png';
import './App.css';
export default function Header(){
  
    return(
     <header>
      <nav>
      <img src={logo} alt="logo" className='logo'/>
      <div className="hamburger" id="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#Test">customersOpinions</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </nav>
    </header>
    )
}