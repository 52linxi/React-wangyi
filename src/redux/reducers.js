// 根据之前的状态和生成新的状态模块
import {combineReducers} from 'redux'
// 引入type类型
import {LEFT_NAV,RIGHT_DATA,SAVE_RIGHT_DATA} from './action-types'

// 引入localstorange
import {getItem} from '../utils/localStorage'

// 分类列表左侧的数据 ##1
const init_left_nav = {}
function leftnav(prevState=init_left_nav,action) {
  switch (action.type) { 
    case LEFT_NAV:
      return action.data
    default:
      return prevState
  }
  
}
 // 初始化分类列表右侧数据 ##2
const init_right_data = []
function rightData (prevState = init_right_data, action) {
  switch (action.type) {
    case RIGHT_DATA:
      return action.data
    default:
      return prevState
  }
}
// 初始化保存分类列表右侧查找到的数据,保证刷新不报错  ##3
const init_save_right_data = getItem('rightdata') || {} 
function saverightdata (prevState = init_save_right_data, action) {
  switch (action.type) {
    case SAVE_RIGHT_DATA:
      return action.data
    default:
      return prevState
  }
}

export default combineReducers({
  leftnav,
  rightData,
  saverightdata
})