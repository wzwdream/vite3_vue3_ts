import Menu from '@/components/menu/index'
import Header from '@/components/header/index'
export default defineComponent({
  setup() {
    return () => (
      <el-container class="content">
        <el-aside width="200px">
          <Menu></Menu>
        </el-aside>
        <el-container>
          <el-header>
            <Header></Header>
          </el-header>
          <el-main class={'main'}>
            <router-view />
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    )
  }
})