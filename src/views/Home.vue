<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <a href="/signup">Signup</a>
    <a href="/login">Login</a>
    <a href="/logout">Logout</a>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function () {},
  methods: {},
};
</script>
