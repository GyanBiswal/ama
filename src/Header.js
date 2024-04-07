import React from 'react'
import './Header.css'
import logo from './images/amazon-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {getAuth} from 'firebase/auth'

function Header() {
    const auth = getAuth();
    const [{ basket , user }, dispatch] = useStateValue();

    const handleAuthetication = () => {
        if(user){
            auth.signOut()
        }
    }

  return (
    <div className='header'>
        <Link to = '/'>
            <img className='header-logo' src={logo} alt="" />
        </Link>
        <div className="header-search">
            <input className='header-search-input' type="text" placeholder='Search Amazon.in'/>
            <SearchIcon className='header-searchIcon'/>
        </div>
        <div className="header-nav">
            <Link to = {!user && '/login'}>
                <div onClick={handleAuthetication} 
                    className="header-option">
                    <span className="option-1">
                        Hello Guest
                    </span>
                    <span to='/login' className="option-2">
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
            </Link>
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
            <Link to = '/checkout'>
                <div className="header-cart-option">
                    <ShoppingCartIcon/>
                    <span className='cart-count'>{basket?.length}</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header