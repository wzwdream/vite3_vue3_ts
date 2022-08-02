import VModelTsx from './vModelTsx'
import VModelVue from './vModelVue.vue'

export default defineComponent({
    name: 'vModel',
    setup() {
        return () => (
            <div>
                <div class={'box'}>
                    <VModelTsx />
                    <VModelVue />
                </div>
            </div>
        )
    }
})
