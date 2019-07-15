import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0/'
})
instance.interceptors.request.use(config => {
  console.log(sessionStorage.getItem('token'))
  if (sessionStorage.getItem('token')) {
    config.headers = {
      Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('token')).token
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})
instance.interceptors.response.use(response => response, error => {
  if (error.response.status === 401) {
    location.hash = '#/login'
  }
  return Promise.reject(error)
})

// const instance = axios.create({
//   baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0/'
// })
// instance.interceptors.request.use(config => {
//   console.log(config)
//   if (sessionStorage.getItem('token')) {
//     console.log(123333)
//     config.headers = {
//       Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('token')).token
//     }
//   }
//   return config
// })
// instance.interceptors.response.use(response => response, error => {
//   console.log(!23)
//   console.log(error)
//   if (error.response.status === 401) {
//     console.log('abc')
//     location.hash = '#/login'
//   }
//   return Promise.reject(error)
// })
export default instance
