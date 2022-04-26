import React, { useState } from 'react'
import "./css/login.css"
import{CgDanger} from "react-icons/cg"
import { Link } from 'react-router-dom'
import { useData } from "../context/fetchdata"
import User from './user'
const Login = () => {
  const { info: { login }, loginHandler } = useData()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  console.log(login);
  return (
    !login ? (
      <>
        {user ==="" || password ===""?(
          <div className="alert-red p2 login-alert"><CgDanger/>Enter ALL the values</div>
        ):("")}
        <div className="login-container">
          <div className="login-head">Login</div>
          <div className="login-item">
            <label htmlFor="" className='login-label'>User name</label>
            <input type="text" value={user} className='login-input' onChange={(e) => setUser(e.target.value)} />
          </div>
          <div className="login-item" >
            <label htmlFor="" className='login-label'>password</label>
            <input type="password" value={password} className='login-input' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="login-sm-txt">
            forget password <Link to="/forget-password" className='link-nostyle'> click here</Link>
          </div>
          <div className="login-btn">
            {user&&password!=="" ? (<button className="btn" onClick={() => {
              loginHandler({ type: "login", payload: { user, password } })
            }}><Link to="/" className='link-nostyle'>Log-in</Link></button>) : (<button className="btn btn-sec">Log-in</button>)}

          </div>
          <div className="login-sm-txt txt-center">
            To create a new account <Link to="/signup" className='link-nostyle'>Sign up</Link>
          </div>
        </div>
      </>) : (<User />)
  )
}

export default Login