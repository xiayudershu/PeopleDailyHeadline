<template>
	<div class="poster">
	<div class="rightText">
				<br/><br/><br />
				峥嵘时光作序，<br/><br/>
				涵咏华夏宏章。
	
	
			</div>
			<!-- <img src="../../assets/main/时光之书素材/一句话介绍.png" id="yjhjs"/> -->
			<div class="mainTimeLine">
				<div class="maozhedong"  v-if="showimages>=1">
					<div id="mainFirstDot" class="mainDot"></div>
					
					<img src="../../assets/main/素材包/中华人民共和国万岁.png" alt="" width="150px" class="timeLineImage" id="zhonghuarenming"/>
					<img src="../../assets/main/素材包/毛主席万岁.png" alt="" width="150px" class="timeLineImage" id="maozhuxiwansui"/>
				    <img src="../../assets/main/素材包/抗美援朝.png" alt="" width="180px" class="timeLineImage" id="kangmeiyuanchao"/>
					<img src="../../assets/main/素材包/毛主席.png" alt="" width="150px" class="timeLineImage" id="maozhuxi"/>
					<img src="../../assets/main/素材包/云.png" alt="" width="1000px"  class="timeLineImage" id="cloudleft"/>
					<img src="../../assets/main/素材包/云.png" alt="" width="1000px"  class="timeLineImage" id="cloudright"/>
				</div>
				
				<div class="zhouenlai" v-if="showimages>=2">
					<div id="mainSecondDot" class="mainDot"></div>
					<div id="mainThirdDot" class="mainDot"></div>
					<img src="../../assets/main/素材包/第一颗原子弹.png" alt="" width="100px" class="timeLineImage" id="yuanzidan"/>
					
					<img src="../../assets/main/素材包/东方红.png" alt="" width="150px" class="timeLineImage" id="dfh"/>
					<img src="../../assets/main/素材包/东方红音符.png" alt="" width="80px" class="timeLineImage" id="dfhyf"/>
					<img src="../../assets/main/素材包/袁隆平.png" alt="" width="120px" class="timeLineImage" id="ylp"/>
					<img src="../../assets/main/素材包/邓小平.png" alt="" width="300px" class="timeLineImage" id="dxp"/>
					<img src="../../assets/main/素材包/周恩来.png" alt="" width="150px" class="timeLineImage" id="zhouenlai"/>
				</div>
				
				<div class="jiangzheming" v-if="showimages>=3">
					<div id="mainForthDot" class="mainDot"></div>
					<img src="../../assets/main/素材包/改革开放.png" alt="" width="160px" class="timeLineImage" id="ggkf"/>
					<img src="../../assets/main/素材包/首页图广告.png" alt="" width="580px" class="timeLineImage" id="syt"/>
					<img src="../../assets/main/素材包/香港回归.png" alt="" width="150px" class="timeLineImage" id="xghg"/>
					<img src="../../assets/main/素材包/火炬.png" alt="" width="100px" class="timeLineImage" id="hj"/>
					<img src="../../assets/main/素材包/江泽民.png" alt="" width="180px" class="timeLineImage" id="jzm"/>
				
					<div id="mainFifthDot" class="mainDot"></div>
					<img src="../../assets/main/素材包/习近平.png" alt="" width="200px" class="timeLineImage" id="xjp"/>
					<img src="../../assets/main/素材包/抗疫.png" alt="" width="150px" class="timeLineImage" id="ky"/>
					<img src="../../assets/main/素材包/冰墩墩.png" alt="" width="100px" class="timeLineImage" id="bdd"/>
					
					
					
	            </div>
		
				
				
				
			</div>
			
		</div>
		
</template>

<script setup lang="ts">
	import { ref, onMounted, onBeforeUnmount } from "vue";

	const showimages = ref(1);
	const showInform = ref(false);
	let informObserver, timelineObserver;

	onMounted(() => {
	  const informElement = document.querySelector(".mainInform");
	  const timelineElement = document.querySelector(".mainTimeLine");
	
	  informObserver = new IntersectionObserver(entries => {
	    entries.forEach(entry => {
	      if (entry.isIntersecting) {
	        showInform.value = true;
	        startIncrementing();
	        animateClouds(); // 启动云的动画
	      } else {
	        showInform.value = false;
	        stopIncrementing();
	      }
	    });
	  });
	
	  timelineObserver = new IntersectionObserver(entries => {
	    entries.forEach(entry => {
	      if (entry.isIntersecting) {
	        startIncrementing();
	      } else {
	        stopIncrementing();
	      }
	    });
	  });
	
	  if (informElement) {
	    informObserver.observe(informElement);
	  }
	
	  if (timelineElement) {
	    timelineObserver.observe(timelineElement);
	  }
	});
	
	onBeforeUnmount(() => {
	  if (informObserver) {
	    informObserver.disconnect();
	  }
	  if (timelineObserver) {
	    timelineObserver.disconnect();
	  }
	});
	
	function startIncrementing() {
	  const timer = setInterval(() => {
	    if (showimages.value < 6) {
	      showimages.value++;
	    } else {
	      clearInterval(timer);
	    }
	  }, 1000); // 1000 milliseconds = 1 second
	}
	
	function stopIncrementing() {
	  // Not necessary to implement for this requirement, as we're stopping when reaching 6
	}
	
	function animateClouds() {
	  const cloudleft = document.getElementById('cloudleft');
	  const cloudright = document.getElementById('cloudright');
	  if (cloudleft && cloudright) {
	    cloudleft.classList.add('move');
	    cloudright.classList.add('move');
	  }
	}
</script>

<style>
</style>