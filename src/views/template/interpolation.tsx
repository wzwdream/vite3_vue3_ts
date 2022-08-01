
export default defineComponent({
    setup() {
        let msg = ref<string>('我是msg')
        const number = 0
        const changeMsg = () => {
            msg.value = '我不是msg'
        }
        return () => (
            <div>
                <p>Message: {msg.value}</p>
                <el-button type="primary" onClick={changeMsg}>改变msg</el-button>
                <p>表达式{number + 1}</p>
                <p>三目表达式{number > 0 ? 'YES' : 'NO'}</p>
            </div>
        )
    }
})