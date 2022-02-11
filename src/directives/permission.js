var ownPermission = ['user', 'order'];
function toolPermission(el, permission) {
  if (permission && !ownPermission.includes(permission)) {
    // 关键代码, 没有权限则删除元素
    // el.parentNode && el.parentNode.removeChild(el);
    el.style.backgroundColor = 'gray'
  }
}

const permission = {
  mounted(el, binding) {
    toolPermission(el, binding.value)
  },
  updated(el, binding) {
    toolPermission(el, binding.value)
  }
}

export default permission