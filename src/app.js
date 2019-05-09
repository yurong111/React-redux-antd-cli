import React, { Suspense } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'
import routes, { getRouters } from './router'
import PropTypes from 'prop-types'

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu
const routers = getRouters()

@withRouter
class SiderMenu extends React.Component {
  state = {
    collapsed: false,
  }

  openKeys = []
  selectedKeys = []

  setMenuStatus = () => {
    let { pathname } = this.props.location
    let pathnameArr = pathname.split('/').filter(item => item.length > 0)

    let oneLevelKey = pathnameArr.length ? `/${pathnameArr[0]}` : routes[0].path
    let twoLevelKey = `/${pathnameArr[0]}/${pathnameArr[1]}`
    let isOneLevel = false

    switch (pathnameArr.length) {
      case 3:
        this.openKeys = [twoLevelKey]
        this.selectedKeys = [twoLevelKey]
        break
      case 2:
        // 判断二级菜单是不可显示，则选中一级
        for (let i = 0; i < routes.length; i++) {
          const item = routes[i]
          if (!item.isShowSubMenu && item.path.indexOf(oneLevelKey) !== -1) {
            isOneLevel = true
            break
          }
        }
        this.openKeys = [oneLevelKey]
        this.selectedKeys = isOneLevel ? [oneLevelKey] : [twoLevelKey]
        break
      default:
        this.selectedKeys = [oneLevelKey]
        break
    }
  }

  render() {
    this.setMenuStatus()

    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className='logo' />
        <Menu
          theme='dark'
          defaultSelectedKeys={[routes[0].path]}
          selectedKeys={this.selectedKeys}
          defaultOpenKeys={this.openKeys}
          mode='inline'
        >
          {routes.map(item => {
            if (!item.label) return null
            if (!item.isShowSubMenu) {
              return (
                <Menu.Item key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </Menu.Item>
              )
            }
            if (item.subRoutes.length && item.isShowSubMenu) {
              return (
                <SubMenu title={item.label} key={item.path}>
                  {item.subRoutes.map(sub => {
                    if (!sub.label) return null
                    return (
                      <Menu.Item key={sub.path}>
                        <Link to={sub.path}>{sub.label}</Link>
                      </Menu.Item>
                    )
                  })}
                </SubMenu>
              )
            }
          })}
        </Menu>
      </Sider>
    )
  }
}

SiderMenu.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <SiderMenu />
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Suspense fallback={<div>Loading...</div>}>
                  <Switch>
                    <Route
                      key={routers[0].path}
                      exact={routers[0].exact}
                      path='/'
                      component={routers[0].component}
                    />
                    {routers.map(item => {
                      return (
                        <Route
                          key={item.path}
                          exact={item.exact}
                          path={item.path}
                          component={item.component}
                        />
                      )
                    })}
                  </Switch>
                </Suspense>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App
