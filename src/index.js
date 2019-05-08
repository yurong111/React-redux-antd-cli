import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './style/index.scss'
import store from './store/store'
import App from './app'

ReactDOM.render(
  <Provider store={store}>
    <div className='testStyle' />
    <App />
  </Provider>,
  document.getElementById('root')
)
