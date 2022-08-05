import { createApp } from 'vue'
import App from './App'
import router from './router/index'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.scss'
// 引入pinia
import { createPinia } from 'pinia'
// 创建 Pinia 实例
const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')