import Button from '../components/Button'

const PageNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>Page Not Found</h1>
      <p className='text-gray-600 mb-8'>Sorry, the page you are looking for does not exist.</p>
      <Button to='/' className='bg-blue-500 hover:bg-blue-600 text-white'>
        Go Home
      </Button>
    </div>
  )
}

export default PageNotFound
