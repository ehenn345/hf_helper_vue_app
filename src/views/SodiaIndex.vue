<template>
  <div class="sodia-index">
    <div v-for="sodium in sodia">
      <p>Date: {{sodium.date}}</p>
      <p>Sodium entry: {{sodium.input_sodium}}</p>
      <p>Daily total: {{sodium.sodium_daily_total}}</p>
    </div>
    <input type="date" v-model="date" v-on:change="sodiumDate">
    <p>{{ message }}</p>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Pick a date to see sodium  info for that day",
      sodia: [],
      date: "",
    };
  },
  created: function () {},
  methods: {
    sodiumDate: function () {
      axios.get(`/api/sodia?date=${this.date}`).then((response) => {
        console.log("sodia index", response);
        console.log("`the` + date");
        this.sodia = response.data;
      });
    },
  },
};
</script>