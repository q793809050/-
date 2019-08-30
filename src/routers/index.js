import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'

import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profiles from '../pages/Profiles/Profiles.vue'
import Login from '../pages/Login/Login.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/Msite',
            component: Msite,
            meta: {
                ShowFooter:true
            }
        },
        {
            path: '/Search',
            component: Search,
            meta: {
                ShowFooter:true
            }
        },
        {
            path: '/Order',
            component: Order,
            meta: {
                ShowFooter:true
            }
        },
        {
            path: '/Profiles',
            component: Profiles,
            meta: {
                ShowFooter:true
            }
        },
        {
            path: '/',
           redirect: "/Msite"
        },
        {
            path: '/Login',
            component:Login
        },
    ]
})

