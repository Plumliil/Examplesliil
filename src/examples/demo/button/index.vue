<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
defineOptions({
  name: "buttons",
});
// 定义默认的宽高
const movement = reactive({ w: window.pageXOffset, h: window.pageYOffset });
onMounted(() => {
  // 当窗口发生变化时候更新宽高
  window.addEventListener("mousemove", function (event) {
    movement.w = event.pageX;
    movement.h = event.pageY;
  });
  const btnRef = ref(null);
  if (btnRef) {
    let btnosl = btnRef.offsetLeft;
  }
});
</script>

<template>
  <div>
    <h1>BUTTON</h1>
    {{ movement.w }}
    {{ movement.h }}
    <button ref="btnRef"><span>Hover Me</span></button>
  </div>
</template>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
button {
  position: relative;
  padding: 20px 30px;
  font-size: 20px;
  font-weight: 500;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(rgb(43, 190, 96), rgb(15, 157, 88));
  color: #000;
  text-decoration: none;
  border-radius: 5px;
  overflow: hidden;
}
button:hover {
  color: #fff;
  text-decoration: none;
}
button::before {
  content: "";
  position: absolute;
  left: var(--xpos);
  top: var(--ypos);
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background-color: #000;
  border-radius: 50%;
  transition: width 0.5s, height 0.5s;
}
button:hover::before {
  width: 400px;
  height: 400px;
}
button span {
  position: relative;
  z-index: 1;
}
</style>
