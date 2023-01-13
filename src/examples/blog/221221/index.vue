<template>
  <h1>网页滚动条样式修改</h1>
  <div class="box box1">
    <div class="content">
      <pre>
        .box1::-webkit-scrollbar {
          width: 5px;
          background-color: white;
        }

        .box1::-webkit-scrollbar-thumb{
          background-color: black;
        }
      </pre>
    </div>
  </div>
  <div class="box box2">
    <div class="content">
      <pre>
        .box2::-webkit-scrollbar {
          background-color: white;
        }

        .box2::-webkit-scrollbar-thumb {
          background-color: black;
        }

        .box2::-webkit-scrollbar-corner{
          background-color: red;
        }

        .box2::-webkit-scrollbar-button{
          background-color: purple;
        }
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "test",
};
</script>

<style scoped>
h1{
  text-align: center;
  margin: 50px 0;
}
.box {
  margin: 20px auto;
  width: 60%;
  height: 300px;
  background-color: steelblue;
  overflow-y: scroll;
}
.content {
  width: 2000px;
  height: 800px;
}
pre {
  font-size: 20px;
  font-weight: 700;
  color: aliceblue;
  margin-left: -60px;
  margin-top: 20px;
}
.box1{
  overflow-x: hidden;
}
.box1::-webkit-scrollbar {
  width: 5px;
  background-color: white;
}
.box1::-webkit-scrollbar-thumb {
  background-color: black;
}
.box2 {
  overflow-x: scroll;
}
.box2::-webkit-scrollbar {
  background-color: white;
}
.box2::-webkit-scrollbar-thumb {
  background-color: black;
}
.box2::-webkit-scrollbar-corner {
  background-color: red;
}
.box2::-webkit-scrollbar-button {
  background-color: purple;
}
</style>
