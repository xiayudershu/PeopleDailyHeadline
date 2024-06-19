<template>
   <div class="mappage" style="overflow:hidden">
<!--     <div class="maptitle">
		 <br />
       <div class="maptitletext">
			外交地图
       </div>
	   <img src="../assets/main/时光之书素材/rmrb.png" alt="" width="1000px" class="maprmrb"/>
	   <img src="../assets/map/首栏拐角线.png" alt="" width="1000px" class="mapfgx"/>
     </div> -->
	 <div class="mapmain">
	 	<div class="mapnavigater" id="mapstep1">
			<br />
			<img src="../assets/maintitle.png" alt="" width="1000px" class="maprmrb"/>
	 		<router-link to='/' class="mapnavigateritem">
	 			&nbsp;首页
	 		</router-link>
			<router-link to='/home' class="mapnavigateritem">
				&nbsp;&nbsp;
				时光之书
			</router-link>
			<router-link to='/map' class="navigateritem">
				&nbsp;&nbsp;
				<img src="../assets/map/Vector.png" alt="" width="50px" height="50px" class="mapchoseit"/>
				外交地图
			<img src="../assets/main/指导图标.png"  @click="getguide()" class="mapguide"/>
			</router-link>
	
			<router-link to='/dot' class="mapnavigateritem">
				&nbsp;&nbsp;历史火花&nbsp;
			</router-link>
	 	</div>
		
		 <el-container>
		      <el-aside class="mapcontainside" style="overflow-y: scroll; scrollbar-width: none;">
				<img src="../assets/main/时光之书素材/实线.png" alt="" class="mapsx"/>
				<img src="../assets/map/左侧方框.png" alt="" class="mapzcfk"/>
				<img src="../assets/map/左侧方框覆盖纹理.png" alt="" class="mapzcfk1"/>
			
					
				
				<div class="mapcharttitle">
					本时期提及国家top10
				</div>
				<chart class="mapchart" :countrynames="choosecontrynames" :countrydata="choosecountrydata"></chart>
				
				<div class="mapcolor">
					    <span class="maplegend">
						<div class="mapcolor1"></div>&nbsp;&nbsp;1949-1970&nbsp;&nbsp;
						<div class="mapcolor2"></div>&nbsp;&nbsp;1971-1977&nbsp;&nbsp;
						<div class="mapcolor3"></div>&nbsp;&nbsp;1978-2012.10&nbsp;&nbsp;
						<div class="mapcolor4"></div>&nbsp;&nbsp;2012.11-至今
						</span>

				</div>
				<div class="mapcircletitle">
					 {{choosecountry}}提及频数变化
				</div>
				
				<circlechart class="mapcircle" :currentCountry="choosecountry" id="mapstep3"></circlechart>
			  </el-aside>
		      <el-main class="mapcontainmain" style="overflow:hidden">
				 <mapchart :mapData="selectedData" :yeardata="yeardata" @choosecuntry="handelcountry" @cuntryevent="handelevent" id="mapstep4"></mapchart>
				 
				 
				 <div id="mapstep5" class="mapchoosecentry">
				 <img src="../assets/map/虚线.png" alt="" class="mapxx"/>
				 <img src="../assets/map/未选中时间线.png" class="mapzb1" width="50px"   @click="gettime(1)"/>
				 <img src="../assets/map/未选中时间线.png" class="mapzb2" width="50px"   @click="gettime(2)"/>
				 <img src="../assets/map/未选中时间线.png" class="mapzb3" width="50px"   @click="gettime(3)"/>
				 <img src="../assets/map/未选中时间线.png" class="mapzb4" width="50px"   @click="gettime(4)"/>
				 <img src="../assets/map/选中版时间线.png" class="mapzb1" width="50px"  v-if="choosetime==1"/>
				 <img src="../assets/map/选中版时间线.png" class="mapzb2" width="50px"  v-if="choosetime==2"/>
				 <img src="../assets/map/选中版时间线.png" class="mapzb3" width="50px"  v-if="choosetime==3"/>
				 <img src="../assets/map/选中版时间线.png" class="mapzb4" width="50px"  v-if="choosetime==4"/>
				  </div>
				  
				  
				  
				 <div id="mapstep6">
				 	
				
				 <div class="maptime">
					 {{choosetimetitle}}&nbsp;
					 <img src="../assets/map/角标左.png" alt="" class="mapjbz"/>
					  {{choosetimeinfo}}
				     <img src="../assets/map/角标右.png" alt="" class="mapjby"/>
					 <br/> <br/>
					  <img src="../assets/map/国家名称.png" alt="" class="mapgjmc"/>
					  <div class="mapcountry">
					  {{choosecountry}}
					  </div>
					  <div class="mapcountryinfo">
					  {{choosecountryinfo}}
					  </div>
					  
				 </div>
				  </div>
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
import { ref, onMounted } from "vue";
import chart from "../components/map/chart.vue"
import circlechart from "../components/map/circle.vue"
import mapchart from "../components/map/map.vue"
import dialogs from "../components/main/dialog.vue"
const drawer = ref(false)
const choosetime=ref(1)
const choosetimetitle=ref("1949-1970")
const choosetimeinfo=ref("初登外交舞台")
const choosecountry=ref("美国")
const choosecountryinfo=ref("美国助蒋，四十万人上书请愿促杜鲁门立撤驻华美军，战后经济恐慌。")
const selectedData=ref()
const yeardata=ref()
const choosecontrynames=ref()
const choosecountrydata=ref()

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
	    element: '#mapstep1',
	    popover: {
	      className: 'first-step-popover-class',
	      title: '导航栏',
	      description: '当前界面为外交地图，点击不同的标签进行跳转。',
	      position: 'bottom',
 
	    }
	  },
	  {
	    element: '#mapchartmain',
	    popover: {
	      className: 'first-step-popover-class',
	      title: '本时期提及国家top10',
	      description: '展示在选中时期中，在《人民日报》上被提到次数最多的前10个国家。',
	      position: 'right',
  
	    }
	  },
	  {
	    element: '#mapstep3',
	    popover: {
	      className: 'first-step-popover-class',
	      title: '国家提及频数变化',
	      description: '展示地图上选中的国家，在不同时期的提及频数变化。',
	      position: 'right',

	    }
	  },
	  {
	    element: '#mapstep4',
	    popover: {
	      className: 'first-step-popover-class',
	      title: '外交地图',
	      description: '展示选中时期被《人民日报》提及的国家，点击国家展示其对应信息。滑动鼠标可以对地图实现放大缩小，按住鼠标左键拖动地图。',
	      position: 'left',
  
	    }
	  },
	  {
	    element: '#mapstep5',
	    popover: {
	      className: 'first-step-popover-class',
	      title: '时间线',
	      description: '点击不同的时间按钮，展示该时期的信息。',
	      position: 'left',

		  
	    }
	  },
	  {
	    element: '#mapstep6',
	    popover: {
	      className: 'first-step-popover-class',
	      title: '外交信息',
	      description: '展示选中的外交时期，以及选中国家在该时期具体发生的外交事件。',
	      position: 'left',
	  
	  		  
	    }
	  },

	]);

	driver.start();
	
}














onMounted(() => {
   gettime(1)
});
const handelevent=(event)=>{
	choosecountryinfo.value=event
}
const handelcountry=(country)=>{
	choosecountry.value=country
}
const gettime=(item)=>{
	choosecontrynames.value=[]
	choosecountrydata.value=[]
	choosetime.value=item
	if(item==1){
		yeardata.value="1949-1970"
		selectedData.value=allyeardata.value[1949]
		choosetimetitle.value=yeardata.value
		choosetimeinfo.value="初登外交舞台"
		
	}
	if(item==2){
		yeardata.value="1971-1977"
		selectedData.value=allyeardata.value[1971]
		choosetimetitle.value=yeardata.value
		choosetimeinfo.value="外交舞台拓展"
	}
	if(item==3){
		yeardata.value="1978-2012.10"
		selectedData.value=allyeardata.value[1979]
		choosetimetitle.value=yeardata.value
		choosetimeinfo.value="全方位外交"
	}
	if(item==4){
		yeardata.value="2012.11-至今"
		selectedData.value=allyeardata.value[2012]
		choosetimetitle.value=yeardata.value
		choosetimeinfo.value="新时代中国特色大国外交"
	}
   selectedData.value.slice(0, 10).forEach(item => {
         choosecontrynames.value.push(item.name);
         choosecountrydata.value.push(item.value);
   });
	choosecountryinfo.value = selectedData.value.filter(item => item.name === choosecountry.value).map(item => item.event).join(', ');
	console.log(choosecountryinfo.value)

}
const allyeardata=ref({
	1949: [
	{ name: "美国", value: 22926, event: "中美关系经历从根本对立到逐步缓和的变化过程。初期，美对新中国采取不承认政策，发生直接军事对抗。中后期，中美关系在缓和基础上走向复杂化。", url: "src/assets/flags/US.svg" }
	,
	{ name: "俄罗斯", value: 16807, event: "苏联初期在中国工业、教育、文化建设等方面发挥重要支持作用，达成多项友好合作。然而，60年代初由于意识形态差异、国际形势变化中苏分裂。", url: "src/assets/flags/RU.svg" }
	,
	{ name: "越南", value: 13860, event: "中国与越南的关系密切而复杂。两国紧密合作，发展良好友谊，开展外交合作。中国在政治、经济和军事等方面均对越南提供了强有力的支持。", url: "src/assets/flags/VN.svg" }
	,
	{ name: "日本", value: 10370, event: "中国与日本的关系经历了从敌对到逐渐缓和的变化。随着时间推移，两国关系逐步改善，政治、经济、文化等方面交流与合作逐步增强。", url: "src/assets/flags/JP.svg" }
	,
	{ name: "朝鲜", value: 9746, event: "中国与朝鲜的关系密切。抗美援朝战争时期形成了紧密的军事联盟。战争结束两国在政治、经济、文化方面保持紧密联系，双方在国际事务中相互支持。", url: "src/assets/flags/KP.svg" }
	,
	{ name: "印度", value: 6071, event: "中国与印度的关系存在合作与冲突并存的复杂局面。初期，两国就和平共处五项原则达成一致。然而，由于边界问题等双方关系严重紧张，交往合作受限。", url: "src/assets/flags/IN.svg" }
	,
	{ name: "英国", value: 5317, event: "中国与英国的关系逐步缓和，走向合作共赢。建国初期，英访华赞扬我国的和平建设，随后两国在多个领域达成合作，保持友好交流、密切联系。", url: "src/assets/flags/GB.svg" }
	,
	{ name: "印度尼西亚", value: 4919, event: "中国与印尼关系初建接触并逐渐加强。1960年代初，两国关系因共同的反殖民和反帝国主义立场而加深，文化、政治领域加强，促进了友好关系发展。", url: "src/assets/flags/ID.svg" }
	,
	{ name: "老挝", value: 4176, event: "中国与老挝关系从初步接触、友好合作到共同反对外来干涉。两国正式建立外交关系后在政治、经济、文化等多个领域展开广泛交流与合作。", url: "src/assets/flags/LA.svg" }
	,
	{ name: "法国", value: 4153, event: "中法关系从初步接触到逐渐深入。尽管中法之间存在意识形态差异，两国通过巴黎和平大会等多边外交场合交流，几经波折但走向稳定发展。", url: "src/assets/flags/FR.svg" }
	,
	{ name: "古巴", value: 4125, event: "中国与古巴的关系逐渐加深。古巴为第一个与新中国建立外交关系的拉美国家。此后，两国在政治、经济和文化领域展开了广泛的交流与合作。", url: "src/assets/flags/CU.svg" }
	,
	{ name: "德国", value: 3986, event: "中德关系并非一帆风顺，双方于重大国际问题上存在分歧，但总体保持较为稳定的发展态势，通过建立和平外交政策缓解矛盾促进后期合作与发展。", url: "src/assets/flags/DE.svg" }
	,
	{ name: "阿尔巴尼亚", value: 3057, event: "中国与阿尔巴尼亚的关系密切且具有重要战略意义。两国在政治、经济、文化等领域展开了广泛的合作，国际事务相互支持以反对帝国主义、殖民主义。", url: "src/assets/flags/AL.svg" }
	,
	{ name: "柬埔寨", value: 2274, event: "中国与柬埔寨的关系逐渐加强。新中国成立之初，虽尚未建交但两国间有着友好的民间往来。在此基础上，中柬关系开始逐步升温、建立外交关系。", url: "src/assets/flags/KH.svg" }
	,
	{ name: "缅甸", value: 2193, event: "中缅始终保持友好合作。新中国成立后，缅甸成为首批承认并与中国建交的国家之一。两国始终友好交流，为地区的和平与繁荣作出了积极贡献。", url: "src/assets/flags/MM.svg" }
	,
	{ name: "波兰", value: 2120, event: "中国与波兰关系在波折中发展。两国在工业等领域交流频繁。但随着国际形势变化、波兰内部变革，两国关系波折，影响中波关系稳定。", url: "src/assets/flags/PL.svg" }
	,
	{ name: "埃及", value: 1853, event: "中埃交往逐渐加强。中埃建交后成为重要合作伙伴，共同推动亚非拉国家的独立和发展。但后期中埃关系因意识形态差异而出现波折。", url: "src/assets/flags/EG.svg" }
	,
	{ name: "巴基斯坦", value: 1839, event: "中国与巴基斯坦的关系从建立友好合作到日益紧密。中巴关系因双方共同的战略利益而保持了高度的一致性和紧密性，被誉为“全天候的朋友”。", url: "src/assets/flags/PK.svg" }
	,
	{ name: "阿尔及利亚", value: 1813, event: "中国与阿尔及利亚合作密切。1962年中阿联合声明重申民族解放的共同立场。次年中国援建的阿尔及利亚航空项目是两国合作的标志性项目。", url: "src/assets/flags/DZ.svg" }
	,
	{ name: "瑞士", value: 1680, event: "中国与瑞士初期在科技、教育、政治、经济、文化等多领域合作密切。然而，由于国际形势的变化和意识形态的差异，1970年代初中瑞关系出现冷淡。", url: "src/assets/flags/CH.svg" }
	,
	{ name: "蒙古", value: 1496, event: "中国与蒙古经济、文化合作深化，政治互信增强。中蒙双方签署了多项经济和技术合作协议，文化交流频繁，共同推动了边境地区的经济发展和民生改善。", url: "src/assets/flags/MN.svg" }
	,
	{ name: "捷克", value: 1473, event: "中捷双方在和平会议、文化展览、科技合作等方面有着密切的合作。捷克斯洛伐克支持中国抗美援朝，尊重我国主权和独立的基础，双方政治交流频繁。", url: "src/assets/flags/CZ.svg" }
	,
	{ name: "匈牙利", value: 1457, event: "中国与匈牙利教育、文化领域交流活跃。尽管受到国际形势影响与两国矛盾摩擦，中匈之间的文化交流和官方访问仍然频繁，关系相对稳定发展。", url: "src/assets/flags/HU.svg" }
	,
	{ name: "罗马尼亚", value: 1383, event: "中国与罗马尼亚关系在1950年代得到加强，共同支持社会主义阵营，并在国际事务中相互协作。此时期的双边关系为后来的长期合作奠定了基础。", url: "src/assets/flags/RO.svg" }
	,
	{ name: "尼泊尔", value: 1315, event: "中国与尼泊尔的关系从建交之初的友好合作逐步发展为政治互信和文化交流的深化。中尼关系持续稳定发展，双边合作项目增多，友谊不断加深。", url: "src/assets/flags/NP.svg" }
	,
	{ name: "泰国", value: 1252, event: "中泰关系几经波折但总体稳定。双方在亚洲及全球政治格局中立场一致、相互支持。然而，由于美及其盟友影响，两国间在某些关键问题上仍存在分歧和摩擦。", url: "src/assets/flags/TH.svg" }
	,
	{ name: "韩国", value: 1219, event: "中韩关系主要围绕政治、军事和经济展开。政治领域中国支持韩国独立自主。经济、军事领域，进行抗美援朝、积极提供各方面援助。", url: "src/assets/flags/KR.svg" }
	,
	{ name: "伊拉克", value: 1044, event: "中国与伊拉克关系初期交流并不频繁。随着中国在国际舞台上的地位逐渐提升，体现对第三世界国家的支持立场，两国交流往来加强。", url: "src/assets/flags/TQ.svg" }
	],
	
	1971:[
	{ name: "越南", value: 4812, event: "中国与越南的关系紧密复杂。中越两国加强战略合作，互为军事支持。中代表团多次访问越南支持其正义战争，进一步增进两国人民团结友谊。", url: "src/assets/flags/VN.svg" }
	,
	{ name: "朝鲜", value: 3829, event: "中国与朝鲜的关系紧密且多变。两国共同反对美国的军事干预和政治封锁，加深友好合作。中朝关系在合作基础上随国际形势不断变化。", url: "src/assets/flags/KP.svg" }
	,
	{ name: "日本", value: 3664, event: "中日关系逐渐向好。中日关系正常化后，两国之间举行了多起乒乓球赛、访问活动，尽管存在立场冲突，但总体加深了两国人民间了解交流，增进友谊。", url: "src/assets/flags/JP.svg" }
	,
	{ name: "美国", value: 2877, event: "中美关系逐步缓和。以乒乓外交为始，中美关系逐步走向正常化。后期尽管存在利益冲突，但双方在文化、体育等领域交流逐渐增多，关系进一步增进。", url: "src/assets/flags/US.svg" }
	,
	{ name: "俄罗斯", value: 2060, event: "中苏关系经历了从对立到逐步缓和的变化过程。中国揭露苏联在国际舞台上的不公正行为，但后期与苏关系逐渐缓和，冲突减少、友好交流增多。", url: "src/assets/flags/RU.svg" }
	,
	{ name: "柬埔寨", value: 1858, event: "中国与柬埔寨的关系显著加强。双方共同反对外来侵略、霸权主义。中国对柬埔寨提供了大量的经济与军事援助，文化、教育等领域进行广泛交流。", url: "src/assets/flags/KH.svg" }
	,
	{ name: "老挝", value: 1494, event: "中国与老挝战略互信增强，中国在万象设立大使馆。中老关系发展对中国在东南亚地区的外交布局具有重要意义，有助于维护该地区的和平与稳定。", url: "src/assets/flags/LA.svg" }
	,
	{ name: "阿尔巴尼亚", value: 1446, event: "中国与阿尔巴尼亚的关系合作与挑战并存。初期两国保持密切的联盟关系，中后期两国在关键问题上出现分歧，导致双边关系的波动。", url: "src/assets/flags/AL.svg" }
	,
	{ name: "罗马尼亚", value: 1194, event: "中国与罗马尼亚的同盟关系坚固并不断加强。中罗共同参与国际事务，互相支持对方在国际舞台上的立场，加强了双方的战略互信。", url: "src/assets/flags/RO.svg" }
	,
	{ name: "法国", value: 1154, event: "中国与法国的关系处于重要发展阶段，两国从最初冷淡逐步转变为较为友好的合作状态。此时期中法关系发展对中国拓展与西方国家的外交关系具有重要意义。", url: "src/assets/flags/FR.svg" }
	,
	{ name: "印度", value: 1022, event: "中国与印度的关系经历了从缓和到紧张再到逐渐改善的波折过程。中印关系实现正常化后，由于边界问题和苏联因素等影响，关系再次出现一定程度紧张。", url: "src/assets/flags/IN.svg" }
	,
	{ name: "巴基斯坦", value: 831, event: "中国与巴基斯坦的关系显著加强。中巴共同签署了具有里程碑意义的“五项原则”声明，强调了和平共处和非干涉原则，为两国关系发展奠定了坚实基础。", url: "src/assets/flags/PK.svg" }
	,
	{ name: "巴勒斯坦", value: 784, event: "中国与巴勒斯坦的关系经历重要发展。中国承认巴勒斯坦解放组织（PLO），援助支持其争取国家独立的正义斗争，两国关系逐渐改善。", url: "src/assets/flags/PS.svg" }
	,
	{ name: "英国", value: 780, event: "中国与英国的关系经历了显著的拓展和深化。英国成为第一个与中国建立大使级外交关系的欧洲国家，前首相希思访问中国标志着两国关系的正式和持续改善。", url: "src/assets/flags/GB.svg" }
	,
	{ name: "埃及", value: 657, event: "中埃关系经历显著的改善和深化。中埃正式建交后展开友好合作，政治、经济、文化等多个领域交流密切。尽管后期中埃关系出现波折，但总体稳定。", url: "src/assets/flags/EG.svg" }
	,
	{ name: "以色列", value: 609, event: "中国与以色列外交联系增多但总体关系并不乐观。中方多次谴责以色列的侵略行为，明确对中东和平的立场。中以关系在冲突与摩擦中前进。", url: "src/assets/flags/IL.svg" }
	,
	{ name: "墨西哥", value: 600, event: "中国与墨西哥的关系经历了显著的发展和拓展。两国共同反对外来干涉和帝国主义的压迫。整体而言，中墨关系稳步发展、互信增强，产出实质性的合作成果。", url: "src/assets/flags/MX.svg" }
	,
	{ name: "伊朗", value: 547, event: "中国与伊朗的交往逐渐增多，两国在政治、经济和文化等领域展开了合作，为双边关系的发展奠定基础。双方在合作交流中实现互利共赢。", url: "src/assets/flags/IR.svg" }
	,
	{ name: "阿尔及利亚", value: 538, event: "中国与阿尔及利亚的关系得到了显著加强。中国政府代表团应邀多次出席，阿尔及利亚民族解放阵线机构也多次致电中共中央表示祝贺。", url: "src/assets/flags/DZ.svg" }
	,
	{ name: "塞尔维亚", value: 537, event: "中国与塞尔维亚（当时为南斯拉夫部分）进行积极交流发展。两国领导人代表多次互相出席、互相合作，政治交流密切。", url: "src/assets/flags/RS.svg" }
	,
	{ name: "克罗地亚", value: 519, event: "中国与克罗地亚的关系在此期间不断加强发展。中克两国在政治、经济、文化等领域的交流与合作不断加强，为两国人民带来了实实在在的利益。", url: "src/assets/flags/HR.svg" }
	,
	{ name: "也门", value: 517, event: "中国与也门民主人民共和国建立了友好的外交关系。双方主要领导集团互访，中国积极为也门民主人民共和国提供了医疗等多方面援助。",url:"src/assets/flags/YE.svg" }
	,
	{ name: "秘鲁", value: 516, event: "中国与秘鲁的关系经历了显著的发展和加强。中国积极拓展外交舞台，其中秘鲁成为重要的合作伙伴，两国关系逐步升温，国际场合彼此支持。", url: "src/assets/flags/PE.svg" }
	,
	{ name: "波斯尼亚和黑塞哥维那", value: 515, event: "中国与波斯尼亚和黑塞哥维纳的关系在外交舞台拓展时期实现了从初步接触到全面建交的过程。在国际事务中，中波双方相互支持，建立深厚友谊。", url: "src/assets/flags/BA.svg" }
	,
	{ name: "斯洛文尼亚", value: 510, event: "中国与斯洛文尼亚通过文化、体育交流等非官方渠道逐渐增进了解与合作，为未来的双边关系发展奠定了基础。", url: "src/assets/flags/SI.svg" }
	,
	{ name: "黑山", value: 509, event: "中国外交舞台拓展，加强与黑山的互动。总体而言，中国与黑山关系虽不频繁，但通过文化和工业领域的交流逐渐增进了解，为未来的合作奠定了基础。", url: "src/assets/flags/ME.svg" }
	,
	{ name: "北马其顿", value: 508, event: "'南斯拉夫': 507, '马其顿': 1", url: "src/assets/flags/MK.svg" }
	,
	{ name: "加拿大", value: 507, event: "中国显著加强了与加拿大的关系。此时期尽管没有重大的政治声明，但通过系列文化、体育和政治活动，中加关系得到了稳步发展。", url: "src/assets/flags/CA.svg" }
	,
	{ name: "韩国", value: 499, event: "中国在外交舞台上积极推动与韩国的关系发展。中国通过多种方式支持韩国人民的反美救国斗争和统一祖国的努力，为推动中韩关系正常化不断努力。", url: "src/assets/flags/KR.svg" }
	,
	{ name: "泰国", value: 481, event: "中国与泰国的关系在外交舞台上得到显著拓展。中国发表声明支持泰国人民独立自主的外交政策，号召泰国人民加强团结，坚持武装斗争。", url: "src/assets/flags/TH.svg" }
	,
	{ name: "尼泊尔", value: 479, event: "中国与尼泊尔的关系显著增强，体现双方关系正常化后的频繁高层互访和多领域的合作，为未来更深层次的合作奠定了基础。", url: "src/assets/flags/NP.svg" }
	,
	{ name: "意大利", value: 478, event: "中国与意大利的外交关系持续发展。双方进行友好谈话并签署了中意贸易和支付协定，在文化和经济领域展开了广泛交流，国际舞台广泛协作。", url: "src/assets/flags/IT.svg" }
	,
	{ name: "几内亚", value: 462, event: "中国与几内亚的外交关系紧密发展。中国对几内亚提供了多方面援助，包括派遣医疗队和农业专家。几内亚政府也支持中国发展，率先建交表明态度。", url: "src/assets/flags/GN.svg" }
	,
	{ name: "澳大利亚", value: 446, event: "中国与澳大利亚的外交关系稳步发展。中澳签订贸易协定，澳大利亚对中国提供技术和教育支持，派遣专家来华协助建设，双方在国际事务中保持沟通与协作。", url: "src/assets/flags/AU.svg" }
	,
	{ name: "瑞典", value: 443, event: "中国与瑞典的外交关系逐渐深化，两国关系开启新篇章。中瑞两国在科技、经济等领域展开了合作，中国对瑞典的投资增加、文化交流加强。", url: "src/assets/flags/SE.svg" }
	,
	{ name: "智利", value: 408, event: "中国与智利的外交关系显著深化发展。智利政府多次接待中国政府代表团的访问，政治共同立场坚定，并签署多项贸易协定，推动了双边经济关系的发展。", url: "src/assets/flags/CL.svg" }
	,
	{ name: "赞比亚", value: 396, event: "中国与赞比亚的关系稳步发展。赞比亚与中国均强调维护国家主权，两国领导人互访频繁，显示了国际舞台上作为发展中国家的共同立场和相互支持。", url: "src/assets/flags/ZM.svg" }
	,
	{ name: "叙利亚", value: 383, event: "中国与叙利亚的关系随着两国在政治、经济和军事上的互动而逐渐加深。叙利亚成为支持中国在国际舞台上反对帝国主义和殖民主义活动的重要伙伴。", url: "src/assets/flags/SY.svg" }
	,
	{ name: "苏丹", value: 378, event: "中国与苏丹的关系从初步接触到逐渐加深。两国在重大政治事件中展现出团结一致的立场。中国对苏丹的经济援助和技术交流亦显著增强了双边关系。", url: "src/assets/flags/SD.svg" }
	,
	{ name: "瑞士", value: 365, event: "'瑞士': 257, '伯尔尼': 2, '苏黎世': 1, '日内瓦': 105", url: "src/assets/flags/CH.svg" }
	,
	{ name: "坦桑尼亚", value: 344, event: "中国与坦桑尼亚的关系不断加强拓展，双方政治关系日益密切。中国向坦桑尼亚提供援助，支持其自力更生发展民族工业，成为了中非友好合作的典范。", url: "src/assets/flags/TZ.svg" }
	],
	1979:[
	{ name: "美国", value: 18736, event: "中美关系经历了从建交正常化到深化合作的发展过程。以中美正式建交为起点两国关系正常化。经济、科技、教育等领域展开广泛交流，竞争与合作并存。", url: "src/assets/flags/US.svg" }
	,
	{ name: "日本", value: 13850, event: "中日关系经历系列复杂发展。中日经济日益频繁的交流奠定双方合作基础。两国高层互访频繁，加强两国的政治文化交流联系，推动经济合作发展。", url: "src/assets/flags/JP.svg" }
	,
	{ name: "俄罗斯", value: 10693, event: "中国与俄罗斯在政治、经济、文化等领域展开了广泛合作。双方高层互访频繁，保持密切协调配合，能源、科技、教育等领域合作取得显著成果。", url: "src/assets/flags/RU.svg" }
	,
	{ name: "朝鲜", value: 5379, event: "中国与朝鲜的关系经历了多个重要阶段事件。两国关系由僵化逐步走向正常，双方在政治、经济和文化等领域展开广泛合作，国际事务中保持紧密协调。", url: "src/assets/flags/KP.svg" }
	,
	{ name: "法国", value: 4961, event: "中法关系稳中求进。两国在政治、经济、科技和教育等领域的交流与合作不断深化并取得显著成果，在国际事务中双方合作共进，维护国际秩序。", url: "src/assets/flags/FR.svg" }
	,
	{ name: "英国", value: 4305, event: "中英关系在多方面稳步发展。两国以建立大使级外交关系为起点，在政治、经济等领域的交流与合作不断深化。中英双方相互支持，共同投入国际秩序建设。", url: "src/assets/flags/GB.svg" }
	,
	{ name: "伊朗", value: 4180, event: "中国与伊朗的关系经历了多个复杂的阶段。自建交以来，双方不断深化政治、经济和军事等领域的交流与合作，共同维护国际和平与安全。", url: "src/assets/flags/IR.svg" }
	,
	{ name: "韩国", value: 3899, event: "中韩关系在多方合作中稳步推进。两国自建交以来，不断加强交流与合作。在“一带一路”倡议下，中韩合作取得显著成果，共同维护国际公平正义。", url: "src/assets/flags/KR.svg" }
	,
	{ name: "泰国", value: 3847, event: "中泰关系不断深化。自建交以来，两国加强合作。以“一带一路”为契机，中泰合作取得显著成果。在国际事务中，中泰双方共同维护地区稳定与繁荣发展。", url: "src/assets/flags/TH.svg" }
	,
	{ name: "德国", value: 3709, event: "中德关系多方推进，稳步发展。自建交以来，两国合作不断深化，在基础设施建设、汽车制造和环保技术等领域取得显著成果，共同维护国际公平正义。", url: "src/assets/flags/DE.svg" }
	,
	{ name: "越南", value: 3680, event: "中越关系友好共进。两国自建交以来，以经济交流为核心。中越合作在基础设施建设、能源和农业等领域稳步推进，共同维护地区和平稳定。", url: "src/assets/flags/VN.svg" }
	,
	{ name: "印度", value: 3493, event: "中印关系经历了复杂发展阶段。两国自建交以来，共同建设亚洲友好国际秩序。中印合作在基础设施建设、能源和农业等领域取得显著成果。", url: "src/assets/flags/IN.svg" }
	,
	{ name: "伊拉克", value: 3289, event: "中伊关系经历了多个发展阶段。两国自建交以来，在稳定国际局势，促进中东地区和平稳定中相互合作，为地区局势缓和做出巨大贡献。", url: "src/assets/flags/TQ.svg" }
	,
	{ name: "南非", value: 3026, event: "中国与南非的关系从初步建交到全面合作经历了较长历程。在探讨促进非洲睦邻友好关系中两国深化合作，共同为非洲人民的发展谋福祉。", url: "src/assets/flags/ZA.svg" }
	,
	{ name: "阿富汗", value: 2654, event: "中国与阿富汗的关系发展历程曲折复杂，两国不断加强国际合作，共同商讨地区和平与稳定发展。在政治、教育等领域交流互进，共同促进国际局势稳定。", url: "src/assets/flags/AF.svg" }
	,
	{ name: "以色列", value: 2384, event: "中国与以色列的关系稳中求进，在科学技术，高精尖技术，双边贸易等领域加强合作。在国际事务中双方相互交流各方经验，力争建设和平稳定的国际秩序。", url: "src/assets/flags/IL.svg" }
	,
	{ name: "新加坡", value: 2364, event: "中国与新加坡的关系稳步发展。两国自建交以来，在双边贸易中深化合作，在前沿技术交流中加强合作，共同促进国际贸易稳定，促进两国技术发展。", url: "src/assets/flags/SG.svg" }
	,
	{ name: "巴基斯坦", value: 2303, event: "中国与巴基斯坦的关系持续加强。自建交以来，两国始终支持双方核心利益与重大关切，深化战略沟通与务实合作。双方经济合作有力提升基础设施建设水平。", url: "src/assets/flags/PK.svg" }
	,
	{ name: "波斯尼亚和黑塞哥维那", value: 2226, event: "中国与波斯尼亚和黑塞哥维纳的关系全面发展。进入21世纪，中波关系得到进一步巩固。两国在基础设施建设、农业和科教等领域的合作取得显著成果。", url: "src/assets/flags/BA.svg" }
	,
	{ name: "巴西", value: 2221, event: "'巴西': 2105, '巴西利亚': 28, '圣保罗': 57, '里约热内卢': 31", url: "src/assets/flags/BR.svg" }
	,
	{ name: "埃及", value: 2201, event: "中国与埃及的关系经历了从初步接触到全面建交的过程。两国正式建立以来，相互尊重双方合理利益诉求，不断加强合作交流，共同谋划两国人民福祉。", url: "src/assets/flags/EG.svg" }
	,
	{ name: "意大利", value: 1954, event: "中国与意大利的关系稳步发展。两国合作克服多方困难，不断促进双边贸易的增长，推动各层次、各领域的深化合作，促进国际贸易与全球化。", url: "src/assets/flags/IT.svg" }
	,
	{ name: "柬埔寨", value: 1896, event: "'柬埔寨': 1613, '金边': 283", url: "src/assets/flags/KH.svg" }
	,
	{ name: "波兰", value: 1839, event: "中国与波兰的关系不断深化。两国在投资、食品和新能源等方面的合作前景广阔。两国共同打造“一带一路”多层次、立体化的共建格局。", url: "src/assets/flags/PL.svg" }
	,
	{ name: "塞尔维亚", value: 1819, event: "中国与塞尔维亚的关系逐步发展并保持良好。两国关系高位运行，政治互信牢固，各领域的合作成果丰硕。两国为推动构建人类命运共同体作出巨大的贡献。", url: "src/assets/flags/RS.svg" }
	,
	{ name: "印度尼西亚", value: 1806, event: "中国与印度尼西亚的关系经历了由冷淡到恢复，再到不断深化的过程。双方持续深化双边关系政治、经济、人文、海上合作“四轮驱动”新格局。", url: "src/assets/flags/ID.svg" }
	],
	2012:[
	{ name: "美国", value: 3942, event: "中美关系处于合作与摩擦交织的阶段。两国在经济、文化等领域的合作不断深化，政治和安全方面的矛盾与摩擦也日益凸显，关系在竞争与合作中走向复杂。", url: "src/assets/flags/US.svg" }
	,
	{ name: "日本", value: 1980, event: "中日关系呈现从缓和到紧张的趋势变化。两国经济领域合作密切，但关于历史问题的不同观点和争议导致政治、文化等领域产生冲突与摩擦。", url: "src/assets/flags/JP.svg" }
	,
	{ name: "俄罗斯", value: 1969, event: "中俄关系展现从战略协作到务实合作的全面深化过程，在国际舞台上展现出更加紧密的伙伴关系。中俄密切合作，携手维护多边主义，共同应对全球性挑战。", url: "src/assets/flags/RU.svg" }
	,
	{ name: "法国", value: 1151, event: "中德合作关系在竞争与分歧中进一步推进。经贸、文化、教育等领域两国交流日益密切。但交流中由于产业发展等问题，两国关系存在一定的挑战与摩擦。", url: "src/assets/flags/FR.svg" }
	,
	{ name: "德国", value: 1119, event: "中法关系在新时代背景下不断深化发展。两国在政治、经济和文化领域保持了密切的合作关系，共同致力于气候变化等问题解决，广泛开展合作实现共赢。", url: "src/assets/flags/DE.svg" }
	,
	{ name: "韩国", value: 1062, event: "韩国,中韩关系在新时代中国特色外交推动下稳步发展。随着“一带一路”倡议推进，双边经贸关系巩固深化。中韩合作在贸易、科技和人文等领域取得丰硕成果。", url: "src/assets/flags/KR.svg" }
	,
	{ name: "英国", value: 950, event: "中英关系在“一带一路”倡议和“经济全球化”背景下展现出新的活力。尽管双方部分领域存在分歧，但总体致力于推动双边关系健康稳定发展。", url: "src/assets/flags/GB.svg" }
	,
	{ name: "巴基斯坦", value: 770, event: "中国与巴基斯坦的关系持续巩固和发展。中巴经济走廊建设成为双边合作的亮点，为巴基斯坦经济发展提供了重要支撑。国际政治领域立场坚定，合作稳固。", url: "src/assets/flags/PK.svg" }
	,
	{ name: "印度", value: 739, event: "中国与印度的关系经历了复杂发展。两国在边界问题上虽有摩擦，但总体上保持了良好对话和交流。经济等领域合作潜力巨大，交流不断深化。", url: "src/assets/flags/IN.svg" }
	,
	{ name: "新加坡", value: 712, event: "中国与新加坡相互支撑，友好交往不断增强。中新合作在金融、科技、教育等领域取得显著成果，第三方市场合作成果显著，为双边关系发展注入了新的活力。", url: "src/assets/flags/SG.svg" }
	,
	{ name: "泰国", value: 697, event: "中泰关系在新时代中国特色外交的推动下持续升温。“一带一路”倡议的推进，为双方经济合作提供了新的机遇，文化交流也日益密切，加强了民间友好往来。", url: "src/assets/flags/TH.svg" }
	,
	{ name: "巴西", value: 687, event: "中国与巴西的关系日益紧密。两国政治互信加强，农业、能源等经济合作密切，文化交流亦日益丰富，足球等体育项目成为两国友好交流的重要桥梁。", url: "src/assets/flags/BR.svg" }
	,
	{ name: "埃及", value: 595, event: "新时代中埃双方继续加强协调与合作，共同维护地区和平稳定。双方加强政治、经贸等合作以应对复杂多变的国际形式与时代挑战，取得显著成果。", url: "src/assets/flags/EG.svg" }
	,
	{ name: "越南", value: 561, event: "中国与越南发表联合声明，强调巩固发展中越传统友谊。通过多次高层互访、双边会议和多领域合作，深化政治互信，加强经济贸易联系。", url: "src/assets/flags/VN.svg" }
	,
	{ name: "蒙古", value: 545, event: "中国与蒙古的关系保持密切协调与配合，合作成果丰硕。双方在政治、教育、文化、旅游等领域的交流日益增多，共同维护地区和平稳定与发展繁荣。", url: "src/assets/flags/MN.svg" }
	,
	{ name: "阿富汗", value: 531, event: "中国与阿富汗的关系显著加强。“一带一路”倡议下基础建设合作加强。面对国际、地区形势变化，两国反恐、安全等领域合作持续深化，维护地区安全稳定。", url: "src/assets/flags/AF.svg" }
	,
	{ name: "印度尼西亚", value: 503, event: "中国与印度尼西亚于新兴领域合作日益深化，展现出两国关系的新活力。两国共同构建“海上丝绸之路”的合作倡议，双边合作拓展，建立全面战略伙伴关系。", url: "src/assets/flags/ID.svg" }
	,
	{ name: "叙利亚", value: 493, event: "新时代中国与叙利亚关系主要体现为我国的政治支持和人道主义援助。我国提出推进叙利亚问题政治解决进程的倡议，强调不接受武力解决叙利亚危机的立场。", url: "src/assets/flags/SY.svg" }
	]
	
})
</script>
<style lang="scss">
 
div#driver-highlighted-element-stage,
div#driver-page-overlay {
    background: transparent !important;
    outline: 5000px solid rgba(0, 0, 0, .75);
}
</style>
<style scoped>
.mapguide{
	color:white;
	width:20px;
	position: absolute;
	top:3vh;
}
	.mapchoosecentry{
		position: absolute;
		width: 60vw;
		height:10vh;
		
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
.mapcharttitle{
	margin-top: 6vh;
	left:14vw;
	width:14vw;
	height:8vh;
	position: absolute;
	z-index: 101;
	color:black;
	font-size: 20px;
	font-family: "JBS";
	
}
.mapcircletitle{
	margin-top: 41vh;
	left:8vw;
	width:25vw;
	height:8vh;
	position: absolute;
	z-index:1000;
	color:black;
	font-size: 20px;
	font-family: "JBS";
	
}
.mapcountryinfo{
	width: 43vw;
	height:5vh;
	font-size: 25px;
	text-align: center;
	font-family: "HWMC";
	color:white;
	margin-left:15vw;
	margin-top: -6vh;
	position: absolute;
	text-align: left;
}
.mapcountry{
	width: 12vw;
	margin-left:1vw;
	margin-top: 1.5vh;
	font-size: 35px;
	text-align: center;
	font-family: "JBS";
	color:white;
}
.maptime{
	margin-left:2vw;
	margin-top: 10vh;
	font-size: 40px;
	text-align: left;
	font-family: "HWMC";
	color:white;
	height:25vh;
}
.mapgjmc{
	width:14vw;
	height:8vh;
	position: absolute;
	z-index: 99;

}
.mapjby{
	width:30px;
	height:30px;
	position: absolute;
	z-index: 99;
    margin-left:-1vw;
	margin-top:3vh;
}
.mapjbz{
	width:30px;
	height:30px;
	position: absolute;
	z-index: 99;
	margin-left: -1vw;
	margin-top:-1vh;
 
}
.mapzb1{
	width:50px;
	height:50px;
	position: absolute;
	z-index: 99;
    margin-left:-28vw;
    margin-top:2vh;
}
.mapzb2{
	width:50px;
	height:50px;
	position: absolute;
	z-index: 99;
    margin-left:-10vw;
    margin-top:2vh;
}
.mapzb3{
	width:50px;
	height:50px;
	position: absolute;
	z-index: 99;
    margin-left:8vw;
    margin-top:2vh;
}
.mapzb4{
	width:50px;
	height:50px;
	position: absolute;
	z-index: 99;
    margin-left:26vw;
    margin-top:2vh;
}
.maplegend {
  display: flex;

}
.mapcolor1{
	width:10px;
	height:10px;
	background-color:#2A9D8F;
	z-index:1001;
	
}
.mapcolor2{
	width:10px;
	height:10px;
	background-color:#E9C46A;
	z-index:1001;
	
}
.mapcolor3{
	width:10px;
	height:10px;
	background-color:#F4A261;
	z-index:1001;
	
}
.mapcolor4{
	width:10px;
	height:10px;
	background-color:#E76F51;
	z-index:1001;
	
}
.mapcolor{
	width:30vw;
	z-index:1000;
	position:absolute;
	left:8vw;
	text-align:left;
	margin-top: 84vh;
	color:black;
	font-size: 13px;
}
.mapcircle{
	width:22vw;
	z-index:999;
	position:absolute;
	left:9.5vw;
	margin-top: 43vh;
	}
.mapchart{
	margin-top: 3vh;
	z-index:999;
	position:absolute;
	left:6vw;
	}
.mapcontainside{
	width:30vw;
	height:88vh;
}
.mapcontainmain{
	height:88vh;
}
.mapnavigateritem:hover {
	  color: white;
}

.mapnavigateritem{
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
.mapchoseit{
	width:30px;
	height: 30px;
	z-index: 999;

}
.mapnavigater{
    width: 92vw;
    height: 9vh;
    background-image: url("../assets/map/白色半透明首栏.png");
    background-size: cover; 
	text-align: right;
}

.mapmain{
	width: 92vw;
	height: auto;
	background-image: url("../assets/map/倒数第二层背景.png");
	background-size: cover; 
	margin-left: 4vw;
}

.mapzcfk{
	margin-top:2vh;
	left:6vw;
	width:29vw;
	height: 86vh;
	position: absolute;
	z-index: 99;
}
.mapzcfk1{
	margin-top:2vh;
	left:6vw;
	width:29vw;
	height: 86vh;
	position: absolute;
	z-index: 1003;
}
.mapxx{
	margin-left:-28vw;
	margin-top:5vh;
	width:56vw;
	height: 0.1vh;
	position: absolute;
	z-index: 99;
}

.mapsx{
	margin-top:2vh;
	left:36vw;
	width:5px;
	height: 85vh;
	position: absolute;
	z-index: 99;
}


.mapfgx{
	width:92vw;
	height: 16.5vh;
	position: absolute;
	z-index: 999;
	left: 4.5vw;
	top:1vh;
}
.maprmrb{
	width:25vw;
	height: 10vh;
	position: absolute;
	z-index: 999;
	left: 8vw;
	top:1vh;
}
.maptitletext{
	margin-left: 68vw;
	font-size: 70px;
	font-family: "HWMC";
	color:color;
}
.maptitle{
	width: 99vw;
	height: 16vh;
	background-image: url("../assets/map/首栏.png");
	background-size: cover; 
}
.mappage{
	width: 99vw;
	height: auto;
	background-image: url("../assets/map/最底层背景.png");
	background-size: cover; 
}

</style>
  