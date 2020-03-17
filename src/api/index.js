// 发送请求的方法
import axiosInstance from './axios'

// 请求分类列表左侧导航栏数据
export const reqCategoryDate = () => {
  return axiosInstance({
    method: 'GET',
    url: '/getCateNav'
  })
}

// 请求分类列表右侧数据
export const reqCategoryRightDate = () => {
  return axiosInstance({
    method: 'GET',
    url: '/getCateList'
  })
}
