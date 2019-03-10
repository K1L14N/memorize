<template>
  <div class="card" @click="flip">{{cardValue}}</div>
</template>

<script>
export default {
  props: {
    card: String
  },
  methods: {
    flip() {
      this.cardValue = this.cardValue
        .split("")
        .reverse()
        .join("");
    }
  },
  data() {
    return {
      cardValue: this.card
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
