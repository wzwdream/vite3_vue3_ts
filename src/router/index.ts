import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home'),
        meta: {
            title: '主页',
        }
    },
    {
        path: '/interpolation',
        name: 'Interpolation',
        component: () => import('@/views/interpolation/index'),
        meta: { title: '插值' },
    },
    {
        path: '/conditionalRendering',
        name: 'ConditionalRendering',
        component: () => import('@/views/conditionalRendering/index'),
        meta: { title: '条件渲染' },
    },
    {
        path: '/listRendering',
        name: 'ListRendering',
        component: () => import('@/views/listRendering/index'),
        meta: { title: '列表渲染/循环渲染' },
    },
    {
        path: '/labelProperties',
        name: 'LabelProperties',
        component: () => import('@/views/labelProperties/index'),
        meta: { title: '标签属性绑定' },
    },
    {
        path: '/eventModifier',
        name: 'EventModifier',
        component: () => import('@/views/eventModifier/index'),
        meta: { title: '事件修饰符' },
    },
    {
        path: '/vModel',
        name: 'VModel',
        component: () => import('@/views/vModel/index'),
        meta: { title: 'v-model双向绑定' },
    },
    {
        path: '/vSlot',
        name: 'VSlot',
        component: () => import('@/views/vSlot/index'),
        meta: { title: '插槽' },
    },
    {
        path: '/ceshi1',
        name: 'ceshi1',
        redirect: '/',
        meta: { title: '菜单测试1' },
        children: [
            {
                path: '/ceshi1-1',
                name: 'ceshi1-1',
                component: () => import('@/views/menuCeshi'),
                meta: { title: '菜单测试1-1' },
            },
            {
                path: '/ceshi1-2',
                name: 'ceshi1-2',
                redirect: '/',
                meta: { title: '菜单测试1-2' },
                children: [
                    {
                        path: '/ceshi1-1-1',
                        name: 'ceshi1-1-1',
                        component: () => import('@/views/menuCeshi'),
                        meta: { title: '菜单测试1-1-1' },
                    },
                    {
                        path: '/ceshi1-1-2',
                        name: 'ceshi1-1-2',
                        component: () => import('@/views/menuCeshi'),
                        meta: { title: '菜单测试1-1-2' },
                    },       
                ]
            }
        ]
    },
    {
        path: '/ceshi2',
        name: 'ceshi2',
        component: () => import('@/views/menuCeshi'),
        meta: { title: '菜单测试2' },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
