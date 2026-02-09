import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userid } = useParams()
  return (
    <div className='text-center text-2xl font-medium py-10 bg-gray-600 text-white rounded-lg'>
      User: {userid}
    </div>
  )
}

export default User
