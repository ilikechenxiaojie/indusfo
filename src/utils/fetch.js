import axios from 'axios'
import qs from 'qs'
const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000
})
// request
service.interceptors.request.use(config => {
  if (config.method === 'post' ||
    config.method === 'delete' ||
    config.method === 'put') {
    config.data = qs.stringify(config.data)
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})
// response
service.interceptors.response.use(response => {
  const debug = process.env.NODE_ENV !== 'production'
  if (debug) {
    const url = response.request.responseURL.split('//')[1]
    const urlFix = url.substr(url.indexOf('/'))
    const method = response.config.method
    console.log(`${method} ${urlFix}`, response.data)
  }
  const {
    status
  } = response.data
  if (status !== 200) {
    console.log('操作失败')
  } else {
    return response.data
  }
}, error => {
  return Promise.reject(error)
})
export default service
