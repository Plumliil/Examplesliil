<script setup lang="ts"></script>

<template>
  <div id="app">
    <RouterView></RouterView>
    <footer class="text-center py-2 text-muted fs-6 mt-1">
      <ul class="list-inline mb-0">
        <li class="list-inline-item">&copy; 2022 Plumliil</li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
#app{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
footer {
  position: absolute;
  bottom: 0;
  font-size: 14px;
}
ul {
  display: flex;
  justify-content: center;
  list-style: none;
}
</style>
