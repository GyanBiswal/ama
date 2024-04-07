import React , {useState} from 'react'
import './Login.css'
import logo2 from './images/amazon-logo-2.png'
import { Link  , useNavigate} from 'react-router-dom'
// import { auth } from './firebase'
import {app} from './firebase'
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth'

function Login() {
    const auth = getAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault();
    }
    
    const register = () => {
        // e.preventDefault();
        createUserWithEmailAndPassword(auth , email , password
        ).then((value) => {
            if(auth){
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    };

  return (
    <div className='login-header'>
        <Link to = '/'>
            <img className='login-header-logo' src={logo2} alt="" />
        </Link>
        <div className="login-container">
            <form action="
            ">
                <h1>Sign in</h1>
                <h5>Email</h5>
                <input type="email" autoFocus value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn} 
                className='login-sign-btn'>Login</button>
            </form>

            <p>
                By continuing, you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Intrest-Based Ads Notice.
            </p>
        </div>
        <p><span>New to Amazon?</span></p>
        <button onClick={register}
        className='login-register-btn'>Create your Amazon Account</button>
        <div className="login-footer-line"></div>
        <div className='login-footer'>
            <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
    </div>
  )
}

export default Login