export default defineComponent({
    name: 'VModelTsx',
    setup() {
        const inputValue = ref<string>('')
        return () => (
            <el-card shadow="hover" header="TSX语法">
                <p>tsx语法的双向绑定也是是使用 `v-model`</p>
                <p>输入框的值： {inputValue.value}</p>
                <el-input v-model={inputValue.value} placeholder="Please input" />
            </el-card>
        )
    }
})
