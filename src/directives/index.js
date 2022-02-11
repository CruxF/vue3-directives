import pos from './position'
import copy from './copy'
import debounce from './debounce'
import permission from './permission'
const directives = {
  pos,
  copy,
  debounce,
  permission
}
export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  },
}