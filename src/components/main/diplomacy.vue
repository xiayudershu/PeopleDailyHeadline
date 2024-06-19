<template>
	<div class="mainDiplomacy">
		<el-container>
		
		   <el-main class="mainDiplomacyMain">
				<img src="../../assets/main/外交地图/中国地图.png" id="zgdt" ref="map"/>
				<img src="../../assets/main/外交地图/虚线.png" id="xx" v-if="dimap==true"/>
				<!-- <div @click="expandMap" class="glowing"> -->
				<div class="glowing">
					<img src="../../assets/main/外交地图/坐标点.png" id="zbd"/>
				</div>
				
		  </el-main>
		
		  <el-aside class="mainDiplomacyAside" style="overflow-x: hidden;">
				<div class="waijiaoditu">外交地图</div><br/>
				<!-- <img src="../../assets/main/外交地图/一键查看.png" id="yjckdi"/> -->
				 <img src="../../assets/main/外交地图/外交地图一句话.png" id="wjdtyjh"/>
				
				<div class="getdiplomacy" @click="gotodiplomacy">
					<img src="../../assets/main/查看详情.png" id="yjckjtdi" class="arrowdi"/>
					<img src="../../assets/main/查看详情2.png" id="yjckjtdi-hover" class="arrowdi"/>
				</div>
		  </el-aside>
		
		</el-container>
	</div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";

const dimap=ref(true);
const emit = defineEmits('selectrouter')
const router = useRouter();

const gotodiplomacy = () => {
	router.push("/map");
	emit('selectrouter', 2);
}

const expandMap = () => {
	const map = document.getElementById('zgdt');
	const initialTop = "35vh"; // 初始位置top值
	const initialLeft = "-23vw"; // 初始位置left值

	if (dimap.value) {
		map.style.animation = "shrinkMap 2s forwards"; // 使用CSS动画渐变效果
		setTimeout(() => {
			dimap.value = false;
		}, 200);
	} else {
		map.style.animation = "expandMap 2s forwards"; // 使用CSS动画渐变效果
		setTimeout(() => {
			dimap.value = true;
		}, 1800);
	}
}
</script>

<style>
#wjdtyjh{
	position: absolute;
	right:12vw;
	margin-top:0vh;
	width: 25vw;
	height: auto;
	z-index:999;
}

	@keyframes blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	
	.glowing {
		position: absolute;
		margin-top: 35vh;
		margin-left: 5vw;
		width: 2vw;
		height: 2vw;
		box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.8); /* 设置圆形的白色发光效果 */
		border-radius: 100%; /* 让发光效果呈现圆形 */
		transition: box-shadow 0.5s; /* 添加过渡效果 */
		animation: blink 4s infinite; /* 添加闪烁动画，持续时间为1秒且无限循环 */
	}
	
	.glowing:hover {
		box-shadow: 0 0 20px 10px rgba(255, 255, 255, 1); /* 鼠标悬停时增强发光效果 */
		animation: none; /* 鼠标悬停时停止闪烁动画*/
	}
	@keyframes expandMap {
		from {
			margin: 35vh -23vw;
			width: 0;
			height: 0;
		}
		to {
			margin-top: 20vh;
			margin-left: -20vw;
			width: 40vw;
			height: auto;
		}
	}
	
	@keyframes shrinkMap {
		from {
			margin: 20vh -20vw;
			width: 40vw;
			height: auto;
		}
		to {
			margin: 35vh -23vw;
			width: 0;
			height: 0;
		}
	}
	#yjckjtdi-hover {
	  display: none;
	  position: absolute;
	  right: 7vw;
	  margin-top: 47vh;
	  width: 26vw;
	  height: 10vh;
	  z-index: 999;
	}
	
	
	#yjckjtdi {
	  position: absolute;
	  right: 7vw;
	  margin-top: 47vh;
	  width: 26vw;
	  height: 10vh;
	  z-index: 999;
	}
	.getdiplomacy:hover #yjckjtdi-hover {
	    display: block; /* 鼠标悬停时显示 */
	}
	.waijiaoditu {
	  margin-top: 14vh;
	  margin-right: 7vw;
	  font-size: 75px;
	  color: white;
	  font-family: "HWMC";
	}
	
	.mainDiplomacyMain {
	  width: 60vw;
	  height: 98vh;
	}
	
	.mainDiplomacyAside {
	  width: 40vw;
	  height: 98vh;
	}
	
	#yjckdi {
	  margin-top: 45vh;
	  margin-right: 6vw;
	  width: 390px;
	  height: 90px;
	}
	
	#xx {
	  position: absolute;
	  margin-top: 28vh;
	  margin-left: -22vw;
	  width: 30vw;
	  height: auto;
	}
	
	#zbd {
	  position: absolute;
	/*  margin-top: 10vh; */
	  margin-left: -1vw;
	  width: 2vw;
	  height: auto;
	}
	
	#zgdt {
	  position: absolute;
	  margin-top: 20vh;
	  margin-left: -20vw;
	  width: 40vw;
	  height: auto;
	}
	
	.mainDiplomacy {
	  width: 99vw;
	  height: 98vh;
	  background-image: url('../../assets/main/外交地图/背景合成版.png');
	  background-size: cover;
	  overflow-x: hidden;
	}
</style>