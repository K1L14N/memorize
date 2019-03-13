<template>
  <div class="card" @click="onFlip">
    <div v-if="flip < 2">{{flip === 0 ? card.name : card.nb}}</div>
    <img
      v-else
      @load="setheight"
      :src="require('../assets/img/' + card.nb + '.png')"
      :style="{ height: imageHeight + 'px' , width: imageHeight + 'px'}"
    >
  </div>
</template>

<script>
export default {
  props: {
    card: {
      nb: Number,
      img: String,
      name: String
    }
  },
  methods: {
    onFlip() {
      this.flip = (this.flip + 1) % 3;
    },
    setheight() {
      this.imageHeight = 50;
    }
  },
  data() {
    return {
      flip: 2,
      imageHeight: null
    };
  }
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 100%;

  background-color: #4fc08d;
  display: inline-block;
  /* height: 0;
  padding-bottom: 100%;
  width: 100%; */
  border: 1px solid black;

  text-align: center;
  vertical-align: middle;
  line-height: 50px;
}
</style>
