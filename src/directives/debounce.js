const debounce = {
  mounted(el, binding) {
    let timer
    // 时间限定
    const wait = binding.arg
    // 是否立即执行
    const immediate = binding.modifiers.immediate
    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer)
      }
      if (immediate) {
        // 如果已经执行过，不再执行
        var callNow = !timer
        if (callNow) {
          binding.value()
        }
      }
      timer = setTimeout(() => {
        binding.value()
      }, wait)
    })
  },
}

export default debounce
