import React, { useEffect, useState } from 'react'
import CommentTableItem from '../../Components/Admin/CommentTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Comments = () => {

  const [comments, setComments] = useState([])
  const [filter, setFilter] = useState('Not Approved')

  const {axiosInstance} = useAppContext();

  const fetchComments = async () => {
    try {
      const {data} = await axiosInstance.get('/api/admin/comments')
      data.success ? setComments(data.comments) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <div className='flex-1 pt-5 sm:pt-12 sm:pl-16 bg-gray-50'>

      {/* Header */}
      <div className='flex justify-between items-center max-w-3xl'>
        <h1 className='text-lg font-semibold text-gray-800'>
          Comments
        </h1>

        <div className='flex gap-4'>

          <button
            onClick={() => setFilter('Approved')}
            className={`border rounded-full px-4 py-1 text-xs cursor-pointer
            transition-all
            ${
              filter === 'Approved'
                ? 'text-red-600 border-red-500 shadow-sm shadow-green-500/20'
                : 'text-gray-700 hover:text-red-600'
            }`}
          >
            Approved
          </button>

          <button
            onClick={() => setFilter('Not Approved')}
            className={`border rounded-full px-4 py-1 text-xs cursor-pointer
            transition-all
            ${
              filter === 'Not Approved'
                ? 'text-red-600 border-red-500 shadow-sm shadow-green-500/20'
                : 'text-gray-700 hover:text-red-600'
            }`}
          >
            Not Approved
          </button>

        </div>
      </div>

      {/* Table */}
      <div className='relative h-4/5 max-w-3xl overflow-x-auto mt-4
      bg-white rounded-lg shadow-md shadow-red-500/10 scrollbar-hide'>

        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-gray-700 text-left uppercase'>
            <tr>
              <th className='px-6 py-3'>Blog Title & Comment</th>
              <th className='px-6 py-3 max-sm:hidden'>Date</th>
              <th className='px-6 py-3'>Action</th>
            </tr>
          </thead>

          <tbody>
            {comments
              .filter(comment =>
                filter === 'Approved'
                  ? comment.isApproved === true
                  : comment.isApproved === false
              )
              .map((comment, index) => (
                <CommentTableItem
                  key={comment._id}
                  comment={comment}
                  index={index + 1}
                  fetchComments={fetchComments}
                />
              ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Comments
