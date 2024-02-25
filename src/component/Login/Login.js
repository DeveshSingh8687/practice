import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isLogin } from '../../Redux/action'
import { useDispatch } from 'react-redux'

function Login(prop) {
    const[login,setLogin] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(isLogin(login))
    },[login])
  return (
    <div>
        <h1>Login</h1>
        <form>
            <label>Username</label>
            <input type='text' placeholder='Enter username' required/><br/>
            <label>Password</label>
            <input type='password' placeholder='Enter Password' required/>
        </form>
        <button onClick={()=>setLogin(true)}>Login</button>
        <p>Didn't have account?</p>
        <Link to='/signup'>Signup</Link>
    </div>
  )
}

export default Login