import ConditionalRenderingTsx from './conditionalRenderingTsx'
import ConditionalRenderingVue from './ConditionalRenderingVue.vue'

export default defineComponent({
    name: 'ConditionalRendering',
    setup() {
        const isShow = ref<boolean>(true)
        const changeIsShow = () => {
            isShow.value = !isShow.value
        }
        return () => (
            <div>
                <el-button type="primary" onClick={changeIsShow}>{isShow.value ? '隐藏' : '显示'}</el-button>
                <p>Vue的模板语法的插值使用的是 双大括号 `{'{{}}'}`, jsx/tsx中的插值使用的是 单大括号 `{'{}'}`</p>
                <div class={'box'}>
                    <ConditionalRenderingTsx isShow={isShow.value} />
                    <ConditionalRenderingVue isShow={isShow.value} />
                </div>
            </div>
        )
    }
})