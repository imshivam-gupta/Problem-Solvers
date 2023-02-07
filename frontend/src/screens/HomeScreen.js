import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin


  let navigate = useNavigate();
  
  useEffect(() => {

    if (!userInfo) {
      navigate('/login')
    }
  }, [navigate, userInfo])


  return (
    <div>HomeScreen</div>
  )
}

export default HomeScreen