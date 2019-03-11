<template>
  <div class="card" @click="onFlip">{{flip ? card.nb : card.img}}</div>
</template>

<script>
export default {
  props: {
    _card: {
      nb: Number,
      img: String
    }
  },
  methods: {
    onFlip() {
      this.flip = !this.flip;
      console.log(this.card.nb);
    }
  },
  data() {
    return {
      card: this._card,
      flip: true
    };
  }
};
</script>

<style scoped>
.card {
  width: auto;
  height: 90px;
  border: 1px solid black;
  align-content: center;
}
</style>
