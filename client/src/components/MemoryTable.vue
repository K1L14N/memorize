<template>
  <div>
    <div>
      <div class="title">Memory Table</div>
      <button class="btn-fill" @click="onScramble">Scramble</button>
      <button class="btn" @click="onReset">Reset</button>
    </div>

    <div class="container" v-if="isSync">
      <div v-for="card in cards" :key="card.nb">
        <Card :card="card"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { initCards } from "../assets/data.js";

export default {
  data() {
    return {
      cards: initCards,
      isSync: true
    };
  },
  methods: {
    onScramble() {
      this.isSync = false;
      for (let i = initCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [initCards[j], initCards[i]];
      }
      this.isSync = true;
    },
    onReset() {
      this.isSync = false;
      this.cards = this.cards.sort((a, b) => {
        return a.nb - b.nb;
      });
      this.isSync = true;
    }
  },
  components: {
    Card
  }
};
</script>

<style scoped>
.container {
  width: 90%;
  /* width: 90%; */
  margin: auto;
  margin-bottom: 30px;
  /* background-image: url("./courses/calendar.png"); */
  /* background-size: cover; */
  box-shadow: 6px 6px 20px gray;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-template-areas:
    "card0 card10 card20 card30 card40 card50 card60 card70 card80 card90"
    "card1 card11 card21 card31 card41 card51 card61 card71 card81 card91"
    "card2 card12 card22 card32 card42 card52 card62 card72 card82 card92 "
    "card3 card13 card23 card33 card43 card53 card63 card73 card83 card93 "
    "card4 card14 card24 card34 card44 card54 card64 card74 card84 card94 "
    "card5 card15 card25 card35 card45 card55 card65 card75 card85 card95 "
    "card6 card16 card26 card36 card46 card56 card66 card76 card86 card96 "
    "card7 card17 card27 card37 card47 card57 card67 card77 card87 card97 "
    "card8 card18 card28 card38 card48 card58 card68 card78 card88 card98 "
    "card9 card19 card29 card39 card49 card59 card69 card79 card89 card99";
}
.image {
  background-image: none;
  background-size: cover;
  background-position: center;
}
.btn {
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #42b983;
  width: 100px;
  text-align: center;
  margin: 20px 0;
  box-sizing: border-box;
  border: 1px solid #42b983;
}
.btn-fill {
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  width: 100px;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}
.title {
  font-weight: 300;
  margin: 0;
  font-size: 3.2em;
}
</style>