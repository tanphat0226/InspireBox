import { format } from 'date-fns'
import PropTypes from 'prop-types'
import Modal from './Modal'
import EditMessageForm from './EditMessageForm'
import { useState } from 'react'
import ComfirmDelete from './ComfirmDelete'

const MessageList = ({ messages, onDeleteMessage, onEditMessage }) => {
  const [isModalEditOpen, setIsModalEditOpen] = useState(false)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState(null)

  return (
    <ul className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {messages?.map((message) => (
        <li key={message.id} className='border rounded-lg p-4 pb-0 shadow-sm flex flex-col'>
          <div className='flex flex-col h-full justify-between'>
            <q className='mt-2 text-gray-600 font-bold italic'>{message.content}</q>
            {message?.author && <p className='mt-4 text-gray-400 text-sm'>- {message?.author}</p>}
            {message?.created_at && (
              <time
                dateTime={message?.created_at ?? new Date()}
                className='block text-gray-400 text-left text-sm italic'
              >
                📅 {format(new Date(message?.created_at), 'MMM dd yyyy')}
              </time>
            )}
          </div>
          <div className='flex space-x-2'>
            <button
              onClick={() => {
                setSelectedMessage(message)
                setIsModalEditOpen(true)
              }}
              className='text-blue-500 hover:text-blue-700 cursor-pointer text-sm p-2'
            >
              Edit
            </button>
            <button
              onClick={() => {
                setSelectedMessage(message)
                setIsModalDeleteOpen(true)
              }}
              className='text-red-500 hover:text-red-700 cursor-pointer text-sm p-2'
            >
              Delete
            </button>
          </div>
        </li>
      ))}

      {/* Edit Message Modal */}
      <Modal
        isOpen={isModalEditOpen}
        onClose={() => setIsModalEditOpen(false)}
        title='Edit New Message'
      >
        <EditMessageForm
          message={selectedMessage}
          onEditMessage={onEditMessage}
          onClose={() => setIsModalEditOpen(false)}
        />
      </Modal>

      {/* Delete Message Modal */}
      <Modal
        isOpen={isModalDeleteOpen}
        onClose={() => setIsModalDeleteOpen(false)}
        title='Are you sure you want to delete this message?'
      >
        <ComfirmDelete
          message={selectedMessage}
          onDetele={onDeleteMessage}
          onClose={() => setIsModalDeleteOpen(false)}
        />
      </Modal>
    </ul>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array,
  onDeleteMessage: PropTypes.func.isRequired,
  onEditMessage: PropTypes.func.isRequired
}

export default MessageList
