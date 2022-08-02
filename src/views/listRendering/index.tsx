import ListRenderingTsx from './listRenderingTsx'
import ListRenderingVue from './listRenderingVue.vue'

export default defineComponent({
    name: 'ListRendering',
    setup() {
        const listData = reactive<listData[]>([
            {name: 'Tom', age: 18},
            {name: 'Jim', age: 20},
            {name: 'Lucy', age: 16}
        ])
        return () => (
            <div>
                <p>Vue的模板语法使用的 `v-for`, jsx/tsx中的使用 `map`</p>
                <div class={'box'}>
                    <ListRenderingTsx listData={listData} />
                    <ListRenderingVue listData={listData} />
                </div>
            </div>
        )
    }
})

interface listData {
    name: string,
    age: number
}