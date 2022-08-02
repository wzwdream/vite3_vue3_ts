import { defineComponent, PropType } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import './index.scss'

const MenuItem = defineComponent({
    name: 'MenuItem',
    props: {
        item: {
            type: Object as PropType<RouteRecordRaw>,
            required: true
        }
    },
    setup(props: { item: any }) {
        const router = useRouter()
        const jumpRoute = (path: string) => {
            router.push(path)
        }
        return () => {
            let { item } = props
            if (item.children) {
                const slots = {
                    title: () => {
                        return <div>
                            <span>{item.meta.title}</span>
                        </div>
                    }
                }
                return <el-sub-menu index={item.path} v-slots={slots}>
                    {item.children.map((child: RouteRecordRaw) => {
                        return <MenuItem item={child} key={child.path}></MenuItem>
                    })}
                </el-sub-menu>
            } else {
                return <el-menu-item index={item.path} onClick={() => jumpRoute(item.path)}>{item.meta.title}</el-menu-item>
            }
        }
    }
})

export default MenuItem