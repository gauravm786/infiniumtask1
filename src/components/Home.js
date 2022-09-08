import React from 'react'
import "./style.css"
import { Link, Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <nav className='navcol'>
    <div className='navl'>
        <ul><li><Link to="/" className='navtxt'>Home</Link></li></ul>
        <ul><li><Link to="/login" className='navtxt'>Login</Link></li></ul>
      </div>
    <div className='navh'>SDP Portal</div>  
    </nav>

    <div className='div1'></div>
    <Outlet />
    </>
  )
}

export default Home