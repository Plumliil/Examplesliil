<template>
  <component :is="toolComponents[curComponent]"></component>
</template>

<script lang="ts">
export default {
  name: "Tools",
};
</script>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { toolComponents } from "../route/examples";

const route = useRoute();
console.log(route.params.name);

let curComponent = ref(route.params.name + "");
console.log(curComponent);
console.log(toolComponents);
</script>

<style scoped>
body {
  background-color: pink;
}
</style>
