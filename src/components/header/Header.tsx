import React from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import {Heart} from '@styled-icons/bootstrap/Heart'
import Cart from '../cart/Cart'
 
const Header = () => {
  return (
    <div className='navbar'>
      
      <div className='genres'>
        <div className='genre'>
          <Link to='/categories?genre=Pop'>Pop</Link>
        </div>
        <div className='genre'>
          <Link to='/categories?genre=Rock'>Rock</Link>
        </div>
        <div className='genre'>
          <Link to='/categories?genre=Rap'>Rap</Link>
        </div>
      </div>

      <div className='logo'><Link to='/'>Music Crush</Link></div>
      
      <div className='links'>
        <div className='link'>
          <Link to='/categories'>Catalogue</Link>
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
          <Cart/>
        </div>
      </div>
    </div>
  )
}

export default Header