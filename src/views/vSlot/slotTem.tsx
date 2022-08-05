import { renderSlot } from "vue"

export default defineComponent({
    setup(props, { slots }) {
        return () => (
            <div>
                { renderSlot(slots, 'default') }
                { slots.title?.() }
            </div>
        )
    }
})
