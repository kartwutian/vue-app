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

router.beforeEach((to, from, next) => {
    // mvvm.$dialog.loading.open()
    // setTimeout(function () {
    //     mvvm.$dialog.loading.close()
    // },3000)
})
