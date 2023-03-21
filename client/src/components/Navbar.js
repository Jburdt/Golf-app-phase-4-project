import React from 'react';
import { Link, useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Navbar = ({ setUser, setLoggedIn, loggedIn }) => {
  const history = useHistory();

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    })
    .then(() => {
      setUser({})
      setLoggedIn(false)
      history.push('/login')
    })
  };
  
 

  return (
  <header style={{ marginLeft: "30px"}} className='navbar'>
    <nav>
      <Link to="/">Home</Link>
      <br/>
      { loggedIn ? <Link to="/courses">Courses</Link> : <Link to="/login">Login</Link> }
      <br/>
      { loggedIn ? <Button onClick={handleLogout} variant="danger">Logout</Button> : (null, <Link to="/signup">Sign Up</Link>) }
    </nav>
  </header> 
  )
}

export default Navbar;