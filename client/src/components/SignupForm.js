import React from 'react';

const SignupForm = () => {


  return (
    <form onSubmit={null}>
    <input
      placeholder='Username'
      type="text"
      value={null}
      onChange={(e) => null}
      />
    <input
      placeholder='Password'
      type="text"
      value={null}
      onChange={(e) => null}
      />
      <button type="submit">Signup</button>
  </form>
  )
}

export default SignupForm;