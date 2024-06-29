import React from 'react'
import { NavBar } from './NavBar'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export const Header = () => {

  return (
    <header className='header'>
        <Link to="/"><img src={logo} className='logo' alt='Logo' /></Link>
        <NavBar />
        <CartWidget/>
    </header>
  )
}
