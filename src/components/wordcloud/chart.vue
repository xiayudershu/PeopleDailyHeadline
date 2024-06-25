<template>
  <div class="chartall">
	<div >
		<br/>
		
		<!-- <img src="../../assets/main/时光之书素材/框框.png" alt="" width="1000px"   class="wordtext"/> -->
		<div class="wordtexttitle"  id="timestep4">
			<a :href="cloudwordurl" target="_blank" class="cloudlink">
			{{chartData.word}}
			 </a>
		</div>
	</div>
    <div ref="chartContainer" style="width: 420px; height:38vh;" class="chartmain" id="timestep5"></div>
	

  <div class="tables" style="overflow-y: scroll; scrollbar-width: none;" id="timestep6">
    <div v-for="(item, index) in chartData.description" :key="index" class="data-item">
		<a :href="chartDataUrl[index]" target="_blank" class="cloudlink">
	  <br/>
	  <span class="number">{{ index + 1 }}</span>&nbsp;
      <span class="item-data">{{ item }} </span>
	  </a>
    </div>
  </div>

	
	

  </div>
</template>

<script>
import { ref, onMounted, watchEffect } from 'vue';
import * as echarts5 from 'echarts5';

export default {
  name: 'Chart',
  props: {
    chartData: {
      type: Object,
      required: true,
	  
    }
  },

  setup(props) {
    const chartContainer = ref(null);
    const chartDataUrl=ref([]);
	const cloudwordurl=ref();
    const getcloudwordurl=(word)=>{
		cloudwordurl.value="https://baike.baidu.com/item/"+word+"?fromModule=lemma_search-box";
	}
	const wordurl=(description)=>{
    		 console.log(description)
    		 return "http://paper.people.com.cn/rmrb/html/2024-04/29/nbs.D110000renmrb_01.htm";
    }
    const getwordsurl=(description)=>{
    		 for(let i=0;i<description.length;i++){
    			 chartDataUrl.value[i]=wordurl(description[i]);
    		 }
    }
    onMounted(() => {

    const myChart = echarts5.init(chartContainer.value);
	const chartdatas=ref([])
	 for(let i=0;i< props.chartData.frequency.length;i++){

		 const color=ref("#ffffcc")
		 if(i==props.chartData.index){
		 	color.value='#a90000'	 
		 }
		 const onedata={
			 value: props.chartData.frequency[i]/1000,
			  itemStyle: {
			     color: color.value
			}
		 }
		 chartdatas.value.push(onedata)
	 }
      console.log( chartdatas.value)
	 
      // 初始化图表
      const option = {
          xAxis: {
              type: 'category',
              data: ["1946-1949", "1949.10", "1950-1956", "1956-1966", "1966-1976", "1976-1978", "1978-1982", "1982-1989", "1989-2002", "2002-2012", "2012至今"],
              show: false
          },
          yAxis: {
              type: 'value',
			    axisLabel: {
			              formatter: '{value}k' // 将值除以 1000
			          }

          },
          tooltip: {
              trigger: 'axis',
	
          },
          series: [
                  {
                      data: chartdatas.value,
                      type: 'line',
                      smooth: false,
					  color:"#ffffcc"
                      
                  }
              ]
      };

      option && myChart.setOption(option);

      // 监听 chartData 变化，更新图表
      watchEffect(() => {
		  getwordsurl(props.chartData.description);
		  getcloudwordurl(props.chartData.word);
		  const chartdatas=ref([])

		   for(let i=0;i< props.chartData.frequency.length;i++){
		  
		  	 const color=ref("#ffffcc")
		  	 if(i==props.chartData.index){
		  	 	color.value='#a90000'	 
		  	 }
		  	 const onedata={
		  		 value: props.chartData.frequency[i]/1000,
		  		  itemStyle: {
		  		     color: color.value
		  		}
		  	 }
		  	 chartdatas.value.push(onedata)
		   }
		    console.log( chartdatas.value)
		  
		  
        myChart.setOption({
          series: [
            {
              data: chartdatas.value
            }
          ]
        });
      });
    });

    return {
      chartContainer,
	  chartDataUrl,
	  cloudwordurl
    };
  }
};
</script>

<style scoped>
.cloudlink:hover{
	color:white;
}
.cloudlink{
    color:black;
	text-decoration: none; 
}
/* .wordtexttitle{
	position: absolute;
	right:9vw;
	width: 18vw;
	top: 17vh;
	font-size: 35px;
	font-family: "JBS";
	color:black;
	text-align: center;
}
 */


.wordtexttitle {
            position: absolute;
            right:8vw;
            width: 20vw;
            top: 12vh;
            margin: 20px auto;
            background: linear-gradient(0, red 2px, red 2px) no-repeat left top/0 2px,
                linear-gradient(-90deg, red 2px, red 2px) no-repeat right top/2px 0,
                linear-gradient(-180deg, red 2px, red 2px) no-repeat right bottom/0 2px,
                linear-gradient(-270deg, red 2px, red 2px) no-repeat left bottom/2px 0;
            cursor: pointer;
            line-height: 45px;
            text-align: center;
            font-weight: bold;
            transition: all 300ms;
			font-size: 32px;
			font-family: "JBS";
			color:black;
        }
        .wordtexttitle:hover {
            background-size: 100% 2px, 2px 100%, 100% 2px, 2px 100%;
        }



.wordtext{
	position: absolute;
	top: 15vh;
	right:9vw;
	width: 18vw;
	height: 9vh;


}
.chartmain {
	margin-top: 2vh;
    width: 20vh;
    height: auto;
    margin-left: 50px;

}
.tables{
	margin-top: -3vh;
	height: 38vh;
	margin-left: 5vw;
	width: 23vw;
	font-size: 20px;
	font-family: "JBS";
	color:black;
	text-align: left;
}
.number{
	font-weight:bold;
	font-size: 20px;
	font-family: "SCJS";
	color:red;
}
</style>