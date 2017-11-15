/* 全局组件引入 */

import {Confirm, Alert, Toast, Notify, Loading,Preload } from '../dialog'
import { Layout } from '../layout'
import { Lazyload } from '../lazyload'
import { NavBar, NavBarBackIcon, NavBarNextIcon } from '../navbar'
import { Badge } from '../badge'
import { BackTop } from  '../backtop'
import {ListTheme, ListItem, ListOther} from '../list'
import {InfiniteScroll} from '../infinitescroll'
import { PullRefresh } from '../pullrefresh'
import { InfiniteScrollRefresh } from '../infinitescrollrefresh'
import {Button, ButtonGroup} from '../button'
import {ActionSheet} from '../actionsheet'
import {NewTab, NewTabItem} from '../tabs'
import { BScroll} from  '../bscroll'
import {Slider, SliderItem} from  '../slider'
import { ListLoading } from '../tips'

const install = function (Vue) {
    Vue.component(Layout.name,Layout)
    Vue.component(Lazyload.name,Lazyload)
    Vue.component(NavBar.name,NavBar)
    Vue.component(NavBarBackIcon.name,NavBarBackIcon)
    Vue.component(NavBarNextIcon.name,NavBarNextIcon)
    Vue.component(Badge.name,Badge)
    Vue.component(BackTop.name,BackTop)
    Vue.component(ListTheme.name,ListTheme)
    Vue.component(ListItem.name,ListItem)
    Vue.component(ListOther.name,ListOther)
    Vue.component(InfiniteScroll.name,InfiniteScroll)
    Vue.component(PullRefresh.name,PullRefresh)
    Vue.component(InfiniteScrollRefresh.name,InfiniteScrollRefresh)
    Vue.component(Button.name,Button)
    Vue.component(ButtonGroup.name,ButtonGroup)
    Vue.component(ActionSheet.name,ActionSheet)
    Vue.component(NewTab.name,NewTab)
    Vue.component(NewTabItem.name,NewTabItem)
    Vue.component(BScroll.name,BScroll)
    Vue.component(Slider.name,Slider)
    Vue.component(SliderItem.name,SliderItem)
    Vue.component(ListLoading.name,ListLoading)

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
