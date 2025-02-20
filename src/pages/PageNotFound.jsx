import Button from '../components/Button'

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Button to='/'>Go Home</Button>
    </div>
  )
}

export default PageNotFound
