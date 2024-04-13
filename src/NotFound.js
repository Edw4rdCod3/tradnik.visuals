import './App.css';
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import brush from './brush.png'


function NotFound() {
  const navRef = useRef();
  const showNavbar = () => {
    
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
    return (

  
      <header>
      <h3 className='logo'>LOGO</h3>
        <nav ref={navRef}>
        <a href="/#">Home</a>

        <a href="/#">Donate</a>
  
      </nav>
      <button className="nav-btn"
          onClick={showNavbar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
      
        </button>
      </header>
  
    );
  }
  
  export default NotFound;
  