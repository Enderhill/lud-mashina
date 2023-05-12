import React from 'react'
import './Navbar.scss'
import logo from '../../img/logo .png'
import { Link } from 'react-router-dom'

const Navabar = () => {
  return (
    <div className='sum'>
        <div className='logo'>
            <img className='logo1' src={logo}/>
        </div>

        <nav className='item'>
        <ul className='ul'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/consultant'>Консультанти</Link>
                </li>
                <li>
                    <Link to='/video'>Відео</Link>
                </li>
                <li>
                    <Link to='/tures'>Тури</Link>
                </li>
                <li>
                    <Link to='/about'>О нас</Link>
                </li>
        </ul>

        </nav>
      
    </div>
  )
}

export default Navabar
