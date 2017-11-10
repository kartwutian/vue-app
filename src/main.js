// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import GlobalComponents from '@/components/global'

Vue.use(Vuex)
Vue.use(GlobalComponents)

console.log(store)

fastclick.attach(document.body)

Vue.config.productionTip = false
/* eslint-disable no-new */
const mvvm = new Vue({
    el: '#app',
    router,
    store,
    render: (h) =>h(App)
})


// 主要通过afterEach钩子
router.afterEach((to, from) => {
    // 将位置保存在vuex中
    store.commit('SAVE_POSITION', {
        name: from.path,
        position: document.querySelector('.m-scrollview').scrollTop || document.body.scrollTop || document.documentElement.scrollTop
    })
    // 设置保存的位置
    if (store.state.positions[to.path]) {
        setTimeout(() => {
            $utils.scrollTo(document.querySelector('.m-scrollview'), store.state.positions[to.path].position)
        }, 0)
    } else {
        setTimeout(() => {
            $utils.scrollTo(document.querySelector('.m-scrollview'), 0)
        }, 0)
    }
})
