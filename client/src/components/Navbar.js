import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <nav>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/signup">Signup</Link>
    </nav>
  )
}

export default Navbar;