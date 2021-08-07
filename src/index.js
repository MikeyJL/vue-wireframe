import Wireframe from './Wireframe.vue'

function install (Vue) {
  if (install.installed) return true
  install.installed = true
  Vue.component('vue-wireframe', Wireframe)
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

Wireframe.install = install

export default Wireframe
