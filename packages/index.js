import Skeleton from './skeleton/index'
const components = [
    Skeleton
]
const install = function(Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
    // MetaInfo.install(Vue)
    // Vue.prototype.$loading = WLoadingBar
  }
  
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }
  export default {
    install,
    Skeleton
}