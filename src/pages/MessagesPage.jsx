import { useEffect, useState } from 'react'
import {
  createMessageAPI,
  deleteMessageAPI,
  getAllMessagesAPI,
  updateMessageAPI
} from '../services/apiMessages'

import Button from '../components/Button'
import Modal from '../components/Modal'
import AddMessageForm from '../components/AddMessageForm'
import MessageList from '../components/MessageList'

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

  const handleAddMessage = async (data) => {
    try {
      // Submit the message
      await createMessageAPI(data)

      // Fetch all messages again
      const messages = await getAllMessagesAPI()
      setMessages(messages)
    } catch (err) {
      console.error(err)
    }
  }

  const handleDeleteMessage = async (id) => {
    try {
      // Submit the message
      await deleteMessageAPI(id)

      // Fetch all messages again
      const messages = await getAllMessagesAPI()
      setMessages(messages)
    } catch (err) {
      console.error(err)
    }
  }

  const handleEditMessage = async (id, data) => {
    try {
      // Submit the message
      await updateMessageAPI(id, data)

      // Fetch all messages again
      const messages = await getAllMessagesAPI()
      setMessages(messages)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title='Add New Message'>
        <AddMessageForm onClose={() => setIsModalOpen(false)} onAddMessage={handleAddMessage} />
      </Modal>
      <div className='flex flex-col md:justify-between md:flex-row md:items-center '>
        <h1 className='text-xl font-bold text-emerald-500 block mb-4 md:mt-0'>All Messages</h1>
        <Button variant='outline' onClick={() => setIsModalOpen(true)}>
          Add New Message
        </Button>
      </div>

      {messages?.length > 0 ? (
        <MessageList
          messages={messages}
          onEditMessage={handleEditMessage}
          onDeleteMessage={handleDeleteMessage}
        />
      ) : (
        <p className='text-gray-400 text-center'>No messages found. Add one to get started!</p>
      )}
    </div>
  )
}

export default MessagesPage
