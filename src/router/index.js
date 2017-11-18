import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Index from '@/views/index/index'
import Index0 from '@/views/index/Index0'
import Index1 from '@/views/index/Index1'
import Index2 from '@/views/index/Index2'
import Index3 from '@/views/index/Index3'
import Buttons from '@/views/buttons/buttons'

import Rank from '@/views/music/rank/rank'
import Recommend from '@/views/music/recommend/recommend'
import Singer from '@/views/music/singer/singer'
import Search from '@/views/music/search/search'
import SongSheet from '@/views/music/songsheet/songsheet'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: Index.name,
            component: Index,
            redirect: '/music/recommend',
            children: [
                {
                    path: '/music',
                    name: Index0.name,
                    component: Index0,
                    children: [
                        {
                            path: '/music/recommend',
                            name: Recommend.name,
                            component: Recommend,
                            alias: '/music',
                        },
                        {
                            path: '/music/singer',
                            name: Singer.name,
                            component: Singer
                        },
                        {
                            path: '/music/rank',
                            name: Rank.name,
                            component: Rank
                        },
                        {
                            path: '/music/search',
                            name: Search.name,
                            component: Search
                        }
                    ]
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
        },
        {
            path: '/buttons',
            name: Buttons.name,
            component: Buttons
        },
        {
            path: '/music/recommend/:id',
            name: SongSheet.name,
            component: SongSheet
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
