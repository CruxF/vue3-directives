<template>
  <div class="directive">
    <div class="box" v-pos:warning.right.top="true">{{msg}}</div>
    <div class="box" v-pos:normal.right.bottom="true">{{msg}}</div>
    <div class="box" v-pos:normal.left.bottom="true">{{msg}}</div>
    <div class="box">{{msg}}</div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Directive',
  setup() {
    const msg = ref('message')
    return {
      msg
    }
  },
})
</script>

<style scoped>
.box {
  height: 100px;
  width: 100px;
  text-align: center;
  line-height: 100px;
  color: aliceblue;
  background-color: green;
}
</style>