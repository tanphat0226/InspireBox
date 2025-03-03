import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const EditMessageForm = ({ message, onClose, onEditMessage }) => {
  const [formData, setFormData] = useState(message)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    if (!formData.content.trim()) {
      setError('Message content is required')
      return
    }

    try {
      setIsSubmitting(true)
      setError(null)

      // Submit the message
      onEditMessage(message.id, formData)

      // Reset form and close modal
      onClose()
    } catch (err) {
      setError('Failed to add message. Please try again.')
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label htmlFor='content' className='block text-sm font-medium text-gray-700 mb-1'>
          Message Content <span className='text-red-500'>*</span>
        </label>
        <textarea
          id='content'
          name='content'
          value={formData.content}
          onChange={handleChange}
          rows={4}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500'
          placeholder='Enter your inspirational message'
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor='author' className='block text-sm font-medium text-gray-700 mb-1'>
          Author
        </label>
        <input
          type='text'
          id='author'
          name='author'
          value={formData.author}
          onChange={handleChange}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500'
          placeholder='Your name (optional)'
          disabled={isSubmitting}
        />
      </div>
      {error && <p className='text-red-500 text-sm'>{error}</p>}

      <div className='flex justify-end space-x-3 pt-2'>
        <Button
          type='button'
          variant='outline'
          onClick={() => console.log(onClose())}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Save Message'}
        </Button>
      </div>
    </form>
  )
}

EditMessageForm.propTypes = {
  message: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onEditMessage: PropTypes.func.isRequired
}

export default EditMessageForm
