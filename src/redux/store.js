// 用来创建store对象

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'

export default createStore(
  reducers,
  // 判断是开发依赖还是生产依赖
  process.env.Node_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)
)
