<template>
  <div class="card">{{card}}</div>
</template>

<script>
export default {
  props: {
    card: String
  }
  //   data() {
  //     return {
  //       card: String
  //     };
  //   }
};
</script>

<style scoped>
.card {
  width: auto;
  height: 90px;
  margin: 0;
  border: 1px solid black;
}
</style>
