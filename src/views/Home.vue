<template>
  <div class="home">
     <!-- Banner -->
					<section id="banner" class="major">
						<div class="inner">
							<header class="major">
								<h1>Hello!</h1>
							</header>
							<div class="content">
								<p>Welcome to your personal heart failure helper</p>
								<ul class="actions">
									<li v-if="!isLoggedIn()">
									<a href="/login" class="medium button">Log In</a>
									<br>
									<br>
									<a href="/signup" class="large button">Sign Up</a></li>
									<li v-if=isLoggedIn()><a
									href="/logout"
									class="button">Log Out</a></li>
								</ul>
							</div>
						</div>
					</section>
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
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
