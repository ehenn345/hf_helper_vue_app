<template>
  <div class="sodia-show">
    <h1>Sodium Calculator</h1>
    <h3> Enter information here to see how much sodium is in your food</h3>
    <p> {{sodia.input_sodium}} </p>
    <form v-on:submit.prevent="showSodia()">
      <ul>
        <li v-for="error in errors"> {{error}}</li>
      </ul>
      <p>Quantity: <input type="text" v-model="quantity" placeholder="how many?"></p>
      <p>Measure: <input type="text" v-model="measure" placeholder="how much/size?"></p>
      <p>Food: <input type="text" v-model="food"></p>
      </form>
      <button v-on:click="showSodia()">How Much Sodium?</button>
      <br>
      <br>
      <a href="/showsodia">
   <button>Go to ADD SODIUM page</button>
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
      quantity: "",
      measure: "",
      food: "",
      errors: [],
      sodia: [],
    };
  },
  created: function () {},
  methods: {
    showSodia() {
      console.log("creating sodium...");
      var params = {
        quantity: this.quantity,
        measure: this.measure,
        food: this.food,
      };

      axios
        .get(
          `/api/showsodia?quantity=${this.quantity}&measure=${this.measure}&food=${this.food}`
        )
        .then((response) => {
          console.log(response.data);
          this.sodia = response.data;
          alert(
            "The total is " + this.sodia.input_sodium + " miligrams of sodium"
          );
        });
    },
  },
};
</script>