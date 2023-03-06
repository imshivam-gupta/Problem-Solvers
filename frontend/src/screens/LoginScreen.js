import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { FaGithub } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux'
import { login } from '../redux/actions/userActions'
import { Link } from 'react-router-dom';
import GoogleIcon from '../icons/google.svg'

const LoginScreen = () => {

    let navigate = useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [validated,setValidated] = useState('')


    const dispatch = useDispatch()

    const redirect = window.location.search ? window.location.search.split('=')[1] : '/'

    const authenticate = (password) => {
        console.log(password);
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
        if(!(password.match(lowerCaseLetters))) return "Password does not contain lower case letters";
        if(!(password.match(upperCaseLetters))) return "Password does not contain upper case letters";
        if(!(password.match(numbers))) return "Password does not contain numbers";
        if(!(password.length>8)) return "Password length is not sufficient";
        
        return "";
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(password);
        
        let pwd_checker = authenticate(password)
        if(pwd_checker==='') dispatch(login(email, password))
        else setValidated(pwd_checker)
    }

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    useEffect(() => {

        if (userInfo && !loading) {
          navigate(redirect)
        }
      }, [navigate, userInfo, redirect])



  return (
    <div className='login-page flex-row'>
        <div className='left-container'>
            <div className='login-heading'>
                Log in to your account
            </div>
            
            <div className='social-btns flex-col jc-sb ai-c'>

                <div className='google-login-btn soc-btn flex-row jc-c cur-ptr' style={{color:'gray'}}>
                    <GoogleIcon className='social-logo'/>Google
                </div>

                <div className='github-login-btn soc-btn flex-row jc-c cur-ptr' style={{color:'gray'}}>
                    <FaGithub className='social-logo' style={{color:'black'}}/>Github
                </div>
                {/* <hr/> */}
            </div>

            <div className='social-or-manual flex-row'>
                <span className='or-divider'>or</span>
            </div>

            {error && <h4 style={{textAlign:'center',color:'red'}}>Invalid Credentials</h4>}

            <form className='login-form flex-col jc-sb ai-c' onSubmit={submitHandler}>

                <label>
                    Email Address<br />
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                
                <br />

                <label>
                    Password<br />
                    <input 
                        type="text" 
                        id="pwd" 
                        name="pwd" 
                        onChange={(e) => setPassword(e.target.value) }
                    />
                </label>

                <br />

                {(validated==='')?<></>: validated }

                
                <div className='sub-or-reg flex-row jc-sa' >
                   <button type='submit' className='cur-ptr'>Login</button>
                   <span className='flex-row jc-c ai-c'> Don't have an account? <Link to='/register'> Sign Up</Link></span>
                </div>
                
                

            </form>
            
        </div>
        
        <div className='right-container'>
            <img src='images/problem_solver.png'></img>
        </div>
    </div>
  )
}

export default LoginScreen