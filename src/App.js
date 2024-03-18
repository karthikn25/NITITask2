import { useState } from 'react';
import './App.css';
import image from './Images/logo.png';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="App">
    <nav className="navbar">
    <div className="logo"><img src={image} alt='logo'/></div>
    <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
      <ul>
        <li><i class='bx bx-home'></i>Home</li>
        <li><i class='bx bx-user'></i>About</li>
        <li><i class='bx bx-briefcase' ></i>Services</li>
        <li><i class='bx bxs-contact' ></i>Contact</li>
      </ul>
    </div>
    
    <div className="menu-icon" onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
       </div>
       
  </nav>
 { /*<div className='mobile-menu' style={{display:isMenuOpen ? "none" : "block"}}>
       <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
  </div>*/}
    </div>
  );
}

export default App;
