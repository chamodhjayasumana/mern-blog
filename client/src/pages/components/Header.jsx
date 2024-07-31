import React from 'react';
import { Link } from 'react-router-dom'; // Make sure react-router-dom is installed
import Logo from '../images/logo.jpg';
import { FaBars } from 'react-icons/fa'; // FaBars is imported but not used in this code
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className='nav_logo'>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul className="nav_menu">
          <li><Link to="/profile">Ernest Achiever</Link></li>
          <li><Link to="/create">Create Post</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
        <button className="nav_toggle-btn">
          <FaBars />{/* Add FaBars here if you want to use it */}
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  );
}

export default Header;
