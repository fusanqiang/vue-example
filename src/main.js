import Vue from 'vue'
import App from './App.vue'
import Hello from './components/Hello.vue'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

/* 注册两个插件 */

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter()

// 路由map
router.map({
  '/home': {
    component: Home
  },
  '/time-entries': {
    component: TimeEntries,
    subRoutes: {
      '/log-time': {
        component: LogTime
      }
    }
  }
})

router.redirect({
  '*':'/home'
})

router.start(App,'#app')

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
