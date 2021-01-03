<template>
  <div class="sodia-new">
    <h1>Add sodium</h1>
    <form v-on:submit.prevent="createSodia()">
      <ul>
        <li v-for="error in errors"> {{error}}</li>
      </ul>
      <p>Quantity: <input type="integer" v-model="quantity"></p>
      <p>Measure: <input type="text" v-model="measure"></p>
      <p>Food: <input type="text" v-model="food"></p>
      <p>Sodium: <input type="integer" v-model="input_sodium"></p>
      <p>Date: <input type="date" v-model="date"></p></form>
      <button v-on:click="createSodia()">Submit</button>
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
      sodia: {},
      input_sodium: "",
      errors: [],
      date: "",
      quantity: "",
      measure: "",
      food: "",
    };
  },
  created: function () {},
  methods: {
    createSodia: function () {
      console.log("creating weight...");
      var params = {
        quantity: this.quantity,
        measure: this.measure,
        food: this.food,
        input_sodium: this.input_sodium,
      };
      axios
        .post("/api/sodia", params)
        .then((response) => {
          console.log("sodia create", response);
          this.$router.push("/sodia");
        })
        .catch((error) => {
          console.log("sodia create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>