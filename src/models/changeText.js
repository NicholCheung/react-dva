export default {
    namespace: 'text',
    state: {
        value: '真'
    },
    reducers: {
        change(state, action) {
            return { ...state, value: state.value === '真' ? '假' : '真' }
        }
    }
}