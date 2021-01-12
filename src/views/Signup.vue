<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="name" style="background-color:lightgrey">
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" style="background-color:lightgrey">
      </div>
      <div class="form-group">
        <label>Sodium Limit (mg)</label>
        <input type="integer" class="form-control" v-model="sodiumLimit">
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" style="background-color:lightgrey">
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input type="password" class="form-control" v-model="passwordConfirmation" style="background-color:lightgrey">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      sodiumLimit: "",
      fluidLimit: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        name: this.name,
        email: this.email,
        sodium_limit: this.sodiumLimit,
        fluid_limit: this.fluidLimit,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>