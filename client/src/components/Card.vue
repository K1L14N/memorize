<template>
  <div class="card" @click="onFlip">{{flip ? card.nb : card.img}}</div>
</template>

<script>
export default {
  props: {
    card: {
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
      flip: true
    };
  }
};
</script>

<style scoped>
.card {
  background-color: #4fc08d;
  display: inline-block;
  height: 0;
  padding-bottom: 100%;
  width: 100%;
  border: 1px solid black;
  align-content: center;
}
</style>
