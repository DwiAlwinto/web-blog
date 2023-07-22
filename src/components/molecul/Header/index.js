import React from 'react'
import './Header.scss'

//untuk pindaha halaman
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Header = () => {
  const history =  useHistory();
  return (
    <div className='header'>
      <p className='logo-app'>AlwinDev-Blog</p>
      <p className='menu-item' onClick={() => history.push('/login')}>Logout</p>
    </div>
  )
}

export default Header
