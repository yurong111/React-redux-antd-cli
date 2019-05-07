import React from 'react'
import PropTypes from 'prop-types'

class Topic extends React.Component {
  render() {
    let { match } = this.props

    return <h3>Requested Param: {match.params.id}</h3>
  }
}

export default Topic

Topic.propTypes = {
  match: PropTypes.object,
}
