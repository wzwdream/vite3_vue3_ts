export default defineComponent({
    name: 'labelPropertiesTsx',
    props: {
        href: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            required: true
        }
    },
    setup(prop) {
        return () => (
            <el-card shadow="hover" header="TSX语法">
                <p>tsx语法的属性绑定使用文本插值就行，不在使用 `v-bind`</p>
                <p><a href={prop.href}>标签属性绑定</a></p>
                <el-input disabled={prop.disabled} placeholder="Please input" />
            </el-card>
        )
    }
})
