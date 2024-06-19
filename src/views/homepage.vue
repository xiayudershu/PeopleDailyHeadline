<template>
   <div class="homepage" style="overflow:hidden">
<!--     <div class="hometitle">
		 <br />
       <div class="hometitletext">
       	时光之书
       </div>
	   <img src="../assets/main/时光之书素材/rmrb.png" alt="" width="1000px" class="timermrb"/>
	   <img src="../assets/main/时光之书素材/首栏分割线.png" alt="" width="1000px" class="timefgx"/>
     </div> -->
	 <div class="homemain">
	 	<div class="homenavigater" id="timestep1">
			<br />
		
			<img src="../assets/maintitle.png" alt="" class="timermrb" />
			
	 		<router-link to='/' class="homenavigateritem">
	 			&nbsp;首页
	 		</router-link>
			<router-link to='/home' class="navigateritem">
				&nbsp;&nbsp;
				<img src="../assets/main/时光之书素材/选中图标.png" alt="" width="50px" height="50px" class="homechoseit"/>
				时光之书
				<img src="../assets/main/指导图标.png"  @click="getguide()" class="timeguide"/>
			</router-link>
				
			<router-link to='/map' class="homenavigateritem" >
				&nbsp;&nbsp;外交地图
			</router-link>
			<router-link to='/dot' class="homenavigateritem" >
				&nbsp;&nbsp;历史火花&nbsp;
			</router-link>
	 	</div>
		
		 <el-container>
		      <el-aside class="homecontainside" style="overflow-y: scroll; scrollbar-width: none;" id="timestep2">
				  <div class="homecontainsidebig" >

				<img src="../assets/main/时光之书素材/实线.png" alt="" class="timesx"/>
				<img src="../assets/main/时光之书素材/虚线.png" alt="" class="timexx"/>
				<img src="../assets/main/时光之书素材/时间线图标.png" class="timezb" width="60px" id="zb1" @click="gettotop()"/>
				  
				<div class="hometemp"></div>
					<div class="hometemptop"></div>
			
				<div class="homecontaintext" id="text1"  ref="text1" >
				
					<div class="homecontaintexttitle"  >
						1946-1949<br/>
						国民政府时期
						
					</div>
					<br />
					
					<div class="homecontaintextinfo">
						1946-1949年间，在中共正确领导与苏联共产国际支持下，中国人民经过艰苦奋斗取得解放战争胜利，推翻蒋领导的国民政府。人民解放军英勇争歼敌、积极开展土地改革和民主运动。人民翻身解放，真正成为国家的主人。</div>
				</div>
		
				
				<div class="homecontaintext" id="text2"  ref="text2">
					<div class="homecontaintexttitle" id="timebuild">
						1949.10<br/>
						中华人民共和国成立
					</div>
					<br />
					<div class="homecontaintextinfo">
						1949年10月，中华人民共和国成立，毛主席宣告人民实现当家作主，中华民族进入社会主义发展的新纪元。新中国政府制定共同纲领，人民政协积极发挥作用保障人民民主。苏联等国家向新中国致电贺，我国开始建立广泛的邦交关系。	</div>
				
				</div> 
				
				<div class="homecontaintext" id="text3"  ref="text3">
					<div class="homecontaintexttitle">
						1950-1956<br/>
						社会主义过渡时期
					</div>
					<br />
					<div class="homecontaintextinfo">
						1950-1956年间，我国进入社会主义过渡时期。“一五计划”实施，土地改革、三大改造完成，工业落后面貌改善，生产资料实现私有制向公有制转变。根本政治制度确立，政权基础夯实。和平解放西藏、抗美援朝大胜，国家安全保障。</div>
				</div> 
				
				<div class="homecontaintext" id="text4"  ref="text4">
					<div class="homecontaintexttitle">
						1956-1966<br/>
						社会主义建设时期（十年探索）
					</div>
					<br />
					<div class="homecontaintextinfo">
						1956-1966年间，我国进入社会主义十年探索阶段。中共八大后我国在“多快好省”总路线指导下，实行大跃进政策，推进合作社等，导致我国国民经济发生严重困难。政府提出八字方针及时调整，国民经济得以恢复发展。</div>
				</div> 
				
				<div class="homecontaintext" id="text5"  ref="text5">
					<div class="homecontaintexttitle">
						1966-1976<br/>
						文化大革命时期
					</div>
					<br />
					<div class="homecontaintextinfo">
						1966-1976年间，我国发生文化大革命。长期阶级斗争经验与盲目照搬的固化思想使得党内专断、个人崇拜现象滋长，派性斗争激化，我党陷入“左”倾错误。党中央及时纠正，粉碎反动势力，保卫国家主权，严厉打击了颠覆活动。</div>
				
				</div>
				<div class="homecontaintext" id="text6"  ref="text6">
					<div class="homecontaintexttitle">
						1976-1978<br/>
						社会主义建设徘徊时期
					</div>
					<br />
					<div class="homecontaintextinfo">
						1976-1978年间，我国进入社会主义建设徘徊时期。国家领导人拨乱反正，彻底粉碎“四人帮”，推动我国政治经济建设回归正轨。国际上，加强与第三世界国家的合作，倡导不结盟运动，支持武装斗争反霸，国际政治经济新秩序建立。</div>
				
				</div>
				<div class="homecontaintext" id="text7"  ref="text7">
					<div class="homecontaintexttitle">
						1978-1982<br/>
						改革开放
					</div>
					<br />
					<div class="homecontaintextinfo">
					1978-1982年间，我国开启改革开放。邓小平开展真理标准的大讨论，提出解放思想、实事求是方针，工作重心实现向经济建设转移。农村实行家庭联产承包责任制，社会主义市场经济体制确立。我国正式开启中国特色社会主义道路。</div>
				
				</div>
				<div class="homecontaintext" id="text8"  ref="text8">
					<div class="homecontaintexttitle">
						1982-1989<br/>
						开创中国特色社会主义
					</div>
					<br />
					<div class="homecontaintextinfo">
					1982-1989年间，中国特色社会主义开创初期。以邓小平理论为指导思想，中国推进改革开放，积极开展国际合作。经济上，加强对外贸易；政治上，强调党的建设；体育上，中国队勇夺金牌，展现日益强大的大国形象。</div> 
				</div>
				<div class="homecontaintext" id="text9"  ref="text9">
					<div class="homecontaintexttitle">
						1989-2002<br/>
						中国特色社会主义推向21世纪
					</div>
					<br />
					<div class="homecontaintextinfo">
						1989-2002年间，中国特色社会主义迈向了21世纪。以江泽民“三个代表”重要思想为指导思想，中国继续深化改革。实行股份制改革，扩大市场经济，实施扶贫政策，加强科教兴国。香港、澳门回归是中国统一进程的重要里程碑。</div>
				</div>
				<div class="homecontaintext" id="text10"  ref="text10">
					<div class="homecontaintexttitle">
						2002-2012<br/>
						新的历史起点坚持和发展中国特色社会主义
					</div>
					<br />
					<div class="homecontaintextinfo">
						2002-2012年间，在新的历史起点坚持和发展中国特色社会主义。以科学发展观为指导思想，中国经济持续发展，实施全方位服务型发展战略。坚持以人为本，关注民生，推进城乡统筹、全面小康建设。2008年成功举办北京奥运会。</div>
				
				</div>
				<div class="homecontaintext" id="text11"  ref="text11">
					<div class="homecontaintexttitle">
						2012至今<br/>
						中国特色社会主义进入新时代
					</div>
					<br />
					<div class="homecontaintextinfo">
						2012-2022年间，中国特色社会主义进入了新时代。在习思想指导下，中国坚持创新驱动转型升级，脱贫攻坚、乡村振兴等取得显著成效。同时不断推进自我革命、从严治党。国际上，中国积极推进一带一路建设，讲好中国故事。</div>
				</div>
				<br /><br /><br />
				<br /><br /><br />
				<br /><br /><br />
		

			


		
				</div>
				
			  </el-aside>
		      <el-main class="homecontainmain" style="overflow:hidden">
				  <word1 v-if="showWord == 'text1'"/>
				  <word2 v-if="showWord == 'text2'" />
				  <word3 v-if="showWord == 'text3'" />
				  <word4 v-if="showWord == 'text4'" />
				  <word5 v-if="showWord == 'text5'" />
				  <word6 v-if="showWord == 'text6'" />
				  <word7 v-if="showWord == 'text7'" />
				  <word8 v-if="showWord == 'text8'" />
				  <word9 v-if="showWord == 'text9'" />
				  <word10 v-if="showWord == 'text10'" />
				  <word11 v-if="showWord == 'text11'" />
               <img src="../assets/main/时光之书素材/实线.png" class="timesx2"/>
				  
			  </el-main>
		    </el-container>
			
			
			<el-button class="chatting" @click="drawer = true" type="warning" >
				<img src="../assets/ai.png" alt="" style="width: 35px" />
			</el-button>
			
			<el-drawer v-model="drawer" size="30%" :with-header="false" >
			       <div class="chattingdetail">
					 <dialogs></dialogs>
			       </div>
			         
			</el-drawer>
		
	 </div>
	
  </div>
</template>
  
<script lang='ts' setup>
import word1 from "../components/wordcloud/word1.vue"
import word2 from "../components/wordcloud/word2.vue"
import word3 from "../components/wordcloud/word3.vue"
import word4 from "../components/wordcloud/word4.vue"
import word5 from "../components/wordcloud/word5.vue"
import word6 from "../components/wordcloud/word6.vue"
import word7 from "../components/wordcloud/word7.vue"
import word8 from "../components/wordcloud/word8.vue"
import word9 from "../components/wordcloud/word9.vue"
import word10 from "../components/wordcloud/word10.vue"
import word11 from "../components/wordcloud/word11.vue"
import dialogs from "../components/main/dialog.vue"
import { ref, onMounted } from "vue";
const drawer = ref(false)
const showWord = ref("text1");
const text1 = ref(null);
const text2 = ref(null);
const text3 = ref(null);
const text4 = ref(null);
const text5 = ref(null);
const text6 = ref(null);
const text7 = ref(null);
const text8 = ref(null);
const text9 = ref(null);
const text10 = ref(null);
const text11= ref(null);
const gettotop=()=>{
	
	showWord.value="text1";
	 const element = document.querySelector('.hometemptop');
	element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const getguide=()=>{
	const driver = new Driver({
		closeBtnText: '关闭',
		nextBtnText: '下一步',       
		prevBtnText: '上一步',  
		doneBtnText: '完成',
		opacity: 0.4, 
		showProgress: true,

	}
	);
	 
	driver.defineSteps([
	  {
	    element: '#timestep1',
	    popover: {
	      className: 'first-step-popover-class',
	      title: '导航栏',
	      description: '当前界面为时光之书，点击不同的标签进行跳转。',
	      position: 'bottom',
 
	    }
	  },
	  {
	    element: '#timestep2',
	    popover: {
	      className: 'first-step-popover-class',
	      title: '时期滑动条',
	      description: '展示不同的时期和该时期的介绍，向下滑动切换到不同时期。',
	      position: 'right',
  
	    }
	  },
	  {
	    element: '#timestep3',
	    popover: {
	      className: 'first-step-popover-class',
	      title: '词云图',
	      description: '展示该时期在《人民日报》上出现的高频独有词，点击不同的词可以查看该词详情。',
	      position: 'right',

	    }
	  },
	  {
	    element: '#timestep4',
	    popover: {
	      className: 'first-step-popover-class',
	      title: '词云图选中词',
	      description: '展示在词云图中展示的词',
	      position: 'left',
  
	    }
	  },
	  {
	    element: '#timestep5',
	    popover: {
	      className: 'first-step-popover-class',
	      title: '折线图',
	      description: '展示选中词在77年间的词频变化，鼠标放上去可以查看具体频数，红点代表当前时期。',
	      position: 'left',

		  
	    }
	  },
	  {
	    element: '#timestep6',
	    popover: {
	      className: 'first-step-popover-class',
	      title: '标题列表',
	      description: '展示选中词在选中时期，出现在《人民日报》上的部分标题。',
	      position: 'left',

	    }
	  },
	]);
	driver.start();
}
onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log(entry.target.id)
                showWord.value = entry.target.id
            }
        });
    });

    const elements = [
        text1.value,
        text2.value,
        text3.value,
        text4.value,
        text5.value,
        text6.value,
        text7.value,
        text8.value,
        text9.value,
		text10.value,
	    text11.value,
    ];

    elements.forEach((element) => {
        if (element instanceof Element) {
            observer.observe(element);
        } else {
            console.error('Invalid element:', element);
        }
    });
});
</script>
<style lang="scss">
 
div#driver-highlighted-element-stage,
div#driver-page-overlay {
    background: transparent !important;
    outline: 5000px solid rgba(0, 0, 0, .75);
}
</style>
<style scoped>
.timeguide{
	color:white;
	width:20px;
	position: absolute;
	top:3vh;
}
	 #timestep3{
		 position: absolute;
		 width: 40vw;
		 height:60vh;
		 left:30vw;
		 top:20vh;
	 }
	.chattingdetail{
		color:black;
	
	}
	.chatting{
		position: fixed;
		z-index:1000;
		border-radius: 50%;
        width: 7vh;
        height:7vh;
		font-size: 20px;
		left:55px;
		bottom:50px;

	}
.hometemp{
	height:8vh;
}
#timebuild{
	color:red;
}
#text11{
	margin-top:70vh;
	margin-left: 8vw;
}
#text10{
	margin-top:70vh;
	margin-left: 8vw;
}
#text9{
	margin-top:70vh;
	margin-left: 8vw;
}
#text8{
	margin-top:70vh;
	margin-left: 8vw;
}
#text7{
	margin-top:70vh;
	margin-left: 8vw;
}
#text6{
	margin-top:70vh;
	margin-left: 8vw;
}
#text5{
	margin-top:70vh;
	margin-left: 8vw;
}
#text4{
	margin-top:70vh;
	margin-left: 8vw;
}
#text3{
	margin-top:70vh;
	margin-left: 8vw;
}
#text2{
	margin-top:70vh;
	margin-left: 8vw;
}
#text1{
	margin-top:10vh;
	margin-left: 8vw;
}
#zb1{
	margin-top:10vh;
	margin-left:-10vw;
}
.homecontainsidebig{
	width:25vw;
	height: 200vh;
}
.homecontainside{
	width:25vw;
	height:88vh;
}
.homecontainmain{
	height:88vh;
}
.homenavigateritem:hover {
	  color: white;
}
.homecontaintext{

	text-align: left;
	width: 15vw;
}
.homecontaintextinfo{
font-size: 16px;
font-family: "JBS";
color:black;
text-decoration: none;
line-height: 1.5;
}
.homecontaintexttitle{
	font-size: 40px;
	font-family: "HWMC";
	color:black;
	text-decoration: none;
}
.homenavigateritem{
	font-size: 35px;
	font-family: "HWMC";
	color:black;
	text-decoration: none;
}
.navigateritem{
	font-size: 35px;
	font-family: "HWMC";
	color:black;
	text-decoration: none;
}
.homechoseit{
	width:30px;
	height: 30px;
	z-index: 999;

}
.homenavigater{
    width: 92vw;
    height: 9vh;
    background-image: url("../assets/main/时光之书素材/白色半透明框.png");
    background-size: cover; 
	text-align: right;
}

.homemain{
	width: 92vw;
	height: auto;
	background-image: url("../assets/main/时光之书素材/倒数第二层背景.png");
	background-size: cover; 
	margin-left: 4vw;
}
.timemore{
	margin-top: 50vh;
	
	width:10vw;
	height: 2vh;
	position: fixed;
	z-index: 999;
}
.timezb{
	width:60px;
	height: 60px;
	position: absolute;
	z-index: 999;

}
.timesx{
	margin-top:1vh;
	margin-left:12vw;
	width:5px;
	height: 85vh;
	position: absolute;
	z-index: 99;
}
.timesx2{
	top:12vh;
	right:32vw;
	width:5px;
	height: 85vh;
	position: absolute;
	z-index: 99;
}
.timexx{
	margin-top:10vh;
	margin-left:-8vw;
	width:1.5px;
	height: 75vh;
	z-index: 99;
	position: absolute;
}
.timefgx{
	width:92vw;
	height: 16.5vh;
	position: absolute;
	z-index: 999;
	left: 4.5vw;
	top:1vh;
}
.timermrb{
	width:25vw;
	height: 10vh;
	position: absolute;
	z-index: 999;
	left: 8vw;
	top:1vh;
}
.hometitletext{
	margin-right: 68vw;
	font-size: 70px;
	font-family: "HWMC";
	color:black;
}
.hometitle{
	width: 99vw;
	height: 16vh;
	background-image: url("../assets/main/时光之书素材/首栏.png");
	background-size: cover; 
}
.homepage{
	width: 99vw;
	height: auto;
	background-image: url("../assets/main/时光之书素材/最底层背景.png");
	background-size: cover; 
}

</style>
  