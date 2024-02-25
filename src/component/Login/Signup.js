import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
        <h1>Signup</h1>
        <form>
            <label>Your Name</label>
            <input type='text' placeholder='Enter your Name' required/> <br/>
            <label>UserName</label>
            <input type='text' placeholder='Enter your UserName' required/> <br/>
            <label>Password</label>
            <input type='text' placeholder='Enter your Password' required/>
        </form>
        <button>Signup</button>
        <p>already have an account?</p>
        <Link to="/">back to login</Link>
    </div>
  )
}

export default Signup