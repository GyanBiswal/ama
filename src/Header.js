import React from 'react'
import './Header.css'
import logo from './images/amazon-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className='header'>
        <img className='header-logo' src={logo} alt="" />
        <div className="header-search">
            <input className='header-search-input' type="text" />
            <SearchIcon className='header-searchIcon'/>
        </div>
        <div className="header-nav">
            <div className="header-option">
                <span className="option-1">
                    Hello Guest
                </span>
                <span className="option-2">
                    Sign in
                </span>
            </div>
            <div className="header-option">
                <span className="option-1">
                    Returns
                </span>  
                <span className="option-2">
                    & Orders
                </span>
            </div>
            <div className="header-option">
                <span className="option-1">
                    Your
                </span>  
                <span className="option-2">
                    Prime
                </span>
            </div>
            <div className="header-cart-option">
            <ShoppingCartIcon/>
            <span className='cart-count'>0
            </span>
            </div>
        </div>
    </div>
  )
}

export default Header