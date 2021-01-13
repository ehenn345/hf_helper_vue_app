<template>
  <div class="sodia-show">
    <h1 style="text-align:center">Sodium Calculator</h1>
    <h3 style="text-align:center" Enter information here to see how much sodium is in your food></h3>
    <!-- <p> {{sodia.input_sodium}} </p> -->
    <form style="text-align:center" v-on:submit.prevent="showSodia()">
      <ul>
        <li v-for="error in errors"> {{error}}</li>
      </ul>
      <p style="color:grey">Quantity: <input style="background-color:lightgrey" type="text" v-model="quantity" placeholder="how many?"></p>
      <p style="color:grey">Measure: <input style="background-color:lightgrey" type="text" v-model="measure" placeholder="how much/size?"></p>
      <p style="color:grey">Food: <input style="background-color:lightgrey" type="text" v-model="food"></p>
      </form>
      <p style="text-align:center"><button v-on:click="showSodia()">How Much Sodium?</button></p>
      <br>
      <div style="text-align: center">
        <a href="/sodia/new" class="button medium">Go to ADD SODIUM page</a></div>

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
          alert("The total is " + this.sodia.input_sodium + " mg of sodium");
        });
    },
  },
};
</script>