// https://vuex.vuejs.org/en/getters.html

export default {
  getUsername: state => state.user.username,
  getFirstname: state => state.user.firstname,
  getLastname: state => state.user.lastname,
  getAbout: state => state.user.about,
  getEmail: state => state.user.email,
  getPostalAddress: state => state.user.postal_address,
  getPhysicalAddress: state => state.user.physical_address,
  getPublicId: state => state.user.public_id,
  getAuthorization: state => state.user.authorization
}
