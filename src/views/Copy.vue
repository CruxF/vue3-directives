<template>
  <button v-copy:[success]="msg">点击复制</button>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    let msg = ref("加油加油加油！");
    return {
      msg,
      success: (value) => {
        console.log('复制成功，剪贴板内容是：', value);
      },
    };
  },
});
</script>
