
export default defineComponent({
    name: 'ConditionalRenderingTsx',
    props: {
        isShow: {
            type: Boolean,
            defualt: true,
            required: true
        }
    },
    setup(prop) {
        const showElement = () => {
            if (prop.isShow) {
                return <span>我是if</span>
            } else {
                return <span>我是else</span>
            }
        }
        return () => (
            <el-card shadow="hover" header="TSX语法">
                <p>tsx语法的条件渲染可以使用 `v-show`, `if/else`, `三目运算`等</p>
                <p>v-show: <span v-show={prop.isShow}>我是v-show</span></p>
                <p>if/else: 
                    {
                        showElement()
                    }
                </p>
                {
                    prop.isShow ? <p>我是三目1</p> : <p>我是三目2</p>
                }
            </el-card>
        )
    }
})