import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import BlogTableItem from '../../Components/Admin/BlogTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []
  })

  const {axiosInstance} = useAppContext()

  const fetchDashboard = async () => {
    try {
      const {data} = await axiosInstance.get('/api/admin/dashboard')
      data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchDashboard()
  }, [])

  return (
    <div className='flex-1 p-4 md:p-10 bg-gray-50'>

      {/* Stats cards */}
      <div className='flex flex-wrap gap-4'>

        <div className='flex items-center gap-4 bg-white p-4 min-w-58
        rounded shadow-sm shadow-red-500/10
        cursor-pointer hover:scale-105 hover:shadow-red-500/25 transition-all'>
          <img src={assets.dashboard_icon_1} alt='' />
          <div>
            <p className='text-xl font-semibold text-gray-700'>
              {dashboardData.blogs}
            </p>
            <p className='text-gray-400 font-light'>Blogs</p>
          </div>
        </div>

        <div className='flex items-center gap-4 bg-white p-4 min-w-58
        rounded shadow-sm shadow-red-500/10
        cursor-pointer hover:scale-105 hover:shadow-red-500/25 transition-all'>
          <img src={assets.dashboard_icon_2} alt='' />
          <div>
            <p className='text-xl font-semibold text-gray-700'>
              {dashboardData.comments}
            </p>
            <p className='text-gray-400 font-light'>Comments</p>
          </div>
        </div>

        <div className='flex items-center gap-4 bg-white p-4 min-w-58
        rounded shadow-sm shadow-red-500/10
        cursor-pointer hover:scale-105 hover:shadow-red-500/25 transition-all'>
          <img src={assets.dashboard_icon_3} alt='' />
          <div>
            <p className='text-xl font-semibold text-gray-700'>
              {dashboardData.drafts}
            </p>
            <p className='text-gray-400 font-light'>Drafts</p>
          </div>
        </div>

      </div>

      {/* Latest blogs */}
      <div>
        <div className='flex items-center gap-3 m-4 mt-6 text-gray-700'>
          <img src={assets.dashboard_icon_4} alt='' />
          <p className='font-medium'>Latest Blogs</p>
        </div>

        <div className='relative max-w-4xl overflow-x-auto
        bg-white rounded-lg
        shadow-md shadow-red-500/10 scrollbar-hide'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-xs text-gray-600 text-left uppercase'>
              <tr>
                <th className='px-2 py-4 xl:px-6'>#</th>
                <th className='px-2 py-4'>Blog Title</th>
                <th className='px-2 py-4 max-sm:hidden'>Date</th>
                <th className='px-2 py-4 max-sm:hidden'>Status</th>
                <th className='px-2 py-4'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchDashboard}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
