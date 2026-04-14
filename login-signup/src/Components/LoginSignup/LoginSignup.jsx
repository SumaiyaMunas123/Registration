import React,{useState} from 'react'
import './LoginSignup.css'


import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import email_icon from '../Assets/email.png'

const LoginSignup = () => {
  const [action,setAction] = useState ("Login");


  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Username" />
            </div>
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="Email" />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Password" />
            </div>
        </div>
        <div className="forgot-password">Forgot password? <span> Click here</span></div>
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Signup")}}>Signup</div>
            <div className={action==="Signup"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup