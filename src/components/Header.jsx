import { NavLink } from 'react-router'

const Header = () => {
  const navLinkClasses = 'font-bold py-2 px-4 rounded-sm '
  return (
    <header className='flex items-center justify-between p-4 bg-white shadow-md rounded-2xl'>
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
          {/* <NavLink
            to='/ai'
            className={({ isActive }) =>
              isActive
                ? navLinkClasses + 'bg-emerald-300 hover:bg-emerald-300'
                : navLinkClasses + 'hover:bg-gray-100 '
            }
          >
            AI Suggestion
          </NavLink> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header
