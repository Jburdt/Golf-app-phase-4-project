import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <nav>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/signup">Sign Up</Link>
      <br/>
      <Link to="/login">Login</Link>
    </nav>
  )
}

export default Navbar;