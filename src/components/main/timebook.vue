<template>
	<div class="mainTimeBook" ref="mainTimeBookRef">
	<img src="../../assets/main/时光之书素材/江山背景.png" class="jsbj"/>
	<el-container>
	
			  <el-main class="mainTimeBookMain">
			  
				<div class="shiguangzhishu">时光之书</div><br />
			    <img src="../../assets/main/时光之书素材/时光之书一句话.png" id="sgzsyjh"/>
				<!-- <img src="../../assets/main/时光之书素材/一键查看.png" id="yjck"/> -->
			
				
				<div class="getcloud" @click="gotocloud">
					<img src="../../assets/main/查看详情.png" id="yjckjt" class="arrow"/>
					<img src="../../assets/main/查看详情2.png" id="yjckjt-hover" class="arrow"/>
					
					
				</div>
				
				
				
			  </el-main>
		      <el-aside class="mainTimeBookAside" style="overflow-x: hidden;">
				  <br /><br />
                 <pages></pages>
				<!-- 	<img src="../../assets/main/时光之书素材/完整圆盘.png" class="circle rotate-image" /> -->
			  </el-aside>
		      
		    </el-container>
			
	</div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
import pages from "../main/pages.vue"
const emit = defineEmits('selectrouter')
const router = useRouter();

const mainTimeBookRef = ref<HTMLElement>();

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 当组件进入可见区域时触发文字渐显效果
        document.querySelector('.shiguangzhishu')?.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  if (mainTimeBookRef.value) {
    observer.observe(mainTimeBookRef.value);
  }
});

const gotocloud = () => {
  router.push("/home");
  emit('selectrouter', 1);
}
</script>

<style>
.jsbj{
	position: absolute;
	left:10vw;
	margin-top:7vh;
	width: 80vw;
	height: 90vh;
	z-index:9;
}
.arrow{
	
	
}
#sgzsyjh{
	position: absolute;
	left:10vw;
	margin-top:0vh;
	width: 23vw;
	height: auto;
	z-index:999;
}
.mainTimeBook{
		width: 99vw;
		height: auto;
		background-image: url('../src/assets/main/时光之书素材/背景无字版.png');
		background-size: cover; 
		overflow-x: hidden;
}

.shiguangzhishu {
  margin-top: 15vh;
  margin-right: 20vw;
  font-size: 70px;
  font-family: "HWMC";
  color: black;
  opacity: 0;
  transition: opacity 1s;
}

.fade-in {
  opacity: 1;
}
.rotate-image {
  transition: transform 1.5s; /* 添加动画过渡效果，时长可以根据需要调整 */
}

.rotate-image:hover {
  transform: rotate(180deg); /* 鼠标悬停时旋转180度 */
}
	
.circle {
	margin-top: 1.5vh;
	margin-left: 16vw;
	width: auto;
	height: 96vh;
    z-index:996;
}

</style>