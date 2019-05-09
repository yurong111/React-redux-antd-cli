import React from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'
import action from '../../store/actions'
import PropTypes from 'prop-types'
import withPaginationChangeFun from '../../components/with-pagination-change-fun'

@connect(state => ({
  articleObject: state.home.articleObject,
}))
@withPaginationChangeFun
class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(action.getBanner())
  }

  getColumns = () => {
    return [
      {
        key: 'id',
        title: 'ID',
        width: '20%',
        render: record => record.id,
      },
      {
        key: 'title',
        title: '标题',
        sorter: true,
        width: '20%',
        render: record => record.post_title,
      },
      {
        key: 'image',
        title: '图片',
        width: '20%',
        render: record => (
          <img src={`${record.post_cover_image}`} width='50' height='50' />
        ),
      },
    ]
  }

  render() {
    const {
      articleObject: { objects: dataList, pagination = {} } = {},
    } = this.props

    return (
      <div className='banner-box'>
        <Table
          columns={this.getColumns()}
          rowKey={record => record.id}
          dataSource={dataList}
          pagination={{
            ...pagination,
            onChange: (page, pageSize) =>
              this.props.onPaginationChange(page, pageSize, action.getBanner),
            onShowSizeChange: (page, pageSize) =>
              this.props.onPaginationChange(page, pageSize, action.getBanner),
          }}
          // loading={this.state.loading}
          // onChange={this.handleTableChange}
        />
      </div>
    )
  }
}

export default Home

Home.propTypes = {
  dispatch: PropTypes.func,
  articleObject: PropTypes.object,
  onPaginationChange: PropTypes.func,
}
