import axios from 'axios'

// LocalStorageService
const access_token = localStorage.getItem('access_token')


const instance = axios.create({});

// Add a request interceptor
instance.interceptors.request.use(
  config => {
    if (access_token) {
      config.headers['Authorization'] = access_token
    }
    // config.headers['Content-Type'] = 'application/json';
    return config
  },
  error => {
    Promise.reject(error)
  }
)

instance.interceptors.response.use(
    response => {
      return response
    }, (error) => {
      const originalRequest = error.config
      if (
        error.response.status === 401 &&
        originalRequest.url.includes('/auth/login')
      ) {
       window.location = '/login'
        return Promise.reject(error)
      }
      return Promise.reject(error)
    }
)

export default instance
