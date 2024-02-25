import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Link to="/home">Home</Link> &nbsp;
        <Link to="about">About</Link> &nbsp;
        <Link to="contact">Contact</Link> &nbsp;
        <Link to="career">Career</Link> &nbsp;
        <button>Logout</button>
    </div>
  )
}

export default Header