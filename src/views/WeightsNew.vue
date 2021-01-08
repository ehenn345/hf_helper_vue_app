<template>
  <div class="weights-new">
    
    <h1>Add a weight</h1>
    <form v-on:submit.prevent="createWeight()">
      <ul>
        <li v-for="error in errors"> {{error}}</li>
      </ul>
      <p>Weight: <input type="integer" v-model="current_weight"></p>
      <p>Date: <input type="date" v-model="date"></p></form>
      <button v-on:click="createWeight()">Submit</button>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      weights: {},
      current_weight: "",
      errors: [],
      date: "",
    };
  },
  created: function () {},
  methods: {
    createWeight: function () {
      console.log("creating weight...");
      var params = {
        current_weight: this.current_weight,
        date: this.date,
      };
      axios
        .post("/api/weights", params)
        .then((response) => {
          console.log("weights create", response);
          this.$router.push("/weights");
        })
        .catch((error) => {
          console.log("weights create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
