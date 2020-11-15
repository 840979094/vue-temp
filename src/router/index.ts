import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import './home'
Vue.use(VueRouter)

// 自动注入路由记录到routes中
const requireCxt = require.context("./", true, /.(js|ts)$/)
let routes: RouteConfig[] = [
    {
        path: "",
        redirect: "/home"
    }
]

requireCxt.keys().forEach(filename => {
    // 如果不是./index 那就处理
    if (filename.indexOf("./index") !== 0) {
        const routesModule = requireCxt(filename)
        routes = [routesModule.default, ...routes]
    }
})

console.log(routes, "路由配置表")
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router