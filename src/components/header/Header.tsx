import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import {ShoppingBasket} from '@styled-icons/remix-line/ShoppingBasket'
import {Heart} from '@styled-icons/bootstrap/Heart'
 
const Header = () => {
  return (
    <div className='navbar'>
      
      <div className='genres'>
        <div className='genre'>
          <Link to='/'>Pop</Link>
        </div>
        <div className='genre'>
          <Link to='/'>Rock</Link>
        </div>
        <div className='genre'>
          <Link to='/'>Rap</Link>
        </div>
      </div>

      <div className='logo'><span className='red-span'>M</span>usic <span className='blue-span'>C</span>rush</div>
      
      <div className='links'>
        <div className='link'>
          <Link to='/'>Catalogue</Link>
        </div>
        <div className='link'>
          <Link to='/'>Stores</Link>
        </div>
        <div className='link'>
          <Link to='/'>Login</Link>
        </div>
        <div className='link icon'> 
          <Link to='/'><Heart/></Link>
        </div>
        <div className='link icon'>
          <Link to='/'><ShoppingBasket/>
          <span>0</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Header