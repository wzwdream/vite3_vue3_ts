import { createApp } from 'vue'
import App from './App'
import router from './router/index'
// 引入pinia
import { createPinia } from 'pinia'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.scss'
// 创建 Pinia 实例
const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')