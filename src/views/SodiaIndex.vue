<template>
  <div class="sodia-index">
    <h1>{{ message }}</h1>
    <div v-for="sodium in sodia">
      <p>{{sodium.input_sodium}}</p>
      <p>{{sodium.date}}</p>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Sodium Index!",
      sodia: [],
    };
  },
  created: function () {
    axios.get("/api/sodia?date=2020-12-01").then((response) => {
      console.log("sodia index", response);
      this.sodia = response.data;
    });
  },
  methods: {},
};
</script>