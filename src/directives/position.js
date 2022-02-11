const pos = {
  mounted(el, binding) {
    // 传递给指令的值：盒子是否要固定
    let pinned = binding.value
    // 传递给指令的修饰符：表示盒子定在哪里
    let position = binding.modifiers
    console.log('position：', position)
    // 传递给指令的参数：可以表示盒子的特性
    let args = binding.arg
    if (pinned) {
      el.style.position = 'fixed'
      if (args == 'warning') {
        el.style.backgroundColor = 'pink'
      } else {
        el.style.backgroundColor = 'gray'
      }
      for (let val in position) {
        console.log('val：', val)
        if (position[val]) {
          el.style[val] = '10px'
        }
      }
    } else {
      el.style.position = 'static'
      el.style.backgroundColor = ''
    }
  },
}
export default pos