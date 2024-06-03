import React from 'react'
import { Instagram, Tiktok, Youtube } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='redes-footer'>
        <a href="#" target="_blank"><Youtube/></a>
        <a href="https://www.instagram.com/che.pistacho" target="_blank"><Instagram/></a>
        <a href="#" target="_blank"><Tiktok/></a>
      </div>
    </footer>
  )
}

export default Footer