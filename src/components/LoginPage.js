import React from 'react'
import './style.css'
import { Link, Outlet, } from 'react-router-dom'
import { useState } from 'react'
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'


const LoginPage = () => {
  const [type, setType]=useState('password');
  const [icon, setIcon]=useState(eyeOff);

  const handleToggle=()=>{    
    if(type==='password'){
      setIcon(eye);      
      setType('text');
    }
    else{
      setIcon(eyeOff);     
      setType('password');
    }
  }
  return (
    <>
    <nav className='navcol'>
    <div className='navl'>
        <ul><li><Link to="/" className='navtxt'>Home</Link></li></ul>
        <ul><li><Link to="/login" className='navtxt'>Login</Link></li></ul>
      </div>
    <div className='navh'>SDP Portal</div>  
    </nav>

    <div className='loginPage'>
        <div className='infpic'></div>
        <div className='logindetail'>
            <h4>Sign in to InfiniumDevIO</h4>
            <p style={{color:"gray",marginTop:"-0.5rem"}}>Enter your details below.</p>
            <div>
            <form className='form'>
                <input type="text" placeholder="Email address" /> <br /> <br />
                {/* <input type="password" placeholder="Password" /> <br /> <br /> */}
        <div className='input-field'>
          <input type={type} placeholder="Password"/>
          <span onClick={handleToggle}><Icon icon={icon} size={20}/></span>
        </div>
        <br />
                <button>Login</button>
            </form>

            </div>
        </div>
    </div>
    <Outlet />
    </>
  )
}

export default LoginPage