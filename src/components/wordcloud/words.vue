<template>
  <div class="cloud-wrap"  id="timestep3">
    <div
      ref="cloudEl"
      class="cloud-box"
      id="title"
    ></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import 'echarts-wordcloud';

export default {
 props: {
 	    msg: Array,
		clickyear:Number,
 	  },
  data() {
    return {
      id1: "title",
	  usefont:'HWMC'
	};
  },
 watch: {
   msg(newValue) {
     this.drawCloud(newValue);
   },
 },
  mounted() {
    this.drawCloud(this.msg);
  },
  methods: {
	  
    drawCloud(msg) {

	  if(this.clickyear>=5){
		  this.usefont='JBS'
	  }
      var  myChart = echarts.init(document.getElementById("title"));
      var maskImage = new Image(); 
      maskImage.src = this.bgImg;
      let arr = msg;
      let list = [];

      arr.map(item => {
        let obj = {
          name: item.text, 
          value: item.size,
          clickable: true 
        }
        list.push(obj);
      })
      list.sort(function (a, b) {
        return a.value - b.value; 
      });
      let colorList = ["#999999", "#666666", "#333333", "#FF060B"];
      let length = list.length;
      
      list.map((item, index) => {
          if (index < length / 3 || index == length / 3) {
            item.color = 0;
          } else if (index < (length * 2) / 3 || index == (length * 2) / 3) {
            item.color = 1;
          } else {
            item.color = 2;
          }
      });
	  
      let option = {
        title: {
          left: "10%",
          textStyle: {
            fontSize: 10,
          },
        },
        tooltip: {
          show: true,
          confine:true,
        },
        series: [
          {
            name: "频次",
            type: "wordCloud",
            keepAspect: false,
            sizeRange: [30, 38],
            rotationRange: [0, 0],
            width: "550px", 
            height: "85%",
            drawOutOfBound: false,
            color: "#fff",
            left: "left",
            top: "center",
            right: null,
            bottom: null,
            gridSize: 10,
            autoSize: {
              enable: true,
              minSize: 6,
            },
            textStyle: {
              normal: {
                fontFamily: this.usefont,
				fontSize:10,
                fontWeight: "bold",
                color: function (params) {
				
                  return colorList[params.data.color];
                },
              },
              emphasis: {
                   shadowBlur: 10,
                        shadowColor: "#333",
                        stroke: "#333", 
                        strokeWidth: 2, 
                        focus: "self" 
              },
            },
            data: list,
          },
        ],
      };
      myChart.setOption(option,true);
      myChart.on("click", params => {
          let clickedWord = params.data.name;
          console.log(clickedWord);
          this.$emit("word-clicked", clickedWord);
		  
  
		  
        });
    },
	
	
	
	
  },
};
</script>

<style>
.cloud-wrap {
  width: 100%;
  height: 98%;
}
.cloud-box {
  margin-top: 13vh;
  margin-left:2vw;
  width: 95%;
  height: 95vh;
  text-align:left;
}
</style>
