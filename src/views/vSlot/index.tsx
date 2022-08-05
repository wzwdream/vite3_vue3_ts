import Vslot from './slotTem'
export default defineComponent({
    name: 'vSlot',
    setup() {
        return () => (
            <div>
                <div class={'box'}>
                    <Vslot v-slots={{
                        title: () => {
                            return <p>我是title插槽</p>
                        },
                        default: () => {
                            return <p>我是default插槽</p>
                        }
                    }} />
                </div>
            </div>
        )
    }
})
