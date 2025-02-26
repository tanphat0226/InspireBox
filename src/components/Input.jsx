import PropTypes from 'prop-types'

const Input = ({ label, type, name, id, placeholder, ...props }) => {
  return (
    <div className='mb-2'>
      <label htmlFor={name} className='block font-semibold '>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        autoComplete='off'
        placeholder={placeholder}
        className='mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:outline-emerald-500 text-sm'
        {...props}
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default Input
