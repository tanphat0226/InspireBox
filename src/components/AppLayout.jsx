import { Outlet } from 'react-router'

import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const DefaultLayout = () => {
  return (
    <div className='pt-4 bg-gray-100 min-h-screen'>
      <Header />
      <main className='min-h-screen m-6'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node
}

export default DefaultLayout
