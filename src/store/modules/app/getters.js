// https://vuex.vuejs.org/en/getters.html

export default {
  drawer: state => state.drawer,
  loading: state => state.loading, 
  dialog: state => state.dialog,
  maximizedToggle: state => state.maximizedToggle,
  message: state => state.message
}
