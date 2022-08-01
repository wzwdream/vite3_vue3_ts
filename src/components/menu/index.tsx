import { routes } from '@/router/index'
import MenuItem from './menuItem'
import './index.scss'

export default defineComponent({
    setup() {
        const isShowRoutes = computed(() => {
            return routes
        })
        const currentPath = computed(() => {
            return useRoute().path
        })

        return () => (
            <el-scrollbar class={`menuContent`}>
                <el-menu
                    default-active={currentPath.value}
                    mode="vertical"
                    class={'menu'}
                >
                    {
                        isShowRoutes.value.map((route) => {
                            return <MenuItem item={route} key={route.path}></MenuItem>
                        })
                    }
                </el-menu>
            </el-scrollbar>
        )
    }
})