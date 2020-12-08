export default [
  {
    path: '',
    name: 'LoginHome',
    component: resolve => require(['@/pages/Login/Login'], resolve),
    meta: {
      title: '登录 - 主页'
    }
  }
]
