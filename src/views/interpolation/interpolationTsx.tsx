
export default defineComponent({
    name: 'InterpolationTsx',
    props: {
        msg: {
            type: String,
            defualt: '',
            required: true
        },
        num: {
            type: Number,
            defualt: 0,
            required: true
        }
    },
    setup(prop) {
        return () => (
            <el-card shadow="hover" header="TSX语法">
                <p>我是tsx语法</p>
                <p>msg: {prop.msg}</p>
                <p>num &gt; 0 ? {prop.num > 0 ? '是' : '否'}</p>
            </el-card>
        )
    }
})