let API_ROOT = ''

if (import.meta.env.MODE === 'development') {
  API_ROOT = 'http://localhost:5055'
} else if (import.meta.env.MODE === 'production') {
  API_ROOT = 'https://message-box-be.onrender.com'
}

export { API_ROOT }
