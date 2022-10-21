import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes,// routes: routes,
})

// const app = Vue.createRouter({})
// app.use(router)
export default router


// 1 解决 404 页面的方式二【命名路由】
// router.resolve({
//     name: 'not-found',
//     params: { pathMatch: ['not', 'found'] },
// }).href // '/not/found'
// 2
// router.isReady().then(onSuccess).catch(onError)