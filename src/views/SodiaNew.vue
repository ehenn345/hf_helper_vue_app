<template>
  <div class="sodia-new">
    <h1>Add sodium</h1>
    <form v-on:submit.prevent="createSodia()">
      <ul>
        <li v-for="error in errors"> {{error}}</li>
      </ul>
      <p>Quantity: <input type="text" v-model="quantity"></p>
      <p>Measure: <input type="text" v-model="measure"></p>
      <p>Food: <input type="text" v-model="food"></p>
      <p>Sodium (mg): <input type="text" v-model="input_sodium" placeholder="leave blank if other fields filled out"></p>
      <p>Date: <input type="date" v-model="date" v-bind:style="{color: activeColor}"></p></form>
      <button v-on:click="createSodia()">Add Sodium Amount </button>
      <br>
      <br>
      <a href="/showsodia">
   <button>Click here for Sodium Calculator</button>
</a>
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
      activeColor: "black",
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
        date: this.date,
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