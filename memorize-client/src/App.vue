<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    
    <div class="form">
      <input v-model="id" type="text" placeholder="id">
      <input v-model="word" type="text" placeholder="word">
      <button @click="onAdd(id, word)">Add</button>
    </div>
    
    <label class="fullWidth" v-if="errorMessage === '' ">You entered {{ id }}: {{ word }}</label>
    <label class="fullWidth" v-if="errorMessage !== '' && sendOnce">{{ errorMessage }}</label>
  
    <Table :table="tableObj"></Table>
  </div>
</template>

<script>
import * as axios from 'axios'
import Table from "./components/Table"

export default {
  name: "app",
  components: {
    Table
  },
  data() {
    return {
      id: "",
      word: "",
      errorMessage: "",
      tableObj: [],
      sendOnce: false,
    };
  },
  methods: {
    onAdd: function(id/* , word */) {
      this.sendOnce = true
      var pattern = /^\d+$/;
      if (!pattern.test(id)) {
        this.errorMessage = "Invalid id"
      } else {
        this.errorMessage = ""
        // this.tableObj.push({id, word})
        axios.post(process.env.VUE_APP_ROOT_API + "/tables", {
          name: "VueJS AXIOS"
        })
        // .then(result => {
        //   console.log(result);
        // })
        // .catch(err => {
        //   console.log(err);
        // })
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.form {
  width: 10px auto;
  margin-top: 60px;
  margin-bottom: 5px;
}
.fullWidth {
  width: 10 auto;
}
</style>
