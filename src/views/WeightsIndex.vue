<template>
  <div class="weights-index">
    <h1>{{ message }}</h1>
    <div v-for="weight in weights">
      <p>{{weight.current_weight}}</p>
      <p>{{weight.date}}</p>
      <p>weight difference from yesterday:{{weight.weight_difference}}</p>
      <p>weight gain/loss over the past week:{{weight.weekly_weight_difference}}</p></div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Weights Index",
      weights: [],
    };
  },
  created: function () {
    axios.get("/api/weights").then((response) => {
      console.log("weights index");
      this.weights = response.data;
    });
  },
  methods: {},
};
</script>