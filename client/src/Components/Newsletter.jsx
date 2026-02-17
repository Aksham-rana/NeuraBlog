import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>

      <h1 className='md:text-4xl text-2xl font-semibold text-gray-900'>
        Never Miss a Blog
      </h1>

      <p className='md:text-lg text-gray-500/70 pb-8'>
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>

      <form className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>

        <input
          type='text'
          placeholder='Enter your email id'
          required
          className='border border-gray-300 h-full w-full px-3
          text-gray-600 outline-none
          rounded-md rounded-r-none
          focus:border-red-500'
        />

        <button
          type='submit'
          className='md:px-12 px-8 h-full
          rounded-md rounded-l-none
          font-medium text-white
          bg-gradient-to-r from-red-600 to-red-500
          shadow-md shadow-green-500/20
          hover:from-red-500 hover:to-red-600
          hover:shadow-red-500/40 hover:-translate-y-0.5
          active:translate-y-0 active:shadow-sm
          transition-all duration-200 cursor-pointer'
        >
          Subscribe
        </button>

      </form>
    </div>
  )
}

export default Newsletter
