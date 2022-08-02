import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home'),
        meta: {
            routerName: '主页',
        }
    },
    {
        path: '/interpolation',
        name: 'Interpolation',
        component: () => import('@/views/interpolation/index'),
        meta: { routerName: '插值' },
    },
    {
        path: '/conditionalRendering',
        name: 'ConditionalRendering',
        component: () => import('@/views/conditionalRendering/index'),
        meta: { routerName: '条件渲染' },
    },
    {
        path: '/listRendering',
        name: 'ListRendering',
        component: () => import('@/views/listRendering/index'),
        meta: { routerName: '列表渲染/循环渲染' },
    },
    {
        path: '/labelProperties',
        name: 'LabelProperties',
        component: () => import('@/views/labelProperties/index'),
        meta: { routerName: '标签属性绑定' },
    },
    {
        path: '/eventModifier',
        name: 'EventModifier',
        component: () => import('@/views/eventModifier/index'),
        meta: { routerName: '事件修饰符' },
    },
    {
        path: '/vModel',
        name: 'VModel',
        component: () => import('@/views/vModel/index'),
        meta: { routerName: 'v-model双向绑定' },
    },
    {
        path: '/ceshi1',
        name: 'ceshi1',
        redirect: '/',
        meta: { routerName: '菜单测试1' },
        children: [
            {
                path: '/ceshi1-1',
                name: 'ceshi1-1',
                redirect: '/',
                meta: { routerName: '菜单测试1-1' },
            },
            {
                path: '/ceshi1-2',
                name: 'ceshi1-2',
                redirect: '/',
                meta: { routerName: '菜单测试1-2' },
                children: [
                    {
                        path: '/ceshi1-1-1',
                        name: 'ceshi1-1-1',
                        redirect: '/',
                        meta: { routerName: '菜单测试1-1-1' },
                    },
                    {
                        path: '/ceshi1-1-2',
                        name: 'ceshi1-1-2',
                        redirect: '/',
                        meta: { routerName: '菜单测试1-1-2' },
                    },       
                ]
            }
        ]
    },
    {
        path: '/ceshi2',
        name: 'ceshi2',
        redirect: '/',
        meta: { routerName: '菜单测试2' },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
