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
        { text: "0", id: 0 },
        { text: "1", id: 1 },
        { text: "2", id: 2 },
        { text: "3", id: 3 },
        { text: "4", id: 4 },
        { text: "5", id: 5 },
        { text: "6", id: 6 },
        { text: "7", id: 7 },
        { text: "8", id: 8 },
        { text: "9", id: 9 },
        { text: "10", id: 10 },
        { text: "11", id: 11 },
        { text: "12", id: 12 },
        { text: "13", id: 13 },
        { text: "14", id: 14 },
        { text: "15", id: 15 },
        { text: "16", id: 16 },
        { text: "17", id: 17 },
        { text: "18", id: 18 },
        { text: "19", id: 19 },
        { text: "20", id: 20 },
        { text: "21", id: 21 },
        { text: "22", id: 22 },
        { text: "23", id: 23 },
        { text: "24", id: 24 },
        { text: "25", id: 25 },
        { text: "26", id: 26 },
        { text: "27", id: 27 },
        { text: "28", id: 28 },
        { text: "29", id: 29 },
        { text: "30", id: 30 },
        { text: "31", id: 31 },
        { text: "32", id: 32 },
        { text: "33", id: 33 },
        { text: "34", id: 34 },
        { text: "35", id: 35 },
        { text: "36", id: 36 },
        { text: "37", id: 37 },
        { text: "38", id: 38 },
        { text: "39", id: 39 },
        { text: "40", id: 40 },
        { text: "41", id: 41 },
        { text: "42", id: 42 },
        { text: "43", id: 43 },
        { text: "44", id: 44 },
        { text: "45", id: 45 },
        { text: "46", id: 46 },
        { text: "47", id: 47 },
        { text: "48", id: 48 },
        { text: "49", id: 49 },
        { text: "50", id: 50 },
        { text: "51", id: 51 },
        { text: "52", id: 52 },
        { text: "53", id: 53 },
        { text: "54", id: 54 },
        { text: "55", id: 55 },
        { text: "56", id: 56 },
        { text: "57", id: 57 },
        { text: "58", id: 58 },
        { text: "59", id: 59 },
        { text: "60", id: 60 },
        { text: "61", id: 61 },
        { text: "62", id: 62 },
        { text: "63", id: 63 },
        { text: "64", id: 64 },
        { text: "65", id: 65 },
        { text: "66", id: 66 },
        { text: "67", id: 67 },
        { text: "68", id: 68 },
        { text: "69", id: 69 },
        { text: "70", id: 70 },
        { text: "71", id: 71 },
        { text: "72", id: 72 },
        { text: "73", id: 73 },
        { text: "74", id: 74 },
        { text: "75", id: 75 },
        { text: "76", id: 76 },
        { text: "77", id: 77 },
        { text: "78", id: 78 },
        { text: "79", id: 79 },
        { text: "80", id: 80 },
        { text: "81", id: 81 },
        { text: "82", id: 82 },
        { text: "83", id: 83 },
        { text: "84", id: 84 },
        { text: "85", id: 85 },
        { text: "86", id: 86 },
        { text: "87", id: 87 },
        { text: "88", id: 88 },
        { text: "89", id: 89 },
        { text: "90", id: 90 },
        { text: "91", id: 91 },
        { text: "92", id: 92 },
        { text: "93", id: 93 },
        { text: "94", id: 94 },
        { text: "95", id: 95 },
        { text: "96", id: 96 },
        { text: "97", id: 97 },
        { text: "98", id: 98 },
        { text: "99", id: 99 }
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