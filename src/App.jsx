import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router'
import PropTypes from 'prop-types'
import AppLayout from './components/AppLayout'
import PageNotFound from './pages/PageNotFound'
import Homepage from './pages/Homepage'
import MessagesPage from './pages/MessagesPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { selectCurrentUser } from './redux/user/userSlice'
import { useSelector } from 'react-redux'
// Protected Route
// https://www.robinwieruch.de/react-router-private-routes/
const ProtectedRoute = ({ user }) => {
  if (!user) return <Navigate to='/login' replace />
  return <Outlet />
}

ProtectedRoute.propTypes = {
  user: PropTypes.object
}

function App() {
  const currentUser = useSelector(selectCurrentUser)
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route element={<ProtectedRoute user={currentUser} />}>
          <Route element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path='all-messages' element={<MessagesPage />} />
          </Route>
        </Route>

        {/* Authentication */}
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />

        {/* 404 */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
