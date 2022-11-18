import React from 'react'

const SignUp = () => {
  return (
    <>
        <h1>Sign Up</h1>
        <form>
            <label>
                Username:
                <input type="text" placeholder="Enter username..." required/>
            </label>
            <label>
                Email:
                <input type="email" placeholder="Enter email..." required/>
            </label>
            <label>
                Password:
                <input type="password" placeholder="Enter password..." required/>
            </label>
        </form>
    </>
  )
}

export default SignUp