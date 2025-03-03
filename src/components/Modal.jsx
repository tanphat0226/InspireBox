import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

const Modal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEscapeKey)
      modalRef.current?.focus()
    }

    return () => {
      document.body.style.overflow = 'visible'
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  // Create portal container if it doesn't exist
  let portalRoot = document.getElementById('portal-root')
  if (!portalRoot) {
    portalRoot = document.createElement('div')
    portalRoot.id = 'portal-root'
    document.body.appendChild(portalRoot)
  }

  return createPortal(
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Backdrop */}
      <div
        className='fixed inset-0 bg-black opacity-50 transition-opacity'
        onClick={onClose}
        aria-hidden='true'
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className='relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 z-10'
        tabIndex={-1}
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-title'
      >
        {/* Header */}
        <div className='flex items-center justify-between p-4 border-b'>
          <h3 id='modal-title' className='text-lg font-semibold text-gray-800 text-center'>
            {title}
          </h3>
        </div>

        {/* Body */}
        <div className='p-4'>{children}</div>
      </div>
    </div>,
    portalRoot
  )
}
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Modal
