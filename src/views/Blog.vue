<template>
  <component :is="blogComponents[curComponent]"></component>
</template>

<script lang="ts">
export default {
  name: "Blog",
};
</script>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { blogComponents } from "../route/examples";

const route = useRoute();
console.log(route.params.name);

let curComponent = ref("blog" + route.params.name);
console.log(curComponent);
console.log(blogComponents);
</script>

<style scoped>
body {
  background-color: pink;
}
</style>
