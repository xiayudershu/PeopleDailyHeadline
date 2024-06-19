<template> 
	<div class="main" style="overflow-x:hidden">


	
    <poster  v-if="witchrouter==0"></poster>
	<timebook v-if="witchrouter==1"></timebook>
	<diplomacy v-if="witchrouter==2"></diplomacy>
	<dots v-if="witchrouter==3"></dots>

<!-- 	<div class="sjsl" v-if="witchrouter==0">
        设计思路
	</div> -->
	<div class="sljs" v-if="witchrouter==0">
	    深入研究《人民日报》过去77年的报道，打造一本“时光之书”。探寻尘封的历史，更好地理解中国的历史进程、社会变迁和重大事件，一同聆听历史背后平凡又伟大的故事。
	</div>
	<div class="loading1"></div>
	<timebook @selectrouter="handleSelectRouter"></timebook>
	<div class="maintemp"></div>
	<div class="loading2"></div>
	<diplomacy @selectrouter="handleSelectRouter"></diplomacy>
	<div class="maintemp"></div>
	<dots @selectrouter="handleSelectRouter"></dots>
	
	<div class="mainEnd">
		<div class="mainEndText">

		 <a href="http://paper.people.com.cn/rmrb/html/2024-04/28/nbs.D110000renmrb_01.htm" target="_blank" class="mainEndHref">
			 <el-icon :size="30"><Link /></el-icon>数据来源：人民日报图文数据库
		 </a>
		 
		 </div>
	</div>
	<el-backtop :right="1400" :bottom="50" class="backtop"/>
	<el-button  class="chattingmain" @click="drawer = true" type="warning" >
		<img src="../assets/ai.png" alt="" style="width: 35px" />
	</el-button>
	
    <el-drawer v-model="drawer" size="30%" :with-header="false" >
           <div class="chattingdetail">
			 <dialogs></dialogs>
           </div>
             
    </el-drawer>

	
	
	</div>

</template>
<script setup lang="ts">
import poster from "../components/main/poster.vue"
import timebook from "../components/main/timebook.vue"
import diplomacy from '../components/main/diplomacy.vue'
import dots from "../components/main/dots.vue"
import dialogs from "../components/main/dialog.vue"
import { ref } from 'vue'
import { ElButton, ElDrawer } from 'element-plus'
import { CircleCloseFilled } from '@element-plus/icons-vue'
const drawer = ref(false)
const witchrouter=ref(0)
const handleSelectRouter=(item)=>{
	console.log(item);
	 window.scrollTo(0, 0); 
	witchrouter.value=item;
}
</script>

<style>
	.chattingdetail{
		color:black;
	
	}
	.chattingmain{
		position: fixed;
		z-index:1000;
		border-radius: 50%;
        width: 7vh;
        height:7vh;
		font-size: 20px;
		right:55px;
		bottom:50px;

	}

	.sljs{
		position: absolute;
		top: 82vh;
		left:2vw;
		width: 72vw;
		z-index:999;
		color:black;
		font-size:30px;
		font-family: "HWMC";
		text-align:left;
		line-height:1.8;
	}
	
	
	
	
	.loading1{
		position: absolute;
		margin-top: 83vh;
		width: 99vw;
		height: 60vh;
		background-image: url("../assets/main/首页撕纸1.png");
		z-index:999;
	}
	.loading2{
		position: absolute;
		margin-top: 83vh;
		width: 99vw;
		height: 60vh;
		background-image: url("../assets/main/首页撕纸2.png");
		z-index:999;
	}
	.maintemp{
		width: 99vw;
		height: 28vh;
	}
	.backtop:hover{
		   color:#333 ; 
		   background-color: #fff;
		   transition: color 2s;
		   transition: background-color 2s;
	}
   .backtop{
	   width: 6vh;
	   height:6vh;
	   background-color: #333; /* 灰黑色背景 */
	   color: #fff; /* 白色图标颜色 */
	   z-index:1000
   }
	
	.mainEndHref:hover {
	  color: black;
	}
	.mainEndHref{
		font-size: 25px;
		font-family: "HWMC";
		color:white;
		text-decoration: none; 
	}
	.mainEndText{
		margin-top: 23vh;
	}
	.mainEnd {
	  width: 99vw;
	  aspect-ratio: 70/ 11; 
	  background-image: url('../assets/main/尾栏/尾栏.png');
	  background-size: cover;
	  overflow-x: hidden;
	}
    .main{
		width:98vw;
	}

	
	#yjckjt-hover {
	  display: none;
	  position: absolute;
	  left:10vw;
	  margin-top:47vh;
	  width: 26vw;
	  height: 10vh;
	  z-index:999;
	}
	
	.getcloud:hover #yjckjt-hover {
	    display: block; /* 鼠标悬停时显示 */
	}
	#yjckjt{
		position: absolute;
		left:10vw;
		margin-top:47vh;
		width: 26vw;
		height: 10vh;
		z-index:998;
	}
	
	
	#yjck{
		margin-top: 45vh;
		margin-right:13vw;
		width: 390px;
		height: 90px;
		
	}
	#yjhjs{
		margin-right: 6vw;
		width: 390px;
		height: 320px;
	}
/* 	.shiguangzhishu{
		margin-top: 15vh;
		margin-right: 20vw;
		font-size: 70px;
		font-family: "HWMC";
		color:black;
		
	} */
   .mainTimeBookMain{
	   width: 50vw;
	   height: 98vh;
	   //background-color: aqua;
   }
   .mainTimeBookAside{
	   width: 50vw;
	   height: 98vh;
	   //background-color: azure;
	    z-index:996;
   }

	
	
   @keyframes moveLeft {
     from {
       transform: translateX(0) translateY(0); /* 初始位置 */
     }
     to {
       transform: translateX(-200px) translateY(100px); /* 目标位置 */
     }
   }
   
   @keyframes moveRight {
     from {
       transform: translateX(0) translateY(0); /* 初始位置 */
     }
     to {
       transform: translateX(200px) translateY(100px); /* 目标位置 */
     }
   }
   #cloudleft {
     left: -10vw;
     top: 70vh;
     z-index: 999;
   }
   
   #cloudright {
     left: 40vw;
     top: 78vh;
     z-index: 999;
   }
   
   /* 如果要等到.mainTimeLine出现时再启动动画，可以在此设置初始状态为不可见 */
   #cloudleft.move {
     animation: moveLeft 3s forwards;
   }
   
   #cloudright.move {
     animation: moveRight 3s forwards;
   }
	.poster{
		width: 99vw;
		height: 98vh;
		background-image: url('../src/assets/main/背景.png');
		background-size: cover; 
		overflow-x: hidden;
	}
	
	.mainInform{
		width: 99vw;
		height: 98vh;
		background-image: url('../assets/main/背景2.png');
		background-size: cover; 
		overflow-x: hidden;
	}

	.rightText{
		margin-left: 35vw;
		font-size: 40px;
		font-family: "HWMC";
	}
	.mainTimeLine{
		margin-top: 15vh;
		width: 98vw;
		height: 40vh;
		background-image: url('../assets/main/素材包/时间线.png');
		background-size: cover; 
	}

	.mainDot{
		position: absolute;
		width: 30px;
		height: 30px;
		background-image: url('../assets/main/素材包/坐标点.png');
		background-size: cover; 
		z-index: 99;
	}
	.timeLineImage{
		position: absolute;
		z-index: 99;
	}
	#dxp{
		left:60vw;
		top:110vh;
	}
	#ylp{
		left:49vw;
		top:55vh;
	}
	#dfhyf{
		left:50vw;
		top:38vh;
	}
	#dfh{
		left:45vw;
		top:38vh;
	}
	#yuanzidan{
		left:35vw;
		top:42vh;
	}
	
    #zhouenlai{
		left:38vw;
		top:48vh;
		
	}
	#ky{
		left:85vw;
		top:65vh;
	}
	#bdd{
		left:81vw;
		top:68vh;
	}
	#xjp{
		left:72vw;
		top:68vh;
	}
    #jzm{
		left:56vw;
		top:65vh;
	}
	#ggkf{
		left:56vw;
		top:63vh;
	}
	#hj{
		left:65vw;
		top:70vh;
	}
	#xghg{
		left:60vw;
		top:60vh;
	}
	#syt{
		left:52vw;
		top:45vh;
	}
	#dxp{
		left:20vw;
		top: -30vh;
		
	}
	#maozhuxi{
		left:22vw;
		top: 50vh;
	}
	#zhonghuarenming{
		left:18vw;
		top: 62vh;
	}
	#maozhuxiwansui{
		left:14vw;
		top:48vh;
	}
	#kangmeiyuanchao{
		left:15vw;
		top:35vh;
	}

	
	
	#mainFirstDot{
		left:28vw;
		top:50vh;
		
	}
	#mainSecondDot{
		left:48vw;
		top: 59vh;

	}
	#mainThirdDot{
		left:53vw;
		top: 70vh;

	}
	#mainForthDot{
		left:70vw;
		top: 80vh;

	}
	#mainFifthDot{
		left:88vw;
		top: 85vh;
	
	}
</style>