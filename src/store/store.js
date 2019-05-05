import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from '../store/middlewares/promiseMiddleware'
import reducer from '../store/reducers'

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose /*redux在浏览器查看*/

const middleware = [promiseMiddleware]
const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware) /*中间件，处理接口异步调用*/
  )
)

export default store
