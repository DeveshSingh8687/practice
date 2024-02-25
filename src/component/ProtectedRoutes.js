import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function ProtectedRoutes(props) {
    const {Comp} = props
    const navigate = useNavigate()
    const logindetails = useSelector((item)=>item.loginDetails)
    // console.log(result);
    useEffect(()=>{
        if(!logindetails){
            navigate('/')
        }
    })
  return (
    <div>
        <Comp />
    </div>
  )
}

export default ProtectedRoutes