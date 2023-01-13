<template>
  <component class="cmp" :is="testComponents[curComponent]"></component>
</template>

<script lang="ts">
export default {
  name: "Tools",
};
</script>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { testComponents } from "../route/examples";

const route = useRoute();
let curComponent = ref("test" + route.params.name);
</script>

<style scoped>
body {
  background-color: pink;
}
.cmp {
  margin-top: 100px;
}
</style>
