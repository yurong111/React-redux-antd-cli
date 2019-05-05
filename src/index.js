import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import { Provider } from 'react-redux'
import './style/index.scss'
import store from './store/store'
import Home from './pages/home/'

const App = () => {
  return (
    <div>
      <Button type='primary'>Primary</Button>
      <div>Hello React!</div>
      <Home />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
