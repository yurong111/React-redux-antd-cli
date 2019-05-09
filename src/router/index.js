import { lazy } from 'react'

const Home = lazy(() => import(/* webpackChunkName: "home" */ '../pages/home/'))
const About = lazy(() =>
  import(/* webpackChunkName: "about" */ '../pages/about/')
)
const Components = lazy(() =>
  import(/* webpackChunkName: "topics" */ '../pages/topics/components')
)

const routes = [
  {
    label: '首页',
    exact: true,
    path: '/home',
    component: Home,
    isShowSubMenu: false,
    subRoutes: [
      {
        label: '详情',
        path: '/detail',
        component: Components,
      },
    ],
  },
  {
    label: '关于',
    path: '/about',
    component: About,
  },
  {
    label: '主题',
    path: '/topics',
    isShowSubMenu: true,
    subRoutes: [
      {
        label: '组件',
        path: '/components',
        component: Components,
      },
      {
        label: '属性',
        path: '/props',
        component: Components,
      },
    ],
  },
]

export default routes

export function getRouters() {
  return parseRouters(routes)
}

export function parseRouters(routes, parentRoute) {
  let routesArr = []
  routes.map((route, i) => {
    if (parentRoute != null && parentRoute.path !== '/') {
      route.path = parentRoute.path + route.path
    }
    if (route.component) routesArr.push(route)
    if (route.subRoutes)
      routesArr = [...routesArr, ...parseRouters(route.subRoutes, route)]
  })
  return routesArr
}
