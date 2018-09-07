<template>
  <div class="tile">
    <span @click="onFlip($event)">{{ id }}: {{ word }}</span>
  </div>
</template>

<script>

export default {
  name: 'Tile',
  props: {
    id: Number,
    word: String,
  },
  data() {
    return {
    }
  },
  methods: {
    // onFlip: function(event) {
    //   console.log(event);
    // },
  }
}
</script>

<style scoped>
.tile {
  background-color: rgba(59, 64, 70, 0.728);
  margin: 5px;
  width: 50px;
}
</style>
