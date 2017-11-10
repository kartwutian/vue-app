import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Index from '@/views/index/index'
import Index0 from '@/views/index/Index0'
import Index1 from '@/views/index/Index1'
import Index2 from '@/views/index/Index2'
import Index3 from '@/views/index/Index3'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: Index.name,
            component: Index,
            redirect: '/hello',
            children: [
                {
                    path: 'hello',
                    name: Index0.name,
                    component: Index0
                },
                {
                    path: 'friends',
                    name: Index1.name,
                    component: Index1
                },
                {
                    path: 'discover',
                    name: Index2.name,
                    component: Index2
                },
                {
                    path: 'center',
                    name: Index3.name,
                    component: Index3
                }

            ]
        }
    ]/*,
    scrollBehavior (to, from, savedPosition) {
        console.log(to,from)
        console.log(savedPosition)
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }*/
})
