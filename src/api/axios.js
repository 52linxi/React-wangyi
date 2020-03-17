// 封装拦截器
import axios from 'axios'
import qs from 'qs'
import errMsg from '../utils/err-code'

const axiosInstance = axios.create({
  timeout: 20000
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  config => {
    let token = '' // 这里token要获取    
    if (token) {
      config.headers.authrization = token
    }
    if (config.method.toUpperCase() === 'POST') {
      config.data = qs.stringify(config.data)
    }
    return config
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      return response.data
    } else {
      return Promise.reject(response.data.msg)
    }
  },
  err => {
    let errorMessage = ''
    const status = err.response.status
    if (err.response) {
      errorMessage = errMsg[status]
      if (status === 401) {
        // 说明token过期
        // 清空localStorage中数据
        // 清空redux中数据
        // 提示用户
        // 跳转到登录页面
      }
    } else {
      if (err.message.indexOf('Network Error') !== -1) {
        errorMessage = '网络断开连接，请稍后重新访问'
      } else if (err.message.indexOf('timeout') !== -1) {
        errorMessage = '网络超时，请稍后重试'
      }
    }
    return Promise.reject(errorMessage || '服务器发生未知错误，请联系管理员')
  }
)
export default axiosInstance