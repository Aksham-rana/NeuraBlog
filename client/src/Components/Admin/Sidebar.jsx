import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6
    bg-white shadow-sm shadow-red-500/10'>

      {/* Dashboard */}
      <NavLink
        end={true}
        to='/admin'
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer
          transition-all
          ${
            isActive
              ? 'bg-red-500/10 text-red-600 border-r-4 border-red-500 shadow-sm shadow-green-500/20'
              : 'text-gray-600 hover:text-red-600 hover:bg-red-500/5'
          }`
        }
      >
        <img src={assets.home_icon} alt='' className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Dashboard</p>
      </NavLink>

      {/* Add Blogs */}
      <NavLink
        to='/admin/addBlog'
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer
          transition-all
          ${
            isActive
              ? 'bg-red-500/10 text-red-600 border-r-4 border-red-500 shadow-sm shadow-green-500/20'
              : 'text-gray-600 hover:text-red-600 hover:bg-red-500/5'
          }`
        }
      >
        <img src={assets.add_icon} alt='' className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Add blogs</p>
      </NavLink>

      {/* Blog Lists */}
      <NavLink
        to='/admin/listBlog'
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer
          transition-all
          ${
            isActive
              ? 'bg-red-500/10 text-red-600 border-r-4 border-red-500 shadow-sm shadow-green-500/20'
              : 'text-gray-600 hover:text-red-600 hover:bg-red-500/5'
          }`
        }
      >
        <img src={assets.list_icon} alt='' className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Blog lists</p>
      </NavLink>

      {/* Comments */}
      <NavLink
        to='/admin/comments'
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer
          transition-all
          ${
            isActive
              ? 'bg-red-500/10 text-red-600 border-r-4 border-red-500 shadow-sm shadow-green-500/20'
              : 'text-gray-600 hover:text-red-600 hover:bg-red-500/5'
          }`
        }
      >
        <img src={assets.comment_icon} alt='' className='min-w-4 w-5' />
        <p className='hidden md:inline-block'>Comments</p>
      </NavLink>

    </div>
  )
}

export default Sidebar
