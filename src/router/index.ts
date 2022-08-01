import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home'),
        meta: { 
            routerName: '主页',
            icon: '<i-ep-no-smoking />'
        }
    },
    {
        path: '/template',
        name: 'Template',
        meta: { routerName: '模板语法' },
        children: [
            {
                path: '/template/interpolation',
                name: 'Interpolation',
                component: () => import('@/views/template/interpolation'),
                meta: { routerName: '插值' },
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
