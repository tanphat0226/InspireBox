import { useEffect, useState } from 'react'
import { getAllMessagesAPI } from '../services/apiMessages'
import { format } from 'date-fns'

import Button from '../components/Button'
import Modal from '../components/Modal'
import AddMessageForm from '../components/AddMessageForm'

const MessagesPage = () => {
  const [messages, setMessages] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchMessages = async () => {
      const messages = await getAllMessagesAPI()
      setMessages(messages)
    }
    fetchMessages()
  }, [])

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title='Add New Message'>
        <AddMessageForm onClose={() => setIsModalOpen(false)} />
      </Modal>
      <div className='flex flex-col md:justify-between md:flex-row md:items-center '>
        <h1 className='text-xl font-bold text-emerald-500 block mb-4 md:mt-0'>All Messages</h1>
        <Button variant='outline' onClick={() => setIsModalOpen(true)}>
          Add New Message
        </Button>
      </div>
      <ul className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {messages?.map((message) => (
          <li key={message.id} className='border rounded-lg p-4 shadow-sm flex flex-col'>
            <q className='mt-2 text-gray-600 font-bold italic'>{message.content}</q>
            {message?.author && <p className='mt-4 text-gray-400 text-sm'>- {message?.author}</p>}
            {message?.created_at && (
              <time
                dateTime={message?.created_at ?? new Date()}
                className='block text-gray-400 text-left text-sm italic mt-auto'
              >
                📅 {format(new Date(message?.created_at), 'MMM dd yyyy')}
              </time>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MessagesPage
