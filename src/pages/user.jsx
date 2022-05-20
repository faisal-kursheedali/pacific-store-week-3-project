import React from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../context/fetchdata'
import "./css/user.css"
const User = () => {
  
  const {info:{user,password},loginHandler,dispatch,filter}=useData()
  return (
    <div className="user-box">
      <div className="avatar-txt avatar-lrg">{user[0].toUpperCase()}</div>
      <div className="user-head">{user}</div>
      <div className="user-item">User name : <span className="user-name">{user}</span></div>
      <div className="user-item">Password : <span className="user-password">{password}</span></div>
      <Link to="/" className='link'><button className="btn-sec btn" onClick={()=>{
        loginHandler({type:"logout"})
        dispatch({type:"logout"})
        filter({type:"clear-filter"})
      }}>Log-out</button></Link>
    </div>
  )
}

export default User