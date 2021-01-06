<template>
  <div class="sodia-index">
    <!-- Main -->
    <input type="date" v-model="date" v-on:change="sodiumDate">
    <p>{{ message }}</p>
					<div id="main">

						<!-- One -->
							<section id="one" class="tiles">
								<article v-for="sodium in sodia">
									<span class="image">
										<img src="images/pic01.jpg" alt="" />
									</span>
									<header class="major">
										<h3><a href="landing.html" class="link">{{sodium.input_sodium}} ml</a></h3>
										<p>Total for the day: {{sodium.sodium_daily_total}} ml</p>
									</header>
								</article>
								
							</section>

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