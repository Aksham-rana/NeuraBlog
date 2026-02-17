import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom"

const Login = () => {

  const {axiosInstance, setToken, navigate: contextNavigate} = useAppContext()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handlerSubmit = async (e) => {

    e.preventDefault()
    setLoading(true)

    try {

      const response = await axiosInstance.post('/api/admin/login', {
        email,
        password
      })

      console.log("FULL RESPONSE:", response)

      if (response.data.success) {
        const token = response.data.token

        console.log("TOKEN FROM BACKEND:", token)

        // Use the setToken function which handles everything
        setToken(token)

        console.log("TOKEN SAVED AND HEADER SET")

        toast.success("Login successful")

        // Navigate to admin
        setTimeout(() => {
          navigate("/admin")
        }, 500)

      } else {
        toast.error(response.data.message || "Login failed")
      }

    } catch (error) {

      console.log("Login error:", error)

      if (error.response?.data?.message) {
        toast.error(error.response.data.message)
      } else if (error.message) {
        toast.error(error.message)
      } else {
        toast.error("Login failed. Please check your credentials.")
      }

    } finally {
      setLoading(false)
    }

  }

  const fillDemoCredentials = () => {
    setEmail('admin@example.com')
    setPassword('greatstack')
    toast.success('Demo credentials filled')
  }


  return (
    <div className='flex items-center justify-center h-screen bg-gray-50'>
      
      <div
        className='w-full max-w-sm p-6 max-md:m-6
        border border-gray-300
        rounded-lg
        shadow-xl shadow-red-500/15'
      >
        <div className='flex flex-col items-center justify-center'>

          {/* Header */}
          <div className='w-full py-6 text-center'>
            <h1 className='text-3xl font-bold text-gray-900'>
              <span className='text-red-600'>Admin Login</span>
            </h1>
            <p className='font-light text-gray-500'>
              Enter your credentials to access the admin panel
            </p>
            <div className='mt-4 flex flex-col items-center gap-2'>
              <div className='text-sm text-gray-500'>Demo access</div>
              <div className='flex gap-3'>
                <button
                  type='button'
                  onClick={fillDemoCredentials}
                  className='px-4 py-2 rounded bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-semibold shadow-md hover:from-yellow-300 hover:to-yellow-200 transition'
                  aria-label='Fill demo admin credentials'
                >
                  Use demo admin credentials
                </button>

                <button
                  type='button'
                  onClick={() => { setEmail(''); setPassword(''); toast('Cleared demo credentials') }}
                  className='px-4 py-2 rounded border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition'
                  aria-label='Clear credentials'
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handlerSubmit}
            className='mt-6 w-full sm:max-w-md text-gray-600'
          >

            {/* Email */}
            <div className='flex flex-col'>
              <label>Email</label>
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type='email'
                required
                placeholder='your email id'
                className='border-b-2 border-gray-300 p-2 outline-none mb-6
                focus:border-red-500'
              />
            </div>

            {/* Password */}
            <div className='flex flex-col'>
              <label>Password</label>
              <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type='password'
                required
                placeholder='your password'
                className='border-b-2 border-gray-300 p-2 outline-none mb-6
                focus:border-red-500'
              />
            </div>

            {/* Button */}
            <button
              type='submit'
              className='w-full py-3 font-medium rounded
              text-white
              bg-gradient-to-r from-red-600 to-red-500
              shadow-md shadow-green-500/20
              hover:from-red-500 hover:to-red-600
              hover:shadow-red-500/40
              active:shadow-sm
              transition-all cursor-pointer'
            >
              Login
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
