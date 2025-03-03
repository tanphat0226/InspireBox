import PropTypes from 'prop-types'

const ComfirmDelete = ({ message, onClose, onDetele }) => {
  const handleDelete = async () => {
    if (message && message.id) {
      onDetele(message.id)
      onClose()
    }
  }

  return (
    <div className='p-4'>
      <div className='italic text-gray-600 border-l-2 pl-4 mb-6'>{message?.content}</div>
      <div className='flex justify-end space-x-3'>
        <button
          onClick={handleDelete}
          className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer'
        >
          Delete
        </button>
      </div>
    </div>
  )
}
ComfirmDelete.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string
  }),
  onClose: PropTypes.func.isRequired,
  onDetele: PropTypes.func.isRequired
}

export default ComfirmDelete
