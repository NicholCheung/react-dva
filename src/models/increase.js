export default {
    namespace: 'counter',
    state: {
        count: 0
    },
    effects: {
        *decrementAsync(action, { put }) {
            yield put({ type: 'decrement' })
        }
    },
    reducers: {
        increment(state) {
            return { ...state, count: state.count + 1 }
        },
        decrement(state) {
            return { ...state, count: state.count <= 0 ? 0 : state.count - 1 }
        }
    }
}