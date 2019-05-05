import React from 'react'
import { Carousel } from 'antd'
import { connect } from 'react-redux'
import action from '../../store/actions'
import PropTypes from 'prop-types'

@connect(state => {})
class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.props.dispatch(action.getBanner())
  }

  render() {
    let arr = [1, 2, 3, 4]

    return (
      <div className='banner-box'>
        <Carousel autoplay effect='fade'>
          {arr.map((item, i) => {
            return <div key={i}>{item}</div>
          })}
        </Carousel>
      </div>
    )
  }
}

export default Home

Home.propTypes = {
  dispatch: PropTypes.func,
}
