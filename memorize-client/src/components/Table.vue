<template>
  <div class="table">
    <Tile v-for="tile in table" :key=tile.id :initWord=tile.word :initId=tile.id></Tile>
  </div>
</template>

<script>
import Tile from './Tile.vue'

export default {
  name: "Table",
  components: {
    Tile
  },
  props: {
    table: [],
  },
  data() {
    return {
      // tiles: [
      //   {id: 0, word: "sceau"},
      //   {id: 1, word: "dés"},
      // ]
    }
  }
}
</script>

<style scoped>
.table {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-auto-rows: minmax(20px, auto);
  background-color: rgba(134, 187, 134, 0.872);
}
</style>
