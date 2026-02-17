import {useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {

  const {setInput, input} = useAppContext()
  const inputRef = useRef();

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    setInput(inputRef.current.value)
  }

  const onClear = ()=>{
    setInput('')
    inputRef.current.value =''
  }

  return (
    <div className='mx-4 sm:mx-10 xl:mx-20 2xl:mx-28 relative overflow-hidden'>
      
      <div className='text-center mt-28 mb-16'>

        {/* Badge */}
        <div className='inline-flex items-center justify-center gap-3 px-6 py-2 mb-8 
        border border-red-500/30 bg-red-500/10 rounded-full text-sm text-red-600
        shadow-sm shadow-green-500/20'>
          <p className='font-medium'>New: AI feature integrated</p>
          <img src={assets.star_icon} className='w-3' alt=''/>
        </div>

        {/* Heading */}
        <h1 className='text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-gray-800'>
          Your own <span className='text-red-600'>blogging</span> <br /> platform
        </h1>

        {/* Description */}
        <p className='mt-6 sm:mt-8 max-w-3xl mx-auto text-gray-500
        text-sm sm:text-base lg:text-lg leading-relaxed'>
          This is your space to think out loud, to share what matters, and to write without filters.
          Whether it's one word or a thousand, your story starts right here.
        </p>

        {/* Search */}
        <form onSubmit={onSubmitHandler} className='mt-12 flex items-center justify-between max-w-2xl mx-auto 
        border border-gray-300 bg-white rounded-full shadow-md overflow-hidden
        focus-within:ring-2 focus-within:ring-red-500/40'>
          
          <input ref={inputRef}
            type='text'
            placeholder='Search for blogs'
            required
            className='w-full pl-6 py-3.5 text-sm outline-none'
          />

          <button 
            className='px-10 py-3.5 m-1 rounded-full
            text-red-600 border border-red-500
            shadow-sm shadow-green-500/20
            hover:bg-red-600 hover:text-white
            hover:shadow-red-500/30
            hover:scale-105 transition-all cursor-pointer'
            type='submit'
          >
            Search
          </button>
        </form>

      </div>
      <div className='text-center'>
        {input && <button onClick={onClear} className='border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer'>
          Clear Search</button>}
      </div>

      {/* Background */}
      <img 
        src={assets.gradientBackground}
        alt=''
        className='absolute -top-52 left-1/2 -translate-x-1/2 -z-10
        opacity-40 w-[1100px]'
      />
    </div>
  )
}

export default Header
