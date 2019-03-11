<template>
  <div id="app">
    <MemoryTable/>
  </div>
</template>

<script>
import MemoryTable from "./components/MemoryTable.vue";

export default {
  name: "app",
  components: {
    MemoryTable
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #34495e;
  background-color: #fff;
  margin: 0;
}
</style>
