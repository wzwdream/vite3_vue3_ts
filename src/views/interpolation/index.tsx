import InterpolationTsx from './interpolationTsx'
import InterpolationVue from './interpolationVue.vue'
export default defineComponent({
    name: 'Interpolation',
    setup() {
        let msg = ref<string>('msg')
        const num = ref<number>(0)
        const changeMsg = () => {
            msg.value = msg.value === 'msg' ? '我不是msg' : 'msg'
        }
        const changeNum = () => {
            num.value = num.value === 0 ? 1 : 0
        }
        return () => (
            <div>
                <el-button type="primary" onClick={changeMsg}>改变msg</el-button>
                <el-button type="primary" onClick={changeNum}>改变num</el-button>
                <p>Vue的模板语法的插值使用的是 双大括号 `{'{{}}'}`, jsx/tsx中的插值使用的是 单大括号 `{'{}'}`</p>
                <div class={'box'}>
                    <InterpolationTsx num={num.value} msg={msg.value} />
                    <InterpolationVue num={num.value} msg={msg.value} />
                </div>
            </div>
        )
    }
})