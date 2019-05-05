import React, { PropTypes, Component } from 'react'
import { Form, Carousel } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import action from '../../store/actions'

const FormItem = Form.Item

class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.props.add(2)
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

function mapStateToProps(state) {
  const { home } = state
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    add: bindActionCreators(action.add, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create({})(Index))
