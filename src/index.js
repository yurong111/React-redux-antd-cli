import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import './scss/index.scss'

const Index = () => {
  return (
    <div>
      <Button type='primary'>Primary</Button>
      <div>Hello React!</div>
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
