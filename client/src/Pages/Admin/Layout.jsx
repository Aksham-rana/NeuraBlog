import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../Components/Admin/Sidebar'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {

  const navigate = useNavigate()
  const {axiosInstance, setToken} = useAppContext()

  const logout = () => {
    // Call setToken(null) which handles everything:
    // - Removes token from localStorage
    // - Removes Authorization header from axios
    // - Updates context state
    setToken(null)

    // redirect to login page
    navigate("/admin")
  }


  return (
    <>
      {/* Top Bar */}
      <div className='flex items-center justify-between
      py-2 h-[70px] px-4 sm:px-12
      border-b border-gray-200
      bg-white shadow-sm shadow-red-500/10'>

        <img
          src={assets.logo}
          alt=''
          className='w-32 sm:w-50 cursor-pointer
          transition-transform hover:scale-105'
          onClick={() => navigate('/')}
        />

        <button
          onClick={logout}
          className='text-sm px-8 py-2 rounded-full
          text-red-600 border border-red-500
          shadow-sm shadow-green-500/20
          hover:bg-red-600 hover:text-white
          hover:shadow-red-500/30
          transition-all cursor-pointer'
        >
          Logout
        </button>
      </div>

      {/* Body */}
      <div className='flex h-[calc(100vh-70px)] bg-gray-50'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}

export default Layout
