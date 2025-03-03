import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router'
import { logoutUserAPI } from '../redux/user/userSlice'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const navLinkClasses = 'font-bold py-2 px-4 rounded-sm w-full md:w-fit text-center '
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className='mr-4 ml-4 flex items-center justify-between p-4 bg-white shadow-md rounded-2xl'>
      <NavLink to='/'>
        <h1 className='text-xl font-semibold'>InspireBox</h1>{' '}
      </NavLink>

      {/* Mobile menu button */}
      <button className='md:hidden p-2' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          )}
        </svg>
      </button>

      {/* Desktop navigation */}
      <nav className='hidden md:block w-fit'>
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
            to='/all-messages'
            className={({ isActive }) =>
              isActive
                ? navLinkClasses + 'bg-emerald-300 hover:bg-emerald-300'
                : navLinkClasses + 'hover:bg-gray-100 '
            }
          >
            All Messages
          </NavLink>
          <button
            onClick={() => {
              dispatch(logoutUserAPI())
            }}
            className={
              navLinkClasses + ' text-red-400 hover:bg-red-400 hover:text-white cursor-pointer'
            }
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

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className='absolute top-16 left-4 right-4 bg-white py-4 rounded-xl shadow-lg md:hidden z-10'>
          <nav>
            <ul className='flex flex-col space-y-3'>
              <NavLink
                to='/all-messages'
                className={({ isActive }) =>
                  isActive
                    ? navLinkClasses + 'bg-emerald-300 hover:bg-emerald-300 block'
                    : navLinkClasses + 'hover:bg-gray-100 block'
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Messages
              </NavLink>
              <button
                onClick={() => {
                  dispatch(logoutUserAPI())
                  setIsMobileMenuOpen(false)
                }}
                className={
                  navLinkClasses +
                  ' text-red-400 hover:bg-red-400 hover:text-white cursor-pointer flex items-center'
                }
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  width={20}
                  height={20}
                  fill='currentColor'
                  className='mr-2'
                >
                  <path d='M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z' />
                </svg>
                Logout
              </button>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
