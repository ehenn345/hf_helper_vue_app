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
                    <p>{{weight.weight_difference}}</p><br>
                    <p>{{weight.weekly_weight_difference}}</p>
									</header>
								</article>
								<article v-for="weight in weights">
									<span class="image">
										<img src="images/pic02.jpg" alt="" />
									</span>
									<header class="major">
										<h3><a href="landing.html" class="link">{{weight.weight_difference}}</a></h3>
										<p>feugiat amet tempus</p>
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