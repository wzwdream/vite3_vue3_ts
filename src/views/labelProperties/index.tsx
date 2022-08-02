import LabelPropertiesTsx from './labelPropertiesTsx'
import LabelPropertiesVue from './labelPropertiesVue.vue'

export default defineComponent({
    name: 'LabelProperties',
    setup() {
        const href = 'https://www.baidu.com/'
        const disabled = ref<boolean>(false)
        const changeDisabled = () => {
            disabled.value = !disabled.value
        }
        return () => (
            <div>
                <p>Vue的模板语法使用的 `v-for`, jsx/tsx中的使用 `map`</p>
                <el-button type="primary" onclick={changeDisabled}>{disabled.value ? '启用' : '禁用'}</el-button>
                <div class={'box'}>
                    <LabelPropertiesTsx href={href} disabled={disabled.value} />
                    <LabelPropertiesVue href={href} disabled={disabled.value} />
                </div>
            </div>
        )
    }
})
