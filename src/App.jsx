import { BrowserRouter, Route, Routes } from 'react-router'
import AppLayout from './components/AppLayout'
import PageNotFound from './pages/PageNotFound'
import Homepage from './pages/Homepage'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path='/' element={<Homepage />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
