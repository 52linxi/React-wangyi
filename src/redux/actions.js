//  用来创建actions工厂函数模块
// 引入接口分档
import {reqCategoryDate,reqCategoryRightDate} from '../api'
//  引入types类型
import {LEFT_NAV,RIGHT_DATA,SAVE_RIGHT_DATA} from './action-types'

// 左侧分类列表的数据(同步) ##1
const getCategoryDate =(data)=>({type:LEFT_NAV,data})
// 分类列表左侧列表发请求存redux (异步)
export const getCategoryDateAsync=()=>{
  return dispatch=>{
    return reqCategoryDate().then((res)=>{
      
      dispatch(getCategoryDate(res))
    })
  }
}

// 分类列表右侧数据(同步) ##2
const getCategoryRightDate = (data) => ({ type: RIGHT_DATA, data })
// 分类列表右侧数据(异步)
export const getCategoryRightDateAsync = () => {
  return async dispatch => {
    const res = await reqCategoryRightDate()
    dispatch(getCategoryRightDate(res))
  }
}

// 分类列表查找到的数据保存在redux中 ##3
export const saveRightData = (data) => ({ type: SAVE_RIGHT_DATA, data })


  
