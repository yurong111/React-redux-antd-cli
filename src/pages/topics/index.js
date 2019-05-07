import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Topic from './topic'
import { Route } from 'react-router-dom'

@connect(state => {})
class Topics extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    let { match } = this.props

    return (
      <div>
        {/* <h2>Topics</h2> */}

        {/* <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul> */}

        <Route path={`${match.path}/:id`} component={Topic} />
        {/* <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        /> */}
      </div>
    )
  }
}

export default Topics

Topics.propTypes = {
  match: PropTypes.object,
}
