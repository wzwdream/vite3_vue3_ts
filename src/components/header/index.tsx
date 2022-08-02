import { useDark, useToggle } from '@vueuse/core'
import './index.scss'
export default defineComponent({
  setup() {
    const isDark = useDark()
    // 防止首次打开就开启黑暗模式
    isDark.value = false
    const toggleDark = () => {
      isDark.value = !isDark.value
      useToggle(isDark)
    }
    const route = useRoute()
    return () => (
      <div class={'header'}>
        <span>{route.meta.title}</span>
        <el-button onClick={toggleDark} text round bg>
          <el-icon>
            {
              isDark.value ? <i-ep-sunrise /> : <i-ep-sunny />
            }
          </el-icon>
          {isDark.value ? 'dark' : 'light'}
        </el-button>
      </div>
    )
  }
})