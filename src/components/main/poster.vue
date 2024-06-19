<template>
	<div class="poster">

	<img src="../../assets/main/时光之书素材/Vector.png" alt="" width="150px" class="vector" />
	<img src="../../assets/main/时光之书素材/Vector1.png" alt="" width="150px" class="vector1" />
<!-- 	<img src="../../assets/main/时光之书素材/首页图.png" alt="" width="150px" class="syt" /> -->
<!-- 	<img src="../../assets/main/时光之书素材/一句话.png" alt="" width="150px" class="yjh" /> -->
	<img src="../../assets/maintitle1.png" alt="" width="150px" class="bigtitle" />
	<img src="../../assets/main/红色丝带.png" alt="" width="150px" class="hssd" />
	
	
	<img src="../../assets/main/时光之书素材/粉色背景.png"  class="fsbj" id="fsbjElement" />
	<img src="../../assets/main/时光之书素材/一句话.png"  class="yjh" id="yjhElement"/>
	
	
	<img src="../../assets/main/图片流.png" alt="" width="150px" class="tpl" id="movingImage" />
	<div class="sjsl" id="sjslElement">
	    设计思路
	</div>
	
	
	</div>
		
</template>

<script setup lang="ts">

</script>

<style>
.vector{
	position:absolute;
	top:55vh;
	left:0.5vw;
	height:40vh;
	width: 98vw;
}
.vector1{
	position:absolute;
	top:60vh;
	left:0.5vw;
	height:40vh;
	width: 98vw;
}
.syt{
	position:absolute;
	top:-5vh;
	left:0.5vw;
	height:105vh;
	width: 98vw;
}

.bigtitle{
	position:absolute;
	top:5vh;
	left:6vw;
	height:16vh;
	width: 40vw;

}
.hssd{
	position:absolute;
	top:-5vh;
	left:0.5vw;
	height:105vh;
	width: 98vw;
}
.fsbj {
    position: absolute;
    top: 50vh;
    right: 0vw;
    height: 30vh;
    width: 29vw;
    z-index: 999;
    transition: right 1.5s ease; 
}

.yjh {
    position: absolute;
    top: 51vh;
    right: 1vw;
    height: 35vh;
    width: 24vw;
    z-index: 1000;
    transition: right 1.5s ease; 
}
.tpl {
    position: absolute;
    top: 20vh;
    left: 20vw;
    height: 60vh;
    width: 130vw;
    transition: left 1.5s ease; 
}

.tpl:hover {
    left: -32vw;
}

.sjsl {
    position: absolute;
    top: 69vh;
    left: -3vw;
    width: 20vw;
    z-index: 999;
    color: black;
    font-size: 40px;
    font-family: "HWMC";
    transition: opacity 1.5s ease;
    opacity: 1;
}


.tpl:hover + .sjsl {
    opacity: 0; 
}

.tpl:hover + .fsbj {
    right: -2vw; 
}

.tpl:hover + .yjh {
    right: -2vw; 
}

</style>