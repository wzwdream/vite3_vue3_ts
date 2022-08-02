import EventModifierTsx from './eventModifierTsx'
import EventModifierVue from './eventModifierVue.vue'

export default defineComponent({
    name: 'EventModifier',
    setup() {

        return () => (
            <div>
                <div class={'box'}>
                    <EventModifierTsx />
                    <EventModifierVue />
                </div>
            </div>
        )
    }
})
