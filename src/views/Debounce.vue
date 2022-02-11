<template>
  <button v-debounce:1000.immediate="debounceClick">快速点击看看</button>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const debounceClick = ()=>{
      console.log('短时间内不会重复执行')
    }
    return {
      debounceClick
    };
  },
});
</script>
