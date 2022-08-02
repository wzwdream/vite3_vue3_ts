export default defineComponent({
    name: 'ListRenderingTsx',
    props: {
        listData: {
            type: Array<listData>,
            defalut: [],
            required: true
        }
    },
    setup(prop) {
        return () => (
            <el-card shadow="hover" header="TSX语法">
                <div class={'box'}>
                    <span>姓名</span>
                    <span>年龄</span>
                </div>
                {
                    prop.listData.map(item => {
                        return <div class={'box'}>
                            <span>{item.name}</span>
                            <span>{item.age}</span>
                        </div>
                    })
                }
            </el-card>
        )
    }
})

interface listData {
    name: string,
    age: number
}