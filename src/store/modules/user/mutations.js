// https://vuex.vuejs.org/en/mutations.html

export default {
  UPDATE_USER (state, payload) {
    state.user.authorization = payload.Authorization
    state.user.public_id = payload.public_id
    state.user.physical_address = payload.physical_address
    state.user.postal_address = payload.postal_address
    state.user.email = payload.email
    state.user.about = payload.about
    state.user.firstname = payload.first_name
    state.user.lastname = payload.last_name
  }
}
