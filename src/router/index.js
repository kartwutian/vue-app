import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Index from '@/views/index/index'
import Index0 from '@/views/index/Index0'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: Index.name,
            component: Index,
            redirect: '/hello',
            children: [{
                path: 'hello',
                name: Index0.name,
                component: Index0
            }]
        }
    ]
})
