import React from 'react'
import { connect } from 'react-redux'
import './index.scss'

@connect(state => {})
class About extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return <div className='banner-box'>about</div>
  }
}

export default About
