<template>
  <component :is="demoComponents[curComponent]"></component>
</template>

<script lang="ts">
export default {
  name: "Blog",
};
</script>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { demoComponents } from "../route/examples";

const route = useRoute();
console.log(route.params.name);

let curComponent = route.params.name;
</script>

<style scoped>
body {
  background-color: pink;
}
</style>
