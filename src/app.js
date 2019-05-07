import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './pages/home/'
import About from './pages/about/'
import Topics from './pages/topics/'

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

class App extends React.Component {
  state = {
    collapsed: false,
  }

  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className='logo' />
            <Menu
              theme='dark'
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['3']}
              mode='inline'
            >
              <Menu.Item key='1'>
                <Link to='/'>Home</Link>
              </Menu.Item>
              <Menu.Item key='2'>
                <Link to='/about'>About</Link>
              </Menu.Item>
              <SubMenu key='sub1' title='topics'>
                {/* <SubMenu key='sub1' title={<Link to='/topics'>Topics</Link>}> */}
                <Menu.Item key='3'>
                  <Link to={'topics/components'}>Components</Link>
                </Menu.Item>
                <Menu.Item key='4'>
                  <Link to={'topics/props-v-state'}>Props v. State</Link>
                </Menu.Item>
                <Menu.Item key='5'>Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key='sub2'
                title={
                  <span>
                    <Icon type='team' />
                    <span>Team</span>
                  </span>
                }
              >
                <Menu.Item key='6'>Team 1</Menu.Item>
                <Menu.Item key='8'>Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key='9'>
                <Icon type='file' />
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/topics' component={Topics} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>

        {/* <Layout>
            <Header>Header</Header>
            <Layout>
              <Sider>
                <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/about'>About</Link>
                  </li>
                  <li>
                    <Link to='/topics'>Topics</Link>
                  </li>
                </ul>
              </Sider>
              <Content>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/topics' component={Topics} />
              </Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout> */}
      </BrowserRouter>
    )
  }
}

export default App
