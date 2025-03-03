import { format } from 'date-fns'
import { useState, useEffect } from 'react'
import { getRandMessageAPI } from '../services/apiMessages'

const Homepage = () => {
  const [message, setMessage] = useState({})

  useEffect(() => {
    const fetchRandomMessage = async () => {
      const message = await getRandMessageAPI()
      setMessage(message)
    }
    fetchRandomMessage()
  }, [])

  return (
    <div className='flex justify-center items-center text-center '>
      <div className='bg-white shadow-md rounded-lg p-6 m-4 min-h-64 min-w-96 flex flex-col hover:shadow-xl transition duration-300 hover:scale-105 '>
        <h2 className='text-xl font-bold border-b-emerald-100 border-b-2 max-w-fit mx-auto mb-8'>
          📜 Message of the Day! ✨
        </h2>
        <div>
          <q className='text-gray-700 text-2xl text-balance font-semibold flex-1'>
            {message?.content
              ? message.content
              : 'You have no messages yet. Add one to get started!'}
          </q>

          <p className='text-gray-400 mt-4 text-xl'>
            - {message?.author ? message.author : '(All Messages → Add New Message)'}
          </p>
        </div>
        {message?.created_at && (
          <time
            dateTime={message?.created_at ?? new Date()}
            className='block text-gray-400 text-right text-sm italic'
          >
            📅 {format(new Date(message?.created_at), 'MMM dd yyyy')}
          </time>
        )}
      </div>
    </div>
  )
}

export default Homepage
