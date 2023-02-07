import React from 'react'
import {Link, useNavigate} from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/userActions';

const Header = () => {

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo } = userLogin

  let navigate= useNavigate()

  const LogoutHandler = async () =>{
      await dispatch(logout())
      navigate('/login')
  }


  return (
    <header className='navbar flex-row jc-sb'>

        <Link to='/' className='nav-logo flex-row ai-c'>
            Problem Solvers
        </Link>
        
        <div className='nav flex-row jc-sb  ai-c'>

          <Link to='/practice' className='nav-item'>
            Practice
          </Link>

          <Link to='/compete' className='nav-item'>
            Compete
          </Link>

          <Link to='/discuss' className='nav-item'>
            Discuss
          </Link>

          <Link to='/faq' className='nav-item'>
            FAQ
          </Link>
          
          <span className='divider'></span>

          <div className='user-block flex-row ai-c'>
            
            {userInfo ?
                <>
                  <span> Welcome {userInfo.name.split(" ")[0]} </span>
                  <span onClick={LogoutHandler} className='logout-btn'> Logout </span>
                </>
                :
                <Link to='/login' className='login-btn'> Login </Link>
            }


          </div>

        </div>
    

    </header>
   
  )
}

export default Header