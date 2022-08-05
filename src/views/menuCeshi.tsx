export default defineComponent({
    setup() {
        const route = useRoute()
        return () => (
            <div>
                <p>{route.meta.title}</p>
            </div>
        )
    }
})