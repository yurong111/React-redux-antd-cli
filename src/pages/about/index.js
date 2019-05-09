import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import './index.scss'
import PropTypes from 'prop-types'

@connect(state => {})
class About extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  onClick = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='banner-box'>
        <Button onClick={this.onClick}>跳转Home</Button>
      </div>
    )
  }
}

export default About

About.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}
