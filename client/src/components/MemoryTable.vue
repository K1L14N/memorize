<template>
  <div>
    <div>Memory Table</div>
    <div class="container">
      <div v-for="card in cards" :key="card.id">
        <Card :card="card.text"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  data() {
    return {
      cards: [
        { text: "s1", id: 1 },
        { text: "s2", id: 2 },
        { text: "s3", id: 3 },
        { text: "s4", id: 3 },
        { text: "s5", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 },
        { text: "s3", id: 3 }
      ]
    };
  },
  components: {
    Card
  }
};
</script>

<style scoped>
.container {
  width: 900px;
  height: auto;
  /* border: 1px solid black; */
  margin: 10px auto;
  /* background-image: url("./courses/calendar.png"); */
  /* background-color: red; */
  /* background-size: cover; */
  box-shadow: 6px 6px 20px gray;
  display: grid;
  grid-template-columns: repeat(10, 10%);
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
</style>