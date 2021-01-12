<template>
  <div class="sodia-new">
    <h1 style="text-align:center">Add sodium</h1>
    <form style="text-align:center" v-on:submit.prevent="createSodia()">
      <ul>
        <li v-for="error in errors"> {{error}}</li>
      </ul>
      <p style="color:grey">Quantity: <input style="background-color:lightgrey" type="text" v-model="quantity" placeholder="enter an amount"></p>
      <p style="color:grey">Measure: <input style="background-color:lightgrey" type="text" v-model="measure" placeholder="how much, what size?"></p>
      <p style="color:grey">Food: <input style="background-color:lightgrey" type="text" v-model="food"></p>
      <p style="color:grey">Sodium (mg): <input style="background-color:lightgrey" type="text" v-model="input_sodium" placeholder="leave blank if other fields filled out"></p>
      <p style="color:grey">Date: <input type="date" v-model="date" v-bind:style="{color: activeColor}"></p></form>
      <p style="text-align:center"><button v-on:click="createSodia()">Add Sodium Amount </button></p>
      <br>
      <br>
      <div style="text-align: center"><a href="/showsodia" class="button medium"
   v-bind:style="{color: activeColor}">Click here for Sodium Calculator</a></div>

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
      activeColor: "grey",
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