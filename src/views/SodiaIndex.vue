<template>
  <div class="sodia-index" style="text-align:center">
    <!-- Main -->
     <input type="date" v-model="date" v-on:change="sodiumDate" v-on:click.once='isDate = !isDate'  v-bind:style="{color: activeColor}">
    <h4 style="color:grey">{{ message }}</h4>
    
					<div id="main" class="alt">

						<!-- One -->
							<section id="one">
								<div class="inner" v-if="isDate">
									
                    <h1>Your sodium difference: {{sodia[0] && sodia[0].user_sodium_limit - sodia[0].sodium_daily_total}} mg</h1>
                    <p> If a negative number, you have gone over your limit </p>
                    <br>
									  <br>
                  <ul>
                    <h1>Total sodium consumed: {{sodia[0] && sodia[0].sodium_daily_total}} mg</h1>
                    <span class="image main"><img v-if="sodia[0] && sodia[0].sodium_daily_total > sodia[0].user_sodium_limit" src="images/too much salt.jpg" alt="" />
                    <img v-else-if="sodia[0] && sodia[0].sodium_daily_total < sodia[0].user_sodium_limit" src="images/keepitup.jpg" alt="" />
                    <img v-else src="images/hfimage.jpg"></span>
                    <h2>Sodium entries:</h2>
                    <li style="color:grey" v-for="sodium in sodia">
                       {{sodium.input_sodium}} mg</li></ul>
                       
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
      isDate: false,
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