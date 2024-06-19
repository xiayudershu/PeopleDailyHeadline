<template>
	<div class="mainDots">
		<el-container>
		
				  <el-main class="mainDotsMain">
					  
					<div class="lishihuohua">历史火花</div><br />
					 <img src="../../assets/main/历史火花/历史火花一句话.png" id="lshhyjh"/>
				<!-- 	<img src="../../assets/main/历史火花/一键查看.png" id="yjckdo"/> -->
					
					
					<div class="gotodot" @click="gotodot">
						<img src="../../assets/main/查看详情.png" id="yjckjtdo" class="arrowdo"/>
						<img src="../../assets/main/查看详情2.png" id="yjckjtdo-hover" class="arrowdo"/>
					</div>
					
					
				  </el-main>
			      <el-aside class="mainDotsAside" style="overflow-x: hidden;">
				
			        <img src="../../assets/main/历史火花/点点图1.png" id="ddt1"/>
					<img src="../../assets/main/历史火花/点点图2.png" id="ddt2"/>
					<img src="../../assets/main/历史火花/点点图3.png" id="ddt3"/>
					<img src="../../assets/main/历史火花/点点图4.png" id="ddt4"/>
						
	
				  </el-aside>
			      
			    </el-container>
	</div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
const emit = defineEmits('selectrouter')
const router = useRouter();
const gotodot=()=>{
	router.push("/dot");
	 emit('selectrouter', 3);
}
</script>

<style>
#ddt1{
	position: absolute;
	right:20vw;
	margin-top:20vh;
	width: 7vw;
	height: auto;
	z-index:999;
}
#ddt2{
	position: absolute;
	right:15vw;
	margin-top:45vh;
	width: 8vw;
	height: auto;
	z-index:999;
}
#ddt3{
	position: absolute;
	right:30vw;
	margin-top:55vh;
	width: 7vw;
	height: auto;
	z-index:999;
}
#ddt4{
	position: absolute;
	right:6vw;
	margin-top:65vh;
	width: 6vw;
	height: auto;
	z-index:999;
}
#ddt1:hover,
#ddt2:hover,
#ddt3:hover,
#ddt4:hover {
    transform: scale(1.2); /* 将图片放大 20% */
    transition: transform 0.3s ease; /* 添加过渡效果，使放大过程平滑 */
}
#lshhyjh{
	position: absolute;
	left:12vw;
	margin-top:0vh;
	width: 25vw;
	height: auto;
	z-index:999;
}
	#yjckdo{
		margin-top: 45vh;
		margin-left:6vw;
		width: 390px;
		height: 90px;
	}
	#yjckjtdo-hover {
	  display: none;
	  position: absolute;
	  left:10vw;
	  margin-top:47vh;
	  width: 26vw;
	  height: 10vh;
	  z-index:999;
	}
	
	.gotodot:hover #yjckjtdo-hover {
	    display: block; /* 鼠标悬停时显示 */
	}
	#yjckjtdo{
		position: absolute;
		left:10vw;
		margin-top:47vh;
		width: 26vw;
		height: 10vh;
		z-index:999;
	}
	.lishihuohua{
		margin-top: 13vh;
		margin-left: 0vw;
		font-size: 75px;
		font-family: "HWMC";
		color: black;
	}
	.mainDotsMain{
		   width: 40vw;
		   height: 98vh;
		   //background-color: aqua;
	}
	.mainDotsAside{
		   width: 60vw;
		   height: 98vh;
		   //background-color: azure;
	}
   .mainDots{
	   width: 99vw;
	   height: 98vh;
	   background-image: url('../../assets/main/历史火花/背景.png');
	   background-size: cover; 
	   overflow-x: hidden;
	   
   }

</style>