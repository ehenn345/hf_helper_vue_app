<template>
  <div class="weights-index">
    <!-- Main -->
					<div id="main">

						<!-- One -->
							<section id="one" class="tiles">
								<article v-for="weight in weights">
									<span class="image">
										<img src="images/pic01.jpg" alt="" />
									</span>
									<header class="major">
										<h3><a href="landing.html" class="link">{{weight.date}}</a></h3>
										<p>{{weight.current_weight}} lbs</p>
										<div v-if="weight===weights[0]">
                    <p>{{weight.weight_difference}}</p><br>
                    <p>{{weight.weekly_weight_difference}}</p></div>
									</header>
								</article>
								
								
							</section>
 <div style="text-align: center">
        <a href="/weights/new" class="button large">Add a weight</a></div>
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