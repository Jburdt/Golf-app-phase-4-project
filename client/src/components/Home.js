import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const toLogin = () => {
    history.push("/login")
  }

  const toSignUp = () => {
    history.push("/signup")
  }

  return (
    <>
      <div style={{ display: "center", justifyContent: "center", alignItems: "center"}} className="d-grid gap-2">
        <h1 style={{ textAlign: 'center', border: "2px solid black"}} className='welcome'>🏌️‍♀️ Welcome to Golf Buddy!🏌️‍♂️ </h1>
          <h5 style={{ textAlign: 'center' }}>Join a community of golfers!</h5>
            <Button onClick={() => toLogin()} variant="outline-success" size="lg">
              Log in
            </Button>
            <Button onClick={() => toSignUp()} variant="outline-info" size="lg">
              Sign up here
            </Button>
      </div>
    </>
  )
}

export default Home;