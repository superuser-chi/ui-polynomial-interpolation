import {
  set
} from '@/utils/vuex'

export default {
  setDrawer: set('drawer'),
  setImage: set('image'),
  setColor: set('color'),
  setLoading: set('loading'),
  setDialog: set('dialog'),
  setMaximizedToggle: set('maximizedToggle'),
  setMessage: set('message')
}
