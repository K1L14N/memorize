<template>
  <div class="tile" @click="onFlip()">
    {{ toDisplay }}
  </div>
</template>

<script>

export default {
  name: 'Tile',
  props: {
    initId: Number,
    initWord: String,
  },
  data() {
    return {
      id: this.initId,
      word: this.initWord,
      toDisplay: this.initId,
    }
  },
  methods: {
    onFlip: function() {
      this.toDisplay = this.toDisplay === this.id ? this.word : this.id
    },
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
