import React from 'react'
import PropTypes from 'prop-types'

function withPaginationChangeFun(WrappedComponent) {
  class WrappedClass extends React.Component {
    onPaginationChange = (page, pageSize, getListFun) => {
      this.props.dispatch(getListFun({ offset: page - 1, limit: pageSize }))
    }

    render() {
      return (
        <WrappedComponent
          onPaginationChange={this.onPaginationChange}
          {...this.props}
        />
      )
    }
  }

  WrappedClass.propTypes = {
    dispatch: PropTypes.func,
  }

  return WrappedClass
}

export default withPaginationChangeFun
