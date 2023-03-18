import React from 'react';
import { Link, useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Navbar = ({ setUser }) => {
  const history = useHistory();

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    })
    .then(setUser({}))
      history.push('/login')
  };
  
  return (
  <header className='navbar'>
    <nav>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/signup">Sign Up</Link>
      <br/>
      <Link to="/login">Login</Link>
      <br/>
      <Link to="/courses">Courses</Link>
      <br/>
      <Button onClick={handleLogout} variant="danger">Logout</Button>{' '}
    </nav>
  </header> 
  )
}

export default Navbar;