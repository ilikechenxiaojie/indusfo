import Layout from '@/views/layout'
const _import = require('./_import_' + process.env.NODE_ENV)

export default [
  {
    path: '/',
    name: '恩大施福生产管控',
    redirect: '/test',
    component: Layout,
    hidden: false,
    children: [{
      path: 'test',
      name: '首页',
      component: _import('test/index')
    }]
  },
  {
    path: '/oform',
    component: Layout,
    name: '订单',
    hidden: true,
    children: [
      {
        path: 'one',
        name: '选项1',
        component: _import('oform/index')
      },
      {
        path: 'two',
        name: '选项2',
        component: _import('oform/two')
      },
      {
        path: 'three',
        name: '选项3',
        component: _import('oform/three')
      }
    ]
  },
  {
    path: '/prod',
    component: Layout,
    name: '生产',
    hidden: true,
    children: [
      {
        path: 'one',
        name: '选项4',
        component: _import('prod/index')
      },
      {
        path: 'two',
        name: '选项5',
        component: _import('prod/two')
      },
      {
        path: 'three',
        name: '选项6',
        component: _import('prod/three')
      }
    ]
  },
  {
    path: '/quality',
    component: Layout,
    name: '品质',
    hidden: true,
    children: [
      {
        path: 'one',
        name: '选项7',
        component: _import('quality/index')
      },
      {
        path: 'two',
        name: '选项8',
        component: _import('quality/two')
      },
      {
        path: 'three',
        name: '选项9',
        component: _import('quality/three')
      }
    ]
  },
  {
    path: '/informs/detail/:id',
    hidden: false,
    name: '通知详情',
    component: _import('informs/detail')
  }
]
