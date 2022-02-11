<template>
  <div>
    <button v-permission="'user'">用户模块</button>
    <button v-permission="'order'">订单模块</button>
    <button v-permission="'goods'">商品模块</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const clickGoods = (state) => {
      console.log('是否有权限？', state)
    }
    return {
      clickGoods,
    };
  },
});
</script>