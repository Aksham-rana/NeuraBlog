import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AddBlog = () => {

  const {axiosInstance} = useAppContext()
  const [isAdding, setIsAdding] = useState(false)

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const [image, setImage] = useState(false)
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [category, setCategory] = useState('Startup')
  const [isPublished, setIsPublished] = useState(false)

  

  const onSubmitHandler = async (e) => {
    
    try {
      e.preventDefault()
      setIsAdding(true)

      const blog = {
        title, subTitle, description: quillRef.current.root.innerHTML,
        category, isPublished
      }

      const formData = new FormData();
      formData.append('blog', JSON.stringify(blog))
      formData.append('image', image)

      const {data} = await axiosInstance.post('/api/blog/add', formData);

      if(data.success){
        toast.success(data.message);
        setImage(false)
        setTitle('')
        quillRef.current.root.innerHTML = ''
        setCategory('Startup')
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally{
        setIsAdding(false)
      }
  }

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' })
    }
  }, [])

  return (
    <form onSubmit={onSubmitHandler} className='flex-1 bg-gray-50 text-gray-600 h-full overflow-scroll'>
      
      <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10
      rounded shadow-lg shadow-red-500/10'>

        {/* Thumbnail */}
        <p className='font-medium'>Upload thumbnail</p>
        <label htmlFor='image'>
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=''
            className='mt-2 h-16 rounded cursor-pointer
            hover:shadow-sm hover:shadow-red-500/30 transition'
          />
          <input
            onChange={e => setImage(e.target.files[0])}
            type='file'
            id='image'
            hidden
            required
          />
        </label>

        {/* Title */}
        <p className='mt-4 font-medium'>Blog title</p>
        <input
          type='text'
          placeholder='Type here'
          required
          className='w-full max-w-lg mt-2 p-2
          border border-gray-300 rounded outline-none
          focus:border-red-500'
          onChange={e => setTitle(e.target.value)}
          value={title}
        />

        {/* Subtitle */}
        <p className='mt-4 font-medium'>Sub title</p>
        <input
          type='text'
          placeholder='Type here'
          required
          className='w-full max-w-lg mt-2 p-2
          border border-gray-300 rounded outline-none
          focus:border-red-500'
          onChange={e => setSubTitle(e.target.value)}
          value={subTitle}
        />

        {/* Description */}
        <p className='mt-4 font-medium'>Blog Description</p>
        <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative border border-gray-300 rounded'>

          <div ref={editorRef}></div>

        </div>

        {/* Category */}
        <p className='mt-4 font-medium'>Blog category</p>
        <select
          onChange={e => setCategory(e.target.value)}
          value={category}
          className='mt-2 px-3 py-2 border border-gray-300
          text-gray-600 rounded outline-none
          focus:border-red-500'
        >
          {blogCategories.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Publish */}
        <div className='flex items-center gap-3 mt-4'>
          <p className='font-medium'>Publish Now</p>
          <input
            type='checkbox'
            checked={isPublished}
            onChange={e => setIsPublished(e.target.checked)}
            className='scale-125 accent-red-600 cursor-pointer'
          />
        </div>

        {/* Submit */}
        <button disabled={isAdding}
          type='submit'
          className='mt-8 w-40 h-10
          font-medium text-white
          bg-gradient-to-r from-red-600 to-red-500
          shadow-md shadow-green-500/20
          hover:shadow-red-500/40 hover:-translate-y-0.5
          transition-all cursor-pointer rounded'
        >
          {isAdding ? "Adding..." : "Add Blog"}
        </button>

      </div>
    </form>
  )
}

export default AddBlog
