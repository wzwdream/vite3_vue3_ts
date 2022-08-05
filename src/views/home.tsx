import { useMainStore } from '@/store/index'
export default defineComponent({
    setup() {
        const store = useMainStore()
        const isShow = false
        return () => (
            <div>
                <p>Home</p>
                <p>{store.msg}</p>
            </div>
        )
    }
})