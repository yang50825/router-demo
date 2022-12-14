import Vue from 'vue'
import App from './App.vue'

import Find from './views/Find.vue'
import My from './views/My.vue'
import Part from './views/Part.vue'
import NotFound from './views/NotFound.vue'

import Recommend from './views/Second/Recommend.vue'
import Ranking from './views/Second/Ranking.vue'
import SongList from './views/Second/SongList.vue'

// 第一步:下载vue-router yarn add vue-router
// 第二步：导入vue-router
import VueRouter from 'vue-router'

// 第三步：使用
Vue.use(VueRouter)

// 第四步：创建路由规则数组
const routes = [
  {
    path: '/', // 默认hash值路径
    redirect: '/find', // 重定向到/find
  },
  {
    path: '/find',
    name: 'Find',
    component: Find,
    redirect: '/find/recommend',
    children: [
      {
        path: 'recommend',
        component: Recommend,
      },
      {
        path: 'ranking',
        component: Ranking,
      },
      {
        path: 'songList',
        component: SongList,
      },
    ],
  },
  {
    path: '/my',
    name: 'My',
    component: My,
  },
  {
    path: '/part',
    name: 'Part',
    component: Part,
  },
  {
    path: '*',
    component: NotFound,
  },
]

// 第五步：创建路由对象，引入规则数组
const router = new VueRouter({
  routes,
  //   mode: 'history',
})

// to: 要去哪里，要跳转的路由
// from: 从哪里来
// next: 是否放行
const isLogin = false
router.beforeEach((to, from, next) => {
  if (to.path === '/my' && isLogin === false) {
    alert('请登录')
    next(false) // 阻止路由跳转
  } else {
    next() // 正常放行
  }
})

Vue.config.productionTip = false

// 第六步：把路由对象注入Vue实例中
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
