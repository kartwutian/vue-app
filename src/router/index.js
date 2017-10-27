import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import { Layout } from '@/components/layout'

Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          name: 'Hello',
          component: HelloWorld
        },
        {
          path: '/layout',
          name: Layout.name,
          component: Layout
        },
    ]
})
