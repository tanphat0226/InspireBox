import { BrowserRouter, Route, Routes } from 'react-router'
import AppLayout from './components/AppLayout'
import PageNotFound from './pages/PageNotFound'
import Homepage from './pages/Homepage'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path='/' element={<Homepage />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>

        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
