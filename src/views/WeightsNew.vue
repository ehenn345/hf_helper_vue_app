<template>
  <div class="weights-new">
    
    <h1 style="text-align:center">Add a weight</h1>
    <form style="text-align:center;color:grey" v-on:submit.prevent="createWeight()">
      <ul>
        <li v-for="error in errors"> {{error}}</li>
      </ul>
      <p>Weight (lbs): <input type="integer" v-model="current_weight" v-bind:style= "{color: activeColor}"></p>
      <p>Date: <input type="date" v-model="date" v-bind:style= "{color: activeColor}"></p></form>
      <p style="text-align:center">
      <button v-on:click="createWeight()">Submit</button></p>
      <div style="text-align: center">
        <a href="/weights" class="button medium">Go to your weight tracker</a></div>
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
      activeColor: "black",
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
