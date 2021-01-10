<template>
  <div class="sodia-index">
    <!-- Main -->
     <input type="date" v-model="date" v-on:change="sodiumDate" v-bind:style="{color: activeColor}">
    <p>{{ message }}</p>
    
					<div id="main" class="alt">

						<!-- One -->
							<section id="one">
								<div class="inner">
									<header class="major">
										<h1>Your Sodium Page</h1>
                    <h1>Total sodium left: {{sodia[0] && sodia[0].user_sodium_limit - sodia[0].sodium_daily_total}}</h1>
                    <h1>{{date}}</h1>
									</header>
									
                  <ul>
                    <h1>Daily total: {{sodia[0] && sodia[0].sodium_daily_total}} mg</h1>
                    <span class="image main"><img v-if="sodia[0] && sodia[0].sodium_daily_total > sodia[0].user_sodium_limit" src="images/too much salt.jpg" alt="" />
                    <img v-else-if="sodia[0] && sodia[0].sodium_daily_total < sodia[0].user_sodium_limit" src="images/keepitup.jpg" alt="" />
                    <img v-else src="images/hfimage.jpg"></span>
                    <h2>{{message2}}</h2>
                    <li v-for="sodium in sodia">
                       {{sodium.input_sodium}} ml</li></ul>
                       
									<p></p>
								</div>
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
      message: "Pick a date to see sodium info for that day",
      message2: "Today's sodium entries:",
      sodia: [],
      date: "",
      activeColor: "black",
      muchoColor: "red",
    };
  },
  created: function () {},
  methods: {
    sodiumDate: function () {
      axios.get(`/api/sodia?date=${this.date}`).then((response) => {
        console.log("sodia index", response);
        this.sodia = response.data;
      });
    },
  },
};
</script>