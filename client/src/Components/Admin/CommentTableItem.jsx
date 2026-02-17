import React from 'react'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const CommentTableItem = ({ comment, fetchComments }) => {

  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);

  const {axiosInstance} = useAppContext();

  const approveComment = async()=>{
    try {
      const {data} = await axiosInstance.post('/api/admin/approve-comment', {id:_id})
      if(data.success){
        toast.success(data.message)
        fetchComments()
      }else{
        toast.error(data.message)
      }
    } catch (error) {
       toast.error(error.message)
    }
  }

  const deleteComment = async()=>{
    try {
      const confirm = window.confirm('Are you sure you want to delete this comment?')
      if(!confirm) return;

      const {data} = await axiosInstance.post('/api/admin/delete-comment', {id:_id})
      if(data.success){
        toast.success(data.message)
        fetchComments()
      }else{
        toast.error(data.message)
      }
    } catch (error) {
       toast.error(error.message)
    }
  }

  return (
    <tr className='border-y border-gray-300 text-gray-700'>

      <td className='px-6 py-4'>
        <b className='font-medium text-gray-700'>Blog</b> : {blog.title}
        <br /><br />
        <b className='font-medium text-gray-700'>Name</b> : {comment.name}
        <br />
        <b className='font-medium text-gray-700'>Comment</b> : {comment.content}
      </td>

      <td className='px-6 py-4 max-sm:hidden'>
        {BlogDate.toLocaleDateString()}
      </td>

      <td className='px-6 py-4'>
        <div className='inline-flex items-center gap-4'>

          {/* Approval */}
          {!comment.isApproved ? (
            <img onClick={approveComment}
              src={assets.tick_icon}
              alt='approve'
              className='w-5 cursor-pointer
              hover:scale-110
              hover:drop-shadow-[0_0_4px_rgba(22,163,74,0.6)]
              transition-all'
            />
          ) : (
            <span
              className='text-xs font-medium
              border border-green-600
              bg-green-500/10 text-green-600
              rounded-full px-3 py-1
              shadow-sm shadow-green-500/20'
            >
              Approved
            </span>
          )}

          {/* Delete */}
          <img onClick={deleteComment}
            src={assets.bin_icon}
            alt='delete'
            className='w-5 cursor-pointer
            hover:scale-110
            hover:drop-shadow-[0_0_4px_rgba(220,38,38,0.5)]
            transition-all'
          />
        </div>
      </td>

    </tr>
  )
}

export default CommentTableItem
