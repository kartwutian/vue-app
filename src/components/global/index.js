/* 全局组件引入 */

import {Confirm, Alert, Toast, Notify, Loading,Preload } from '../dialog'
import { Lazyload } from '../lazyload'

const install = function (Vue) {
    Vue.component(Lazyload.name,Lazyload)
    Vue.prototype.$dialog = {
        confirm: Confirm,
        alert: Alert,
        toast: Toast,
        notify: Notify,
        loading: Loading,
        preload: Preload
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};
