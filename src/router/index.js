import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          name: HelloWorld.name,
          component: HelloWorld
        },
        {
          path: '/friends',
          name: HelloWorld.name,
          component: HelloWorld
        },
        {
          path: '/discover',
          name: HelloWorld.name,
          component: HelloWorld
        },
        {
          path: '/center',
          name: HelloWorld.name,
          component: HelloWorld
        },
    ]
})
