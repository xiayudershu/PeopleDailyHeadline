<template>
   <div class="dotpage" style="overflow:hidden">
<!--     <div class="dottitle">
		 <br />
       <div class="dottitletext">
       	历史火花
       </div>
	   <img src="../assets/dot/rmrb.png" alt="" width="1000px" class="dotrmrb"/>
	   <img src="../assets/dot/首栏分割线.png" alt="" width="1000px" class="dotfgx"/>
     </div> -->
	 <div class="dotmain">
	 	<div class="dotnavigater" id="dotstep1">
			<br />
			<img src="../assets/maintitle.png" alt="" width="1000px" class="dotrmrb"/>
	 		<router-link to='/' class="dotnavigateritem">
	 			&nbsp;首页
	 		</router-link>
			<router-link to='/home' class="dotnavigateritem">
				&nbsp;&nbsp;
				
				时光之书
			</router-link>
			<router-link to='/map' class="dotnavigateritem">
				&nbsp;&nbsp;外交地图
			</router-link>
			<router-link to='/dot' class="navigateritem">
				&nbsp;&nbsp;
				<img src="../assets/dot/选中图标.png" alt="" width="50px" height="50px" class="dotchoseit"/>
				历史火花
				<img src="../assets/main/指导图标.png"  @click="getguide()" class="dotguide"/>
			<!-- 	<el-icon @click="getguide()" class="dotguide"><InfoFilled /></el-icon> -->
				&nbsp;
			</router-link>
			
	 	</div>
		
        <div class="dotmainall">
		
		 
		  
		  <div class="dotpopover" >
		  	
		
		  <div class="maind3"   @mousemove="updateVerticalLine" >
		     <div class="d3Chart" ref="chartContainer" style="z-index: 999;" >
		  		
		  		   <svg ref="line"  id="dotstep3">
		  			   <svg ref="dots">
		  			   			   
		  			   </svg>
		  		  	<g ref="chartGroup">
		  		  	 <line class="vertical-line"></line>
		  		  	 <text class="mouse-x-text"></text>
		  			 <text class="mouse-x-text2"></text>
		  			 <text class="mouse-x-text3"></text>
		  		  	</g>
		  		
		  		   </svg>
		  
		  	  
		     </div>
		   </div>
		    </div>
		   <img src="../assets/dot/卡片.png" alt="" width="1000px" class="dotmainbody"/>
		   
		   <div class="dotlabels" id="dotstep2">
		   	
	
		   <img src="../assets/dot/黑白标签/财经.png" alt="" width="20px" class="dotnotlabel1" @click="handleClick('财经')"/>
		   <img src="../assets/dot/黑白标签/教育.png" alt="" width="20px" class="dotnotlabel2" @click="handleClick('教育')"/>
		   <img src="../assets/dot/黑白标签/科技.png" alt="" width="20px" class="dotnotlabel3" @click="handleClick('科技')"/>
		   <img src="../assets/dot/黑白标签/社会.png" alt="" width="20px" class="dotnotlabel4" @click="handleClick('社会')"/>
		   <img src="../assets/dot/黑白标签/时政.png" alt="" width="20px" class="dotnotlabel5" @click="handleClick('时政')"/>
		   <img src="../assets/dot/黑白标签/体育.png" alt="" width="20px" class="dotnotlabel6" @click="handleClick('体育')"/>
		   
		   <img src="../assets/dot/彩色标签/财经.png" alt="" width="20px" class="dotlabel1" v-if="dotlabel1 == true" @click="handleClickNot('财经')" />
		   <img src="../assets/dot/彩色标签/教育.png" alt="" width="20px" class="dotlabel2" v-if="dotlabel2 == true" @click="handleClickNot('教育')"/>
		   <img src="../assets/dot/彩色标签/科技.png" alt="" width="20px" class="dotlabel3" v-if="dotlabel3 == true" @click="handleClickNot('科技')"/>
		   <img src="../assets/dot/彩色标签/社会.png" alt="" width="20px" class="dotlabel4" v-if="dotlabel4 == true" @click="handleClickNot('社会')"/>
		   <img src="../assets/dot/彩色标签/时政.png" alt="" width="20px" class="dotlabel5" v-if="dotlabel5 == true" @click="handleClickNot('时政')"/>
		   <img src="../assets/dot/彩色标签/体育.png" alt="" width="20px" class="dotlabel6" v-if="dotlabel6 == true" @click="handleClickNot('体育')"/>
		</div>
<!-- <img src="../assets/dot/财经/1.png" alt="" width="20px" class="dotspecial1" v-if="dotlabel1 == true" id="cj1" @click="close('cj1')"/>
<img src="../assets/dot/财经/2.png" alt="" width="20px" class="dotspecial2" v-if="dotlabel1 == true" id="cj2" @click="close('cj2')"/>
<img src="../assets/dot/财经/3.png" alt="" width="20px" class="dotspecial3" v-if="dotlabel4 == true" id="cj3" @click="close('cj3')"/>
<img src="../assets/dot/财经/4.png" alt="" width="20px" class="dotspecial4" v-if="dotlabel1 == true" id="cj4" @click="close('cj4')"/>
<img src="../assets/dot/财经/5.png" alt="" width="20px" class="dotspecial5" v-if="dotlabel4 == true" id="cj5" @click="close('cj5')"/>
<img src="../assets/dot/财经/6.png" alt="" width="20px" class="dotspecial6" v-if="dotlabel4 == true" id="cj6" @click="close('cj6')"/>
<img src="../assets/dot/财经/7.png" alt="" width="20px" class="dotspecial7" v-if="dotlabel4 == true" id="cj7" @click="close('cj7')"/>
		  
<img src="../assets/dot/教育/1.png" alt="" width="20px" class="dotspecial1" v-if="dotlabel2 == true" id="jy1" @click="close('jy1')"/>
<img src="../assets/dot/教育/2.png" alt="" width="20px" class="dotspecial4" v-if="dotlabel5 == true" id="jy2" @click="close('jy2')"/>
<img src="../assets/dot/教育/3.png" alt="" width="20px" class="dotspecial3" v-if="dotlabel2 == true" id="jy3" @click="close('jy3')"/>
<img src="../assets/dot/教育/4.png" alt="" width="20px" class="dotspecial6" v-if="dotlabel5 == true" id="jy4" @click="close('jy4')"/>
		  
<img src="../assets/dot/科技/1.png" alt="" width="20px" class="dotspecial2" v-if="dotlabel3 == true" id="kj1" @click="close('kj1')"/>
<img src="../assets/dot/科技/2.png" alt="" width="20px" class="dotspecial5" v-if="dotlabel3 == true" id="kj2" @click="close('kj2')"/>
<img src="../assets/dot/科技/3.png" alt="" width="20px" class="dotspecial7" v-if="dotlabel6 == true" id="kj3" @click="close('kj3')"/>
<img src="../assets/dot/科技/4.png" alt="" width="20px" class="dotspecial8" v-if="dotlabel3 == true" id="kj4" @click="close('kj4')"/>
<img src="../assets/dot/科技/5.png" alt="" width="20px" class="dotspecial9" v-if="dotlabel6 == true" id="kj5" @click="close('kj5')"/>

		  -->
		  
		</div>
	 </div>
	
	<el-button class="chatting" @click="drawer = true" type="warning" >
		<img src="../assets/ai.png" alt="" style="width: 35px" />
	</el-button>
	
	<el-drawer v-model="drawer" size="30%" :with-header="false" >
	       <div class="chattingdetail">
			 <dialogs></dialogs>
	       </div>
	         
	</el-drawer>
	
	
  </div>
</template>
<script>
import * as d3 from 'd3';
import dialogs from "../components/main/dialog.vue"

export default {
	components: {
	  dialogs
	},
	data() {
		return {
			down: "false",
			up: "false",
			middle: "false",
			selectvalue1:"财经",
            selectvalue2:"",
			initialRadius:2,
			mousex:0,
			ifwheel:false,
			delaytime:0,
			begintime:true,
			timerId:null,
			dotlabel1:true,
			dotlabel2:false,
			dotlabel3:false,
			dotlabel4:false,
			dotlabel5:false,
			dotlabel6:false,
			keji5:true,
			drawer:false,
			specialdotlist:[
			{
			     "url":"src/assets/dot/财经/1.png",
			     "title":"掀起钢铁生产更大跃进的高潮",
			     "info":"李富春同志在全国钢铁职工高产优质竞赛强调全国一盘棋，实现钢铁生产更大跃进。",
			     "year":"1959"
			    },
			    {
			     "url":"src/assets/dot/财经/2.png",
			     "title":"把全党工作中心转移到经济建设上来",
			     "info":"1978年12月18日中共十一界三中全会后开始实施的一系列以经济为主的改革措施,后来称之为“改革开放”。",
			     "year":"1978"
			    },
			    {
			     "url":"src/assets/dot/财经/3.png",
			     "title":"计划经济还是市场经济",
			     "info":"1992年党的十四大起，我国经济体制改革的取向从计划经济逐步转变为社会主义市场经济。",
			     "year":"1992"
			    },
			    {
			     "url":"src/assets/dot/财经/4.png",
			     "title":"弘扬丝路精神大力宣传“一带一路”",
			     "info":"2015年3月28日，经国务院授权，国家发展和改革委员会、外交部、商务部联合发布了《推动共建丝绸之路经济带和21世纪海上丝绸之路的愿景与行动》",
			     "year":"2015"
			    },
			   {
			     "url":"src/assets/dot/财经/5.png",
			     "title":"全面小康是全体中国人民的小康",
			     "info":"2021年7月1日,习近平总书记在庆祝中国共产党成立100周年大会上庄严宣告,我们在中华大地上全面建成了小康社会。",
			     "year":"2021"
			    },
			  {
			     "url":"src/assets/dot/教育/1.png",
			     "title":"召开第二次全国俄文教学工作会议",
			     "info":"1953年中国教育部确定俄文教学方针和任务，强调培养师资和提高教学质量。",
			     "year":"1953"
			    },
			    {
			     "url":"src/assets/dot/教育/2.png",
			     "title":"全国高等学校扩大招生",
			     "info":"1958年全国高校招生扩大。改变统一招生制度，注重政治素养，优先录取工农干部等。",
			     "year":"1958"
			    },
			    {
			     "url":"src/assets/dot/教育/3.png",
			     "title":"学校要加强普通话和汉语拼音教学",
			     "info":"教育部要求加强普通话和汉语拼音教学，强调小学阶段为最佳时期，提高语文教学质量。",
			     "year":"1979"
			    },
			    {
			     "url":"src/assets/dot/教育/4.png",
			     "title":"高等教育自学考试制度结硕果",
			     "info":"国家社会化高等教育形式培养75万余人才，广受好评获得国际认可。",
			     "year":"1993"
			    },
			    {
			     "url":"src/assets/dot/教育/5.png",
			     "title":"全面开启建设高等教育强国新征程",
			     "info":"刘延东强调建设高等教育强国，深化改革提升人才培养质量，服务国家发展需求。",
			     "year":"2017"
			    },
			    {
			     "url":"src/assets/dot/科技/1.png",
			     "title":"我国第一颗原子弹爆炸成功",
			     "info":"1964年10月16日，我国自行制造的第一颗原子弹在西部地区爆炸成功，这是国家国防和科学技术方面取得的一次重大的突破",
			     "year":"1964"
			    },
			    {
			     "url":"src/assets/dot/科技/2.png",
			     "title":"我国第一颗人造地球卫星发射成功",
			     "info":"1970年4月24日，我国第一颗人造地球卫星“东方红一号”发射成功,《东方红》乐曲响彻寰宇。",
			     "year":"1970"
			    },
			    {
			     "url":"src/assets/dot/科技/3.png",
			     "title":"我国进行首次载人航天飞行“神舟”五号飞船发射成功",
			     "info":"2003年10月15日,“神舟五号”宇宙飞船在酒泉卫星发射中心成功发射，把中国首位航天员杨利伟送入太空，标志着中国成为世界上第三个能够独立开展载人航天活动的国家。",
			     "year":"2003"
			    },
			    {
			     "url":"src/assets/dot/科技/4.png",
			     "title":"我国第一艘航空母舰正式交付海军",
			     "info":"2012年9月25日,中国第一艘航母——辽宁舰,正式亮相于世人面前,中国也终于走出了无航母时代。",
			     "year":"2012"
			    },
			    {
			     "url":"src/assets/dot/科技/5.png",
			     "title":"屠呦呦获2015年诺贝尔生理学或医学奖",
			     "info":"2015年10月5日，中国女药学家屠呦呦获诺贝尔生理学或医学奖，这是中国科学家因在本土进行科学研究而首次获得诺贝尔科学奖。",
			     "year":"2015"
			    },
			    {
			     "url":"src/assets/dot/社会/1.png",
			     "title":"英勇斗争的察东人民",
			     "info":"察东人民英勇抗击傅匪，艰苦环境下展现顽强意志，取得反扫荡斗争胜利。",
			     "year":"1948"
			    },
			    {
			     "url":"src/assets/dot/社会/2.png",
			     "title":"西藏大批翻身农奴担任领导职务",
			     "info":"西藏翻身农奴担任领导职务，劳动人民成为基层干部，人民民主推进、社会变革加速。",
			     "year":"1964"
			    },
			    {
			     "url":"src/assets/dot/社会/3.png",
			     "title":"全国军民大力支援唐山灾区人民",
			     "info":"1976年7月28日凌晨3时42分，一场7.8级毁灭性地震袭击唐山，顷刻间，山崩地裂，房屋倒塌，人员伤亡惨重。",
			     "year":"1976"
			    },
			    {
			     "url":"src/assets/dot/社会/4.png",
			     "title":"共产党员冲在最前面（奋战在抗非典第一线）",
			     "info":"2003年2月至3月达到非典疫情高峰，共产党员冲锋在前，无畏抗非典，勇担重任，守护人民健康，展现先锋模范。",
			     "year":"2003"
			    },
			   {
			     "url":"src/assets/dot/社会/5.png",
			     "title":"四川省汶川县发生7.8级地震",
			     "info":"2008年5月12日14时28分，四川汶川发生里氏8级特大地震，地震造成69227人遇难，17923人失踪，受灾群众达1510万多人。",
			     "year":"2008"
			    },
			    {
			     "url":"src/assets/dot/社会/6.png",
			     "title":"武汉多措遏制疫情扩散",
			     "info":"2020年初，新冠疫情在武汉爆发，中国政府采取了果断的防控措施，为全球疫情防控赢得了宝贵的时间。",
			     "year":"2020"
			    },
			    {
			     "url":"src/assets/dot/时政/1.png",
			     "title":"世界进1步报刊祝贺新中国诞生共产党情报局刊物称：中国革命的胜利，影响东西方所有人民的命运。",
			     "info":"新中国诞生，共产党情报局刊物宣称中国革命胜利打击帝国主义，鼓舞殖民地人民。",
			     "year":"1949"
			    },
			    {
			     "url":"src/assets/dot/时政/2.png",
			     "title":"志愿军各兵种指挥员、战斗员热烈拥护朝鲜停战协定签订",
			     "info":"1953年7月27日，随着《朝鲜停战协定》的签字，抗美援朝战争结束，中国赢得了抗美援朝战争伟大胜利",
			     "year":"1953"
			    },
			    {
			     "url":"src/assets/dot/时政/3.png",
			     "title":"沁园春元旦·中美建交",
			     "info":"1979年1月1日，中国和美国正式建立外交关系，两国关系从此进入一个新的历史发展阶段。",
			     "year":"1979"
			    },
			    {
			     "url":"src/assets/dot/时政/4.png",
			     "title":"我国正式成为世贸组织成员",
			     "info":"2001年12月11日,中国正式加入WTO,标志着中国的产业对外开放进入了一个全新的阶段。",
			     "year":"2001"
			    },
			    {
			     "url":"src/assets/dot/时政/5.png",
			     "title":"习近平出席金砖国家领导人会晤",
			     "info":"习近平出席金砖国家领导人会晤，强调加强金砖伙伴关系、完善全球治理、深化务实合作。",
			     "year":"2019"
			    },
			    {
			     "url":"src/assets/dot/体育/1.png",
			     "title":"中华全国体育总会成立大会闭幕",
			     "info":"中华全国体育总会成立大会闭幕，中华全国体育总会正式宣告成立,通过总章程。",
			     "year":"1952"
			    },
			    {
			     "url":"src/assets/dot/体育/2.png",
			     "title":"中国乒乓球代表团离京前往日本访问",
			     "info":"中国乒乓球代表团因日本邀请进行友好访问，我国体育运动委员会主任等前往机场欢送",
			     "year":"1972"
			    },
			    {
			     "url":"src/assets/dot/体育/3.png",
			     "title":"北京喜获2008年奥运会主办权",
			     "info":"北京在2001年7月13日成功获得2008年奥运会主办权，票数达56票。",
			     "year":"2001"
			    },
			    {
			     "url":"src/assets/dot/体育/4.png",
			     "title":"第二十九届奥林匹克运动会在北京隆重开幕",
			     "info":"2008年北京奥运会开幕，各国领导人出席，圣火点燃，世界共庆。",
			     "year":"2008"
			    },
			    {
			     "url":"src/assets/dot/体育/5.png",
			     "title":"北京冬奥会点燃世界激情",
			     "info":"2022年2月4日北京冬奥会正式开幕，共筑和平友谊，点燃世界激情，共创辉煌未来。",
			     "year":"2022"
			    }
			
			
			
				
			
			]
		};
	},
	mounted() {
	
	     this.firststart();

	},
	methods: {

	getguide(){
		console.log(111)
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
	    element: '#dotstep1',
	    popover: {
	      className: 'first-step-popover-class',
	      title: '导航栏',
	      description: '当前界面为历史火花，点击不同的标签进行跳转。',
	      position: 'bottom',
 
	    }
	  },
	  {
	    element: '#dotstep2',
	    popover: {
	      className: 'first-step-popover-class',
	      title: '主题标签',
	      description: '通过选择标签展示不同的点点。点击灰色的标签表示选中该主题，点击彩色的标签表示取消选择该主题。只选择一个标签的时候只展示一个主题，选择两个标签时同时出现两个主题的对比。',
	      position: 'right',
	   
	    }
	  },
	  {
	    element: '#dotstep3',
	    popover: {
	      popoverClass: "driverjs-theme",
	      title: '点点图',
	      description: '每一个黑色点点都表示一个《人民日报》标题，点击点点可以查看具体标题。彩色泡泡代表该主题的重要事件，点击泡泡可以查看该标题的具体事件。跟随鼠标的白线展示当前年份和选择的主题。',
	      position: 'right',
	  
	   
	    }
		
	  },

	]);
	driver.start();
},






		 close(id) {
			  console.log(id)
		      const imgElement = document.getElementById(id);
		      if (imgElement) {
		        imgElement.style.display = 'none';
		      }
		},
		firststart(){
			
			this.createChart();
			const startYear = 1946;
			const endYear = 2022;
			const filePaths = [];
			const posi = "middle";
			const value = "财经";
			this.middle = "true";
			for (let year = startYear; year <= endYear; year++) {
						const filePath = `${year}_main.csv`;
						filePaths.push(filePath);
				}
			this.handleFilesChange(filePaths, posi,value)
			
			this.startTimer();
			
		},
		startTimer() {
		    this.timerId = setTimeout(() => {
		        this.ifwheel = true;
		    },this.delaytime*2);
		},
		stopTimer() {
		    clearInterval(this.timerId);
		},
		createChart() {
		  const svgWidth = 1200;
		  const svgHeight = 620;
		
		  this.svg = d3.select(this.$refs.line)
		    .attr("width", svgWidth)
		    .attr("height", svgHeight);
		
		  this.verticalLine = this.svg.select(".vertical-line")
		    .attr("y1", 40)
		    .attr("y2", svgHeight)
		    .style("stroke", "white")
		    .style("stroke-width", 1.5)
			.attr("x1", this.mousex+10).attr("x2", this.mousex+10);
		
		this.mouseXText = this.svg.select(".mouse-x-text")
		    .attr("class", "text")
		    .attr("x", 10)
		    .attr("y", 80)
		    .style("fill", "white")
		    .style("font-size", "20px")
			.text("年份: " + Math.round(1953 + (this.mousex-120) / 15)).attr("x", this.mousex-95); 
			
		this.mouseXText2 = this.svg.select(".mouse-x-text2")
		    .attr("class", "text")
		    .attr("x", 10)
		    .attr("y", 80)
		    .style("fill", "white")
		    .style("font-size", "20px")
			.text(this.selectvalue1)
			.attr("x",this.mousex +20); 
			
			
		this.mouseXText3 = this.svg.select(".mouse-x-text3")
		    .attr("class", "text")
		    .attr("x", 10)
		    .attr("y", 120)
		    .style("fill", "white")
		    .style("font-size", "20px")
			.text(this.selectvalue2).attr("x", this.mousex +20).attr("y", 600);
		},
		
		
		updateVerticalLine(event) {
	
		  let mouseX = Math.round(event.offsetX);
		  this.mousex=mouseX;
		  this.verticalLine.attr("x1", mouseX+10).attr("x2", mouseX+10);
		  this.mouseXText.text("年份: " + Math.round(1953 + (mouseX-120) / 15)).attr("x", mouseX -95);
		  this.mouseXText2.text(this.selectvalue1).attr("x", mouseX +20);
		  this.mouseXText3.text(this.selectvalue2).attr("x", mouseX +20).attr("y", 600);
	
	
		  
		},
		handleClickNot(value){

			if(this.selectvalue2==''){
				this.middle="false";
	             this.selectvalue1='';
				let map =d3.select(this.$refs.dots);
				map.selectAll("foreignObject, image").remove();
				
	 
			}
			else{
				if(value==this.selectvalue1){
					this.up="false";
					this.selectvalue1='';
				}
				if(value==this.selectvalue2){
					this.down="false";
					this.selectvalue2='';
				}
			}
			console.log(this.middle)
			console.log(this.up)
			console.log(this.down)
			console.log(this.selectvalue1)
			console.log(this.selectvalue2)
	
		    let map =d3.select(this.$refs.dots);
			let notid="[id='"+value+"']"
			map.selectAll(notid).remove();
			map.selectAll("foreignObject, image").remove();
			

			
			
			
			if(value=="财经"){
				this.dotlabel1=false;
			}
			if(value=="教育"){
				this.dotlabel2=false;
			}
			if(value=="科技"){
				this.dotlabel3=false;
			}
			if(value=="社会"){
				this.dotlabel4=false;
			}
			if(value=="时政"){
				this.dotlabel5=false;
			}
			if(value=="体育"){
				this.dotlabel6=false;
			}
		},
		handleClick(value) {

			if(value=="财经"){
				this.dotlabel1=true;
			}
			if(value=="教育"){
				this.dotlabel2=true;
			}
			if(value=="科技"){
				this.dotlabel3=true;
			}
			if(value=="社会"){
				this.dotlabel4=true;
			}
			if(value=="时政"){
				this.dotlabel5=true;
			}
			if(value=="体育"){
				this.dotlabel6=true;
			}

            this.ifwheel=false;
			clearTimeout(this.timerId);
			const startYear = 1946;
			const endYear = 2022;
			const filePaths = [];

			for (let year = startYear; year <= endYear; year++) {
					const filePath = `${year}_main.csv`;
					filePaths.push(filePath);
			}
			if(this.middle == "false"&&this.up == "false"&&this.down == "false"){
				
				this.selectvalue1=value;
				this.selectvalue2="";
				let map = d3.select(this.$refs.dots);
				map.selectAll("*").remove(); // 清空map
				const posi = "middle";
				this.middle = "true";
				this.up = "false";
				this.down = "false";
				this.handleFilesChange(filePaths, posi,value)
				this.dotlabel1=false;
				this.dotlabel2=false;
				this.dotlabel3=false;
				this.dotlabel4=false;
				this.dotlabel5=false;
				this.dotlabel6=false;
				
				if(value=="财经"){
					this.dotlabel1=true;
				}
				if(value=="教育"){
					this.dotlabel2=true;
				}
				if(value=="科技"){
					this.dotlabel3=true;
				}
				if(value=="社会"){
					this.dotlabel4=true;
				}
				if(value=="时政"){
					this.dotlabel5=true;
				}
				if(value=="体育"){
					this.dotlabel6=true;
				}
			}
			else{
				if (this.middle == "true") {
					this.selectvalue2=value;
					let map =d3.select(this.$refs.dots);
					map.selectAll("*").remove(); // 清空map	
					this.middle = "false";
					const posi1 = "up";
					this.up = "true";
					this.handleFilesChange(filePaths, posi1,this.selectvalue1)
					
					const posi2 = "down";
					this.down = "true";
					this.handleFilesChange(filePaths, posi2,this.selectvalue2)

					
					
					if(value=="财经"){
						this.dotlabel1=true;
					}
					if(value=="教育"){
						this.dotlabel2=true;
					}
					if(value=="科技"){
						this.dotlabel3=true;
					}
					if(value=="社会"){
						this.dotlabel4=true;
					}
					if(value=="时政"){
						this.dotlabel5=true;
					}
					if(value=="体育"){
						this.dotlabel6=true;
					}	
					
				}
				else if (this.up == "false") {
					this.selectvalue1=value;
					const posi = "up";
					this.up = "true";
					this.middle = "false";
					
					
					this.handleFilesChange(filePaths, posi,value)
				}
				else if (this.down == "false") {
					this.selectvalue2=value;
					console.log(111)
					const posi = "down";
					this.down = "true";
					this.middle = "false";
					this.handleFilesChange(filePaths, posi,value)
					this.startTimer();
					console.log("nowbegin"+this.delaytime)
				}
				else if (this.down == 'true' && this.up == "true") {
					this.selectvalue1=value;
					this.selectvalue2="";
					let map = d3.select(this.$refs.dots);
					map.selectAll("*").remove(); // 清空map
					const posi = "middle";
					this.middle = "true";
					this.up = "false";
					this.down = "false";
					this.handleFilesChange(filePaths, posi,value)
					this.dotlabel1=false;
					this.dotlabel2=false;
					this.dotlabel3=false;
					this.dotlabel4=false;
					this.dotlabel5=false;
					this.dotlabel6=false;
					
					if(value=="财经"){
						this.dotlabel1=true;
					}
					if(value=="教育"){
						this.dotlabel2=true;
					}
					if(value=="科技"){
						this.dotlabel3=true;
					}
					if(value=="社会"){
						this.dotlabel4=true;
					}
					if(value=="时政"){
						this.dotlabel5=true;
					}
					if(value=="体育"){
						this.dotlabel6=true;
					}
					
				}
				
			}
			
           	console.log(this.ifwheel)



		},
		async handleFilesChange(filePaths, posi,value) {
            console.log(value);
			let allFileData = [];
			let offsetX = 0;
           let specialdots=[];
			for (let filePath of filePaths) {
				try {
					const response = await fetch(`src/assets/alltitles/${value}/${filePath}`);
					const content = await response.text();

					let lines = content.split("\n");
					allFileData.push(lines);
					this.createCircles(lines, offsetX, posi,value,specialdots);
					offsetX += 15;

				} catch (error) {
					console.error(`Failed to read file: ${error}`);
				}
			}
		for(let i=0;i<specialdots.length;i++){
			let map = d3.select(this.$refs.dots);



			let width = 1200;
			let height = 10000;
			let randomX = Math.random() * width;
			let randomY = Math.random() * height;


			
			let titleWidth = 130; // 框框的宽度
			let titleHeight = 60; // 框框的高度，考虑到两段文字
			
			let titlex=specialdots[i].x
			let titley=specialdots[i].y
			if (titlex>=1100){
						  
			titlex=titlex-30
	
			}
			if (titlex<=200){
						  
			titlex=titlex+20
			
			}
			
			let image = map.append("image")
			    .attr("id","paopaoimage")
			    .attr("xlink:href", specialdots[i].url) 
			    .attr("x", randomX) 
			    .attr("y", randomY) 
			    .attr("width", 80) 
			    .attr("height", 80);
								
			    image
					.transition()
					.duration(specialdots[i].x*3-1500)
					.attr("x", specialdots[i].x-80/2)
					.attr("y", specialdots[i].y-80/2);
				
				let title=null;
			
			setTimeout(function() {
			    title = map.append("foreignObject")
			        .attr("x", titlex - titleWidth / 2)
			        .attr("y", titley - titleHeight / 2 + 75) 
			        .attr("width", titleWidth)
			        .attr("height", titleHeight)
			        .append("xhtml:div")
			        .style("width", titleWidth + "px")
			        .style("height", titleHeight + "px")
			        .style("background-color", "white") 
			        .style("border-radius", "5px") 
			        .style("overflow-wrap", "break-word")
			        .style("overflow", "hidden") 
			        .style("text-overflow", "ellipsis")
			        .style("color", "black");
			    
			    // 添加标题文本
			    title.append("div")
			        .style("font-size", "14px") // 设置标题字体大小
			        .style("text-align", "left")
			    	.style("padding", "2px") // 自动换行
					.style("font-family", "JBS")
			        .text(specialdots[i].title); 
			    
			    // 添加年份文本
			    title.append("div")
			        .style("font-size", "14px") // 设置年份字体大小
			        .style("color", "gray") 
			        .style("text-align", "right")
					.style("font-family", "JBS")
			        .style("font-weight", "bold") 
			        .text(specialdots[i].year);
			}, specialdots[i].x*3-1500);
			
			
	
			
		
			
				
		   let bigx=specialdots[i].x
		   if (bigx>=900){
			  
			   bigx=bigx-180
			   console.log(bigx)
		   }
				

		   	
	
				
				
			    
			image.on("click", function() {
	
				title.style("display", "none"); // 隐藏标题
			    d3.select(this)
			        .transition() // 添加过渡效果
			        .duration(500) // 过渡持续时间，单位毫秒
			        .attr("width", 150) // 放大图片宽度
			        .attr("height", 150) // 放大图片高度
			        .attr("x", specialdots[i].x - 150 / 2) // 调整放大后图片的位置
			        .attr("y", specialdots[i].y - 150 / 2); // 调整放大后图片的位
				
	   //          bigrect
				// .transition() // 添加过渡效果
				// .duration(500) // 过渡持续时间，单位毫秒
				// .style("display", "block");
				
				// bigrecttext
				// 	.transition() // 添加过渡效果
				// 	.duration(1000) // 过渡持续时间，单位毫秒
				// 	.style("opacity", 1); // 渐渐显示文字
				
				// back
				// .transition() // 添加过渡效果
				// .duration(500) 
				// .style("display", "block");
				
				// 添加长方形白色框框
				 let bigrect=	map.append("rect")
				 // .transition() // 添加过渡效果
				 // .duration(500) // 过渡持续时间，单位毫秒
						.attr("id",bigx)
				 		.attr("x", bigx) // 在图片右边
				 		.attr("y", specialdots[i].y - 150 / 2+2) // 与图片垂直居中
				 		.attr("width", 180) // 框框宽度
				 		.attr("height", 146) // 框框高度
				 		.style("fill", "white") // 白色填充
				 		.style("stroke", "black") // 虚线颜色
				 		.style("stroke-dasharray", "10,10") // 虚线样式
				 		.style("stroke-width", "4px") // 设置虚线粗细
				 		.style("border-radius", "10px") 
				 		.style("rx", 5) // 圆角半径
				 		.style("ry", 5)
								.style("display", "block"); // 圆角半径
				 	
				 
				 // 在框框中添加文字
				let bigrecttext= map.append("foreignObject")
					.attr("id",bigx)
				 	.attr("x", bigx ) // 文字位置偏移框框
				 	.attr("y", specialdots[i].y - 150 / 2) // 文字垂直居中
				 	.attr("width", 189) // 文字容器宽度与框框相同
				 	.attr("height", 150) // 文字容器高度与框框相同
				 	.append("xhtml:div")
				 	.style("font-size", "17px") // 设置文字大小
				 	.style("color", "black") // 设置文字颜色
				 	.style("overflow-wrap", "break-word") // 自动换行
				 	.style("padding", "10px") // 自动换行
				 	.style("text-align", "left") // 左对齐
				 	.style("opacity", 1) // 初始设置透明度为 0
					.style("font-family", "JBS")
				 	.html(specialdots[i].info); // 添加文字内容
				
				let back=map.append("image")
				    .attr("id",bigx)
				    .attr("xlink:href", "src/assets/back.png") // 图片路径
				    .attr("x", bigx + 155) // 图片放在框框右边
				    .attr("y", specialdots[i].y + 146 / 2 - 23) // 图片放在框框垂直居中
				    .attr("width", 20) // 图片宽度
				    .attr("height", 20)
					.style("display", "block");

			back.on("click", function() {
				console.log(11324)
				title
				.transition() 
				.duration(1000)
				.style("display", "block"); 
				image
				.transition() // 添加过渡效果
				.duration(500) // 过渡持续时间，单位毫秒
				.attr("width", 80) // 放大图片宽度
				.attr("height", 80) // 放大图片高度
				.attr("x", specialdots[i].x - 80 / 2) // 调整放大后图片的位置
				.attr("y", specialdots[i].y - 80 / 2); // 调整放大后图片的位
				let notid="[id='"+bigx+"']"
	            map.selectAll(notid).remove(); // 清空map	
				
				   // bigrect
				   // .transition() // 添加过渡效果
				   // .duration(500) // 过渡持续时间，单位毫秒
				   // .style("display", "none");
				   
				   // bigrecttext
				   // 	.transition() // 添加过渡效果
				   // 	.duration(200) // 过渡持续时间，单位毫秒
				   // 	.style("opacity", 0); // 渐渐显示文字
				   
				   // back
				   // .transition() // 添加过渡效果
				   // .duration(500) 
				   // .style("display", "none");
			    });
			});
			

	
				
				
		}
			
      
			
			
			
		},
		createCircles(data, offsetX, posi,value,specialdots) {
		
			let circles = [];
			
			//console.log(posi);
			for (let rowIndex = 0; rowIndex < data.length-1; rowIndex++) {
				let target=null;
				let row = data[rowIndex].split(",");
				let x = 20+ offsetX;
				let r = 2;
				
				
				if (posi == "up") {
					//console.log(posi);
					
					let y = 345 - rowIndex * 5;
					let circle = this.drawCircle(x, y, r,value,target);
					
					circle.data = { line: row };

					circle.on("click", () => {
						this.showClickedContent(circle.data.line, x, y);
					});

					circles.push(circle);
					// for(let i=0;i<this.specialdotlist.length;i++){
					// 	if(row[0]==this.specialdotlist[i].title){
					// 		let spectialinfo={
					// 			"x":x,
					// 			"y":y,
					// 			"url":this.specialdotlist[i].url,
					// 			"title":this.specialdotlist[i].title,
					// 			"info":this.specialdotlist[i].info,
					// 			"year":this.specialdotlist[i].year
								
					// 		}
					// 		specialdots.push(spectialinfo)
					// 	}
					// }
					
				}
				if (posi == "down") {
		
					let y = 360 + rowIndex * 5;
					let circle = this.drawCircle(x, y, r,value,target);
					circle.data = { line: row };

					circle.on("click", () => {
						this.showClickedContent(circle.data.line, x, y);
					});

					circles.push(circle);
					// for(let i=0;i<this.specialdotlist.length;i++){
					// 	if(row[0]==this.specialdotlist[i].title){
					// 		let spectialinfo={
					// 			"x":x,
					// 			"y":y,
					// 			"url":this.specialdotlist[i].url,
					// 			"title":this.specialdotlist[i].title,
					// 			"info":this.specialdotlist[i].info,
					// 			"year":this.specialdotlist[i].year
								
					// 		}
					// 		specialdots.push(spectialinfo)
					// 	}
					// }
				}
				if (posi == "middle") {
					//console.log(row)

					let y = data.length * 5 / 2 + 340- rowIndex * 5;
					let circle = this.drawCircle(x, y, r,value,target);
					circle.data = { line: row };

					circle.on("click", () => {
						this.showClickedContent(circle.data.line, x, y);
					});

					circles.push(circle);
					for(let i=0;i<this.specialdotlist.length;i++){
						if(row[0]==this.specialdotlist[i].title){
							let spectialinfo={
								"x":x,
								"y":y,
								"url":this.specialdotlist[i].url,
								"title":this.specialdotlist[i].title,
								"info":this.specialdotlist[i].info,
								"year":this.specialdotlist[i].year
								
							}
							specialdots.push(spectialinfo)
						}
					}


				}

				

			}
			
				


		
			
		},
		

		
		
		// handleMouseWheel(event) {
		// //console.log(this.ifwheel)
		// if(this.ifwheel){

		//   event.preventDefault();
		
		//   // Get mouse position relative to the target element (this.$refs.dots)
		//   const mouseX = event.clientX - this.$refs.dots.getBoundingClientRect().left;
		//   const mouseY = event.clientY - this.$refs.dots.getBoundingClientRect().top;
		
		//   // Determine the scale factor based on the mouse wheel direction
		//   const scaleFactor = event.deltaY < 0 ? 1.1 : 0.9;
		
		//   let map = d3.select(this.$refs.dots);
		
		//   // Update all circles' radius and positions
		//   map.selectAll("circle").each(function () {
		//     const circle = d3.select(this);
		//     const currentRadius = parseFloat(circle.attr("r"));
		//     const currentX = parseFloat(circle.attr("cx"));
		//     const currentY = parseFloat(circle.attr("cy"));
		
		//     // Calculate the distance between the circle and the mouse position
		//     const distanceX = currentX - mouseX;
		//     const distanceY = currentY - 350; // Use y=340 as the center for y-scaling
		
		//     // Calculate the new radius and adjusted x, y positions based on the scale factor
		//     const newRadius = currentRadius * scaleFactor;
		//     const newX = mouseX + distanceX * scaleFactor;
		//     const newY = 350 + distanceY * scaleFactor; // Maintain y center at y=340
		//     this.initialRadius=newRadius;
		//     circle
		//       .attr("r", newRadius)  // Update the radius
		//       .attr("cx", newX)      // Update the x-position
		//       .attr("cy", newY);     // Update the y-position
		//   });
		  
		//   }
		// },
		

		
		
		
		drawCircle(cx, cy, r,value,target) {
			
			let map = d3.select(this.$refs.dots);
			map.style("fill", "#EBA281");
			let width = 1200;
			let height = 10000;
			let randomOffsetX = Math.random() * width;
			let randomOffsetY = Math.random() * height;

			let circle = map
				.append("circle")
				.attr("class", "circle")
				.attr("id", value)
				.attr("cx", randomOffsetX)
				.attr("cy", randomOffsetY + 50)
				.attr("r", r)
				.style("fill", "black")
				.on("mouseover", function () {
					d3.select(this).transition().duration(10).attr("r", r * 4);
				})
				.on("mouseout", function () {
					d3.select(this).transition().duration(200)
					.attr("r", r);
				});

			circle
				.transition()
				.duration(cx * 5)
				.attr("cx", cx)
				.attr("cy", cy)
				.attr("r", r);
				
			if(target!=null){
				// let image = map.append("image")
				//     .attr("xlink:href", target) 
				//     .attr("x", cx - 50 / 2) 
				//     .attr("y", cy - 50 / 2) 
				//     .attr("width", 50) 
				//     .attr("height", 50);
					 
			}

				
			//console.log(cx*20)
			if(cx*20>this.delaytime){
				this.delaytime=cx*20;
			}
			return circle;
		},

		showClickedContent(content, x, y) {
			x=this.mousex;
			if (x<100){
				x=x+100;
			}
			if (x>1000){
				x=x-100;
			}
			if (y<120){
				y=y+60;
			}
			if(y>600){
				y=y-60;
			}
			let map = d3.select(this.$refs.dots);

			let rectWidth = 180;
			let rectHeight = 120;

		    // 首先，在SVG的定义部分定义一个pattern
		    map.append("defs")
		        .append("pattern")
		        .attr("id", "backgroundPattern")
		        .attr("width", "100%")
		        .attr("height", "100%")
		        .append("image")
		        .attr("xlink:href", "src/assets/dotback.png")
		        .attr("width", rectWidth)
		        .attr("height", rectHeight);
		    
		    // 然后，将定义的pattern应用到矩形上
		    let rect = map
		        .append("rect")
		        .attr("class", "highlight-rect")
		        .attr("x", x - rectWidth / 2)
		        .attr("y", y - rectHeight / 2)
		        .attr("width", rectWidth)
		        .attr("height", rectHeight)
		        .attr("rx", 10) // 指定 x 轴方向的圆角半径
		        .attr("ry", 10) // 指定 y 轴方向的圆角半径
		        .style("fill", "url(#backgroundPattern)"); // 应用pattern作为背景
		      

			let foreignObject = map
				.append("foreignObject")
				.attr("x", x - rectWidth / 2)
				.attr("y", y - rectHeight / 2)
				.attr("width", rectWidth-10)
				.attr("height", rectHeight-10);

			let div = foreignObject
				.append("xhtml:div")
				.style("font-weight", "bold")
				.style("font-family", "JBS")
				.style("font-size", "18px")
				.style("padding", "2px")
				.style("color", "black")
				.style("width", "100%")
				.style("height", "100%")
				.style("word-wrap", "break-word")
				.style("padding-top", "20px");
				
		    const firstLine = content[0];
		    const divContent = `<div>${firstLine}</div>`;
		
		    div.html(divContent);

			// 移除方框和文本
			setTimeout(() => {
				rect.remove();
				foreignObject.remove();
			}, 2000);
		}
		
		
		
	}
}
</script>

<style lang="scss">

 
div#driver-highlighted-element-stage,
div#driver-page-overlay {
    background: transparent !important;
    outline: 5000px solid rgba(0, 0, 0, .75);
}
.dotguide{
	color:white;
	width:20px;
	position: absolute;
	top:3vh;
}

	.dotlabels{
		position: absolute;
		left:7vw;
		height:80vh;
		width:10vw;
		top:15vh;
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
.dotspecial1{
	position: absolute;
	left:37.6vw;
	top:55vh;
	width:5vw;
	height:auto;
	z-index:1001;
}
.dotspecial2{
	position: absolute;
	right:37.6vw;
	top:46vh;
	width:4vw;
	height:auto;
	z-index:1001;
}
.dotspecial3{
	position: absolute;
	left:30vw;
	top:60vh;
	width:5vw;
	height:auto;
	z-index:1001;
}
.dotspecial4{
	position: absolute;
	right:25vw;
	top:30vh;
	width:5vw;
	height:auto;
	z-index:1001;
}
.dotspecial5{
	position: absolute;
	right:15vw;
	top:20vh;
	width:4vw;
	height:auto;
	z-index:1001;
}
.dotspecial6{
	position: absolute;
	right:35vw;
	top:55vh;
	width:5vw;
	height:auto;
	z-index:1001;
}
.dotspecial7{
	position: absolute;
	right:10vw;
	top:35vh;
	width:5vw;
	height:auto;
	z-index:1001;
}
.dotspecial8{
	position: absolute;
	left:30vw;
	top:25vh;
	width:6vw;
	height:auto;
	z-index:1001;
}
.dotspecial9{
	position: absolute;
	right:50vw;
	top:55vh;
	width:5vw;
	height:auto;
	z-index:1001;
}
	.dottext{
		font-size: 20px;
		text-align: center;
	}
.el-menu-vertical-demo {
  background-color: rgba(0, 0, 0, 0); /* 使用rgba表示法设置透明的黑色背景 */
}
.d3line {
  position: relative;
  z-index: 999;
}

.text {
  fill: black;
  font-size: 14px;
  font-family: Arial, sans-serif;
}
.active {
	background-color: grey;
}

a {
	text-decoration: none;
}

.cataitem {
	height: 40px;
}
.d3Chart{
	z-index:1000;
}
.maind3 {
	position: absolute;
	left:15vw;
	top: 5vh;
	height: 88vh;
	background-color: "#EBA281";
	z-index:1000;
}

.cata {
	margin-top: 20px;
	margin-left: 10px;
	width: 100px;
	text-align: center;
}
.dotmainall{
	width:92vw;
	height:88vh;
}
.dotlabel1{
	position: absolute;
	left:0.5vw;
	top:2vh;
	width:124px;
	height:82px;
	z-index:9;
	
}
.dotlabel2{
	position: absolute;
	left:1vw;
	top:14vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotlabel3{
	position: absolute;
	left:1.5vw;
	top:27vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotlabel4{
	position: absolute;
	left:1.5vw;
	top:40vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotlabel5{
	position: absolute;
	left:2vw;
	top:53vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotlabel6{
	position: absolute;
	left:2vw;
	top:66vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotnotlabel1{
	position: absolute;
	left:2vw;
	top:2vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotnotlabel2{
	position: absolute;
	left:2vw;
	top:14vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotnotlabel3{
	position: absolute;
	left:2.5vw;
	top:27vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotnotlabel4{
	position: absolute;
	left:2.5vw;
	top:40vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotnotlabel5{
	position: absolute;
	left:3vw;
	top:53vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotnotlabel6{
	position: absolute;
	left:3vw;
	top:66vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotmainbody{
	position: absolute;
	margin-top: 0vh;
	left:15vw;
    width: 82.5vw;
    height: 88vh;
    z-index:999;
}
.dotcontainsidebig{
	width:25vw;
	height: 200vh;
}
.dotcontainside{
	width:25vw;
	height:95vh;
}
.dotcontainmain{
	height:90vh;
}
.dotnavigateritem:hover {
	  color: white;
}
.dotcontaintext{

	text-align: left;
	width: 15vw;
}
.dotcontaintextinfo{
	font-size: 20px;
	font-family: "JBS";
	color:black;
	text-decoration: none;
}
.dotcontaintexttitle{
	font-size: 40px;
	font-family: "HWMC";
	color:black;
	text-decoration: none;
}
.dotnavigateritem{
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
.dotchoseit{
	width:30px;
	height: 30px;
	z-index: 999;

}
.dotnavigater{
    width: 92vw;
    height: 9vh;
    background-image: url("../assets/dot/白色半透明框.png");
    background-size: cover; 
	text-align: right;
}

.dotmain{
	width: 92vw;
	height: auto;
	background-image: url("../assets/dot/倒数第二层背景.png");
	background-size: cover; 
	margin-left: 4vw;
}
.dotmore{
	margin-top: 50vh;
	
	width:10vw;
	height: 2vh;
	position: fixed;
	z-index: 999;
}
.dotzb{
	width:60px;
	height: 60px;
	position: absolute;
	z-index: 999;

}
.dotsx{
	margin-top:1vh;
	margin-left:12vw;
	width:5px;
	height: 90vh;
	position: absolute;
	z-index: 99;
}

.dotxx{
	margin-top:10vh;
	margin-left:-8vw;
	width:1.5px;
	height: 82vh;
	z-index: 99;
	position: absolute;
}
.dotfgx{
	width:92vw;
	height: 16.5vh;
	position: absolute;
	z-index: 999;
	left: 4.5vw;
	top:1vh;
}
.dotrmrb{
	width:25vw;
	height: 10vh;
	position: absolute;
	z-index: 999;
	left: 8vw;
	top:1vh;
}
.dottitletext{
	margin-right: 68vw;
	font-size: 70px;
	font-family: "HWMC";
	color:black;
}
.dottitle{
	width: 99vw;
	height: 16vh;
	background-image: url("../assets/dot/首栏.png");
	background-size: cover; 
}
.dotpage{
	width: 99vw;
	height: auto;
	background-image: url("../assets/dot/最底层背景.png");
	background-size: cover; 
}

</style>
  