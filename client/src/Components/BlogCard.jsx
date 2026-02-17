import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {

  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className='w-full rounded-lg overflow-hidden
      shadow-sm shadow-red-500/10
      hover:scale-[1.02]
      hover:shadow-red-500/25
      transition-all duration-300 cursor-pointer'
    >
      <img src={image} alt='' className='aspect-video w-full object-cover' />

      {/* Category badge */}
      <span
        className='ml-5 mt-4 px-3 py-1 inline-block
        bg-red-500/10 text-red-600
        rounded-full text-xs font-medium
        shadow-sm shadow-green-500/20'
      >
        {category}
      </span>

      <div className='p-5'>
        <h5 className='mb-2 font-medium text-gray-900'>
          {title}
        </h5>

        <p
          className='mb-3 text-xs text-gray-600'
          dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
        />
      </div>
    </div>
  )
}

export default BlogCard
