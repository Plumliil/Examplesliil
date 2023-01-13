<script lang="ts">
import { defineComponent, defineExpose } from "vue";
export default defineComponent({
  name: "test-ts",
  // setup() {
  //   const name = "test-ts";
  //   function getData(options: any) {
  //     console.log("options", options);
  //   }
  //   return { name, getData };
  // },
});
</script>
<script setup lang="ts">
const name = "test-ts";
function getData(options: any) {
  console.log("options", options);
}
defineExpose({
  getData,
  name,
});
</script>

<template>
  <div>defineExpose-ts2339</div>
  <pre></pre>
</template>

<style scoped lang="less"></style>
