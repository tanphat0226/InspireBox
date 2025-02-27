import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router'
import { logoutUserAPI } from '../redux/user/userSlice'

const Header = () => {
  const dispatch = useDispatch()
  const navLinkClasses = 'font-bold py-2 px-4 rounded-sm '
  return (
    <header className=' mr-4 ml-4 flex items-center justify-between p-4 bg-white shadow-md rounded-2xl'>
      <h1 className='text-xl font-semibold'>InspireBox</h1>
      <nav>
        <ul className='flex items-center justify-between gap-4'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? navLinkClasses + 'bg-emerald-300 hover:bg-emerald-300'
                : navLinkClasses + 'hover:bg-gray-100 '
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/dashboard'
            className={({ isActive }) =>
              isActive
                ? navLinkClasses + 'bg-emerald-300 hover:bg-emerald-300'
                : navLinkClasses + 'hover:bg-gray-100 '
            }
          >
            Dashboard
          </NavLink>
          <button
            onClick={() => {
              dispatch(logoutUserAPI())
            }}
            className={navLinkClasses + ' text-red-400 hover:bg-red-400 hover:text-white'}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              width={20}
              height={20}
              fill='currentColor'
            >
              <path d='M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z' />
            </svg>
          </button>
        </ul>
      </nav>
    </header>
  )
}

export default Header
