<template>
  <div class="weights-index">
    <h1>{{ message }}</h1>
    <div v-for="weight in weights">
      <h2>{{weight.current_weight}}</h2>
      <h2>{{weight.date}}</h2></div>
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