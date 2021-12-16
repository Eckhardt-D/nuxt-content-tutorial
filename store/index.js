export const state = () => ({
  query: '',
})

export const mutations = {
  SET_QUERY(state, payload) {
    state.query = payload
  },
}
