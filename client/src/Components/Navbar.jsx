import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {

  const {navigate, token} = useAppContext();

  return (
    // FULL-WIDTH WRAPPER
    <div className='sticky top-0 z-50 w-full
      bg-slate-50/80 backdrop-blur
      border-b border-slate-200
      shadow-sm shadow-red-500/10'
    >
      
      {/* CENTERED CONTENT */}
      <div className='flex justify-between items-center
        py-4 px-6 sm:px-20 xl:px-24'
      >

        {/* Logo */}
        <img
          onClick={() => navigate('/')}
          src={assets.logo}
          alt='logo'
          className='w-32 sm:w-50 cursor-pointer
          transition-transform hover:scale-105'
        />

        {/* Button */}
        <button
          onClick={() => navigate('/admin')}
          className='flex items-center gap-2 rounded-full text-sm font-medium
          px-8 py-2.5
          text-red-600 border border-red-500
          shadow-sm shadow-green-500/20
          hover:bg-red-600 hover:text-white
          hover:shadow-red-500/30
          transition-all cursor-pointer'
        >
          {token ? 'Dashboard' : 'Login'}
          <img
            src={assets.arrow}
            className='w-3 opacity-90'
            alt='arrow'
          />
        </button>

      </div>
    </div>
  )
}

export default Navbar
