
<template>

 <el-container>
 
        <div ref="Map" class="GlobalMap" ></div> 
  
 </el-container>
 
  
</template>

<script>
import world from "../../assets/map/word.json";
import circlechart from "../map/circle.vue"
import * as echarts5 from "echarts5";

export default {
  components: {
    circlechart
  },
   props: {
     mapData: {
       type: Array,
       required: true
     },
	 yeardata:String,
   },
   data() {
     return {
       data: [
	{ name: "美国", value: 22926, event: "'美国': 20966, '华盛顿': 453, '洛杉矶': 38, '美利坚': 4, '中美': 318, '纽约': 531, '美苏': 434, '英美': 180, '老美': 2", url: "src/assets/flags/US.svg" }
	,
	{ name: "俄罗斯", value: 16807, event: "'俄罗斯': 130, '莫斯科': 1812, '中俄': 3, '俄罗斯联邦': 37, '美苏': 434, '苏维埃社会主义共和国联盟': 12, '苏联': 12311, '中苏': 2026, '俄国': 42", url: "src/assets/flags/RU.svg" }
	,
	{ name: "越南", value: 13860, event: "'越南': 8242, '河内': 861, '中越': 543, '越南共和国': 4, '南越': 3725, '西贡': 485", url: "src/assets/flags/VN.svg" }
	,
	{ name: "日本", value: 10370, event: "'日本': 8067, '东京': 896, '美日': 714, '中日': 693", url: "src/assets/flags/JP.svg" }
	,
	{ name: "朝鲜", value: 9746, event: "'朝鲜': 8027, '平壤': 832, '中朝': 796, '北朝鲜': 91", url: "src/assets/flags/KP.svg" }
	,
	{ name: "印度", value: 6071, event: "'印度': 5049, '新德里': 170, '孟买': 91, '婆罗多': 2, '班加罗尔': 6, '加尔各答': 115, '中印': 638", url: "src/assets/flags/IN.svg" }
	,
	{ name: "英国", value: 5317, event: "'英国': 2988, '伦敦': 539, '英法': 1610, '英美': 180", url: "src/assets/flags/GB.svg" }
	,
	{ name: "印度尼西亚", value: 4919, event: "'印度尼西亚': 3457, '雅加达': 572, '巴厘岛': 7, '印尼': 883", url: "src/assets/flags/ID.svg" }
	,
	{ name: "老挝", value: 4176, event: "'老挝': 3821, '万象': 355", url: "src/assets/flags/LA.svg" }
	,
	{ name: "法国", value: 4153, event: "'法国': 2542, '巴黎': 747, '中法': 57, '法兰西共和国': 2, '英法': 805", url: "src/assets/flags/FR.svg" }
	,
	{ name: "古巴", value: 4125, event: "'古巴': 3781, '哈瓦那': 344", url: "src/assets/flags/CU.svg" }
	,
	{ name: "德国", value: 3986, event: "'德国': 1779, '柏林': 810, '中德': 176, '德意志民主共和国': 517, '民主德国': 681, '东柏林': 4, '东德': 19", url: "src/assets/flags/DE.svg" }
	,
	{ name: "阿尔巴尼亚", value: 3057, event: "'阿尔巴尼亚': 2658, '地拉那': 399", url: "src/assets/flags/AL.svg" }
	,
	{ name: "柬埔寨", value: 2274, event: "'柬埔寨': 2073, '金边': 201", url: "src/assets/flags/KH.svg" }
	,
	{ name: "缅甸", value: 2193, event: "'缅甸': 1686, '中缅': 507", url: "src/assets/flags/MM.svg" }
	,
	{ name: "波兰", value: 2120, event: "'波兰': 1721, '华沙': 399", url: "src/assets/flags/PL.svg" }
	,
	{ name: "埃及", value: 1853, event: "'埃及': 1463, '开罗': 390", url: "src/assets/flags/EG.svg" }
	,
	{ name: "巴基斯坦", value: 1839, event: "'巴基斯坦': 1624, '伊斯兰堡': 2, '中巴': 204, '巴基斯坦伊斯兰共和国': 9", url: "src/assets/flags/PK.svg" }
	,
	{ name: "阿尔及利亚", value: 1813, event: "'阿尔及利亚': 1659, '阿尔及尔': 144, '安纳巴': 2, '君士坦丁': 8", url: "src/assets/flags/DZ.svg" }
	,
	{ name: "瑞士", value: 1680, event: "'瑞士': 241, '伯尔尼': 4, '苏黎世': 29, '日内瓦': 1406", url: "src/assets/flags/CH.svg" }
	,
	{ name: "蒙古", value: 1496, event: "'蒙古': 1278, '乌兰巴托': 196, '蒙古国': 22", url: "src/assets/flags/MN.svg" }
	,
	{ name: "捷克", value: 1473, event: "'捷克': 648, '布拉格': 254, '布尔诺': 6, '捷克斯洛伐克': 565", url: "src/assets/flags/CZ.svg" }
	,
	{ name: "匈牙利", value: 1457, event: "'匈牙利': 1268, '布达佩斯': 189", url: "src/assets/flags/HU.svg" }
	,
	{ name: "罗马尼亚", value: 1383, event: "'罗马尼亚': 1244, '布加勒斯特': 139", url: "src/assets/flags/RO.svg" }
	,
	{ name: "尼泊尔", value: 1315, event: "'尼泊尔': 968, '加德满都': 85, '中尼': 262", url: "src/assets/flags/NP.svg" }
	,
	{ name: "泰国", value: 1252, event: "'泰国': 1154, '曼谷': 93, '中泰': 5", url: "src/assets/flags/TH.svg" }
	,
	{ name: "韩国", value: 1219, event: "'韩国': 8, '南朝鲜': 1008, '南韩': 6, '中韩': 1, '日韩': 196", url: "src/assets/flags/KR.svg" }
	,
	{ name: "伊拉克", value: 1044, event: "'伊拉克': 848, '巴格达': 195, '巴士拉': 1", url: "src/assets/flags/TQ.svg" }
	],
	   currentEvent: '',
       country:'',
	   flagurl:'',
     };
   },
  mounted() {
    this.Global();
    this.setDefaultData();//没有初始数据？？

  },
  watch: {
      mapData(newVal) {
        this.data = newVal;
        this.Global();
      }
    },
  methods: {   
    setDefaultData() {
    // 设置默认数据的逻辑，可以根据您的需求进行修改
    const defaultData = this.data[0]; // 假设您的数据数组不为空
    if (defaultData) {
      this.currentEvent = defaultData.event;
      this.country = defaultData.name;
      this.flagurl = defaultData.url;
    }  
  },
  handleMapClick(params) {
	  console.log(params.name)
	  
      const searchData = this.data.filter(item => item.name == params.name);
      if (searchData.length > 0) {
        this.currentEvent = searchData[0].event;
        this.country = searchData[0].name;
        this.flagurl = searchData[0].url;
		this.$emit("choosecuntry", params.name);
		this.$emit("cuntryevent", this.currentEvent);
		this.$emit("choosecountryflag", this.flagurl);
    }
  },
    
    Global() {
      var mycontractMap = echarts5.init(this.$refs.Map);

      this.$echarts5.registerMap("world", world);

      let nameMap = {
        Afghanistan: "阿富汗",
        Singapore: "新加坡",
        Angola: "安哥拉",
        Albania: "阿尔巴尼亚",
        "United Arab Emirates": "阿联酋",
        Argentina: "阿根廷",
        Armenia: "亚美尼亚",
        "French Southern and Antarctic Lands": "法属南半球和南极领地",
        Australia: "澳大利亚",
        Austria: "奥地利",
        Azerbaijan: "阿塞拜疆",
        Burundi: "布隆迪",
        Belgium: "比利时",
        Benin: "贝宁",
        "Burkina Faso": "布基纳法索",
        Bangladesh: "孟加拉国",
        Bulgaria: "保加利亚",
        "The Bahamas": "巴哈马",
        "Bosnia and Herzegovina": "波斯尼亚和黑塞哥维那",
        Belarus: "白俄罗斯",
        Belize: "伯利兹",
        Bermuda: "百慕大",
        Bolivia: "玻利维亚",
        Brazil: "巴西",
        Brunei: "文莱",
        Bhutan: "不丹",
        Botswana: "博茨瓦纳",
        "Central African Republic": "中非共和国",
        Canada: "加拿大",
        Switzerland: "瑞士",
        Chile: "智利",
        China: "中国",
        "Ivory Coast": "象牙海岸",
        Cameroon: "喀麦隆",
        "Dem. Rep. Congo": "刚果民主共和国",
        "Republic of the Congo": "刚果共和国",
        Colombia: "哥伦比亚",
        "Costa Rica": "哥斯达黎加",
        Cuba: "古巴",
        "Northern Cyprus": "北塞浦路斯",
        Cyprus: "塞浦路斯",
        "Czech Republic": "捷克共和国",
        Germany: "德国",
        Djibouti: "吉布提",
        Denmark: "丹麦",
        "Dominican Republic": "多明尼加共和国",
        Algeria: "阿尔及利亚",
        Ecuador: "厄瓜多尔",
        Egypt: "埃及",
        Eritrea: "厄立特里亚",
        Spain: "西班牙",
        Estonia: "爱沙尼亚",
        Ethiopia: "埃塞俄比亚",
        Finland: "芬兰",
        Fiji: "斐济",
        "Falkland Islands": "福克兰群岛",
        France: "法国",
        Gabon: "加蓬",
        "United Kingdom": "英国",
        Georgia: "格鲁吉亚",
        Ghana: "加纳",
        Guinea: "几内亚",
        Gambia: "冈比亚",
        "Guinea Bissau": "几内亚比绍",
        Greece: "希腊",
        Greenland: "格陵兰",
        Guatemala: "危地马拉",
        "French Guiana": "法属圭亚那",
        Guyana: "圭亚那",
        Honduras: "洪都拉斯",
        Croatia: "克罗地亚",
        Haiti: "海地",
        Hungary: "匈牙利",
        Indonesia: "印度尼西亚",
        India: "印度",
        Ireland: "爱尔兰",
        Iran: "伊朗",
        Iraq: "伊拉克",
        Iceland: "冰岛",
        Israel: "以色列",
        Italy: "意大利",
        Jamaica: "牙买加",
        Jordan: "约旦",
        Japan: "日本",
        Kazakhstan: "哈萨克斯坦",
        Kenya: "肯尼亚",
        Kyrgyzstan: "吉尔吉斯斯坦",
        Cambodia: "柬埔寨",
        Kosovo: "科索沃",
        Kuwait: "科威特",
        Laos: "老挝",
        Lebanon: "黎巴嫩",
        Liberia: "利比里亚",
        Libya: "利比亚",
        "Sri Lanka": "斯里兰卡",
        Lesotho: "莱索托",
        Lithuania: "立陶宛",
        Luxembourg: "卢森堡",
        Latvia: "拉脱维亚",
        Morocco: "摩洛哥",
        Moldova: "摩尔多瓦",
        Madagascar: "马达加斯加",
        Mexico: "墨西哥",
        Macedonia: "马其顿",
        Mali: "马里",
        Myanmar: "缅甸",
        Montenegro: "黑山",
        Mongolia: "蒙古",
        Mozambique: "莫桑比克",
        Mauritania: "毛里塔尼亚",
        Malawi: "马拉维",
        Malaysia: "马来西亚",
        Namibia: "纳米比亚",
        "New Caledonia": "新喀里多尼亚",
        Niger: "尼日尔",
        Nigeria: "尼日利亚",
        Nicaragua: "尼加拉瓜",
        Netherlands: "荷兰",
        Norway: "挪威",
        Nepal: "尼泊尔",
        "New Zealand": "新西兰",
        Oman: "阿曼",
        Pakistan: "巴基斯坦",
        Panama: "巴拿马",
        Peru: "秘鲁",
        Philippines: "菲律宾",
        "Papua New Guinea": "巴布亚新几内亚",
        Poland: "波兰",
        "Puerto Rico": "波多黎各",
        "North Korea": "北朝鲜",
        Portugal: "葡萄牙",
        Paraguay: "巴拉圭",
        Qatar: "卡塔尔",
        Romania: "罗马尼亚",
      "the Russia Federation": "俄罗斯",
        Rwanda: "卢旺达",
        "Western Sahara": "西撒哈拉",
        "Saudi Arabia": "沙特阿拉伯",
        "Sudan": "苏丹",
        "S. Sudan": "南苏丹",
        Senegal: "塞内加尔",
        "Solomon Islands": "所罗门群岛",
        "Sierra Leone": "塞拉利昂",
        "El Salvador": "萨尔瓦多",
        Somaliland: "索马里兰",
        Somalia: "索马里",
        "Republic of Serbia": "塞尔维亚",
        Suriname: "苏里南",
        Slovakia: "斯洛伐克",
        Slovenia: "斯洛文尼亚",
        Sweden: "瑞典",
        Swaziland: "斯威士兰",
        Syria: "叙利亚",
        Chad: "乍得",
        Togo: "多哥",
        Thailand: "泰国",
        Tajikistan: "塔吉克斯坦",
        Turkmenistan: "土库曼斯坦",
        "East Timor": "东帝汶",
        "Trinidad and Tobago": "特里尼达和多巴哥",
        Tunisia: "突尼斯",
        Turkey: "土耳其",
        "United Republic of Tanzania": "坦桑尼亚",
        Uganda: "乌干达",
        Ukraine: "乌克兰",
        Uruguay: "乌拉圭",
        "the United States": "美国",
        Uzbekistan: "乌兹别克斯坦",
        Venezuela: "委内瑞拉",
        Vietnam: "越南",
        Vanuatu: "瓦努阿图",
        "West Bank": "西岸",
        Yemen: "也门",
        "South Africa": "南非",
        Zambia: "赞比亚",
        Korea: "韩国",
        Tanzania: "坦桑尼亚",
        Zimbabwe: "津巴布韦",
        Congo: "刚果",
        "Central African Rep.": "中非",
        Serbia: "塞尔维亚",
        "Bosnia and Herz.": "波黑",
        "Czech Rep.": "捷克",
        "W. Sahara": "西撒哈拉",
        "Lao PDR": "老挝",
        "Dem. Rep. Korea": "朝鲜",
        "Falkland Is.": "福克兰群岛",
        "Timor-Leste": "东帝汶",
        "Solomon Is.": "所罗门群岛",
        Palestine: "巴勒斯坦",
        "N. Cyprus": "北塞浦路斯",
        Aland: "奥兰群岛",
        "Fr. S. Antarctic Lands": "法属南半球和南极陆地",
        Mauritius: "毛里求斯",
        Comoros: "科摩罗",
        "Eq. Guinea": "赤道几内亚",
        "Guinea-Bissau": "几内亚比绍",
        "Dominican Rep.": "多米尼加",
        "Saint Lucia": "圣卢西亚",
        Dominica: "多米尼克",
        "Antigua and Barb.": "安提瓜和巴布达",
        "U.S. Virgin Is.": "美国原始岛屿",
        Montserrat: "蒙塞拉特",
        Grenada: "格林纳达",
        Barbados: "巴巴多斯",
        Samoa: "萨摩亚",
        Bahamas: "巴哈马",
        "Cayman Is.": "开曼群岛",
        "Faeroe Is.": "法罗群岛",
        "IsIe of Man": "马恩岛",
        Malta: "马耳他共和国",
        Jersey: "泽西",
        "Cape Verde": "佛得角共和国",
        "Turks and Caicos Is.": "特克斯和凯科斯群岛",
        "St. Vin. and Gren.": "圣文森特和格林纳丁斯",
        "Côte d'Ivoire":"科特迪瓦",
        "S. Geo. and S. Sandw. Is.": "南乔治亚岛和南桑威奇群岛",
        "São Tomé and Principe":"圣多美和普林西比",
        "Niue":"纽埃",
        "Fr. Polynesia":"法属波利尼西亚",
       "Tonga":"汤加",
       "Heard l. and McDonald ls.":"赫德岛和麦克唐纳群岛",
       "American Samoa":"美属萨摩亚",
       "Curaçao":"库拉索",
	          "Saint Helena":"圣赫勒拿",
	          "Seychelles":"塞舌尔",
	          "Br.Indian Ocean Ter.":"英属印度洋领地",
	          "Heard l.and McDonald ls.":"赫德岛和麦克唐纳群岛",
	          "Kiribati":"基里巴斯",
	          "Palau":"帕劳",
	          "N.Mariana ls.":"北马里亚纳群岛",
	          "Guam":"关岛",
	          "Micronesia":"密克罗尼西亚",
	          "Kiribati":"基里巴斯",
	          "Isle of Man":"马恩岛"
      };
 
      let option = {
        // 鼠标悬浮提示框
        tooltip: {
          trigger: "item",
          borderColor: "#666", //区域边框颜色
		    textStyle: {
		      fontSize: 20, // 设置字体大小
		    },
          formatter: function (params) {
            if (params.name) {
              return (
				  params.name +
				  ' : ' + '被提及'+
				  (isNaN(params.value) ? 0 : parseInt(params.value)) + '次'
              );  
            }
          },
        },

        visualMap: {
          min: 0, //最小值
          max: 1000, //最大值
          orient: "horizontal", //图例排列方向
          left: 26,
          bottom: 20,
          showLabel: true, //显示图例文本
          precision: 0, //数据展示无小数点
          itemWidth: 12, //图例宽度
          itemHeight: 12, //图例高度
          textGap: 10, //图例间距
          inverse: false, //数据反向展示
          hoverLink: true, //鼠标悬浮
          inRange: {
            //选中图例后背景半透明
            color: ["rgba(102, 112, 224, 0.25)"],
            symbol: "rect", //更改图元样式
          },
          pieces: [
            {
              gt: 15001,
              label: ">15000",
              color: "#631216",
            },
            {
              gte: 8001,
              lte: 15000,
              label: "8001-15000",
              color: "#8f1d22",
            },
            {
              gte: 5001,
              lte: 8000,
              label: "5001-8000",
              color: "#a81e32",
            },
            {
              gte: 3001,
              lte: 5000,
              label: "3001-5000",
              color: "#d12920",
            },
            {
              gte: 2001,
              lte: 3000,
              label: "2001-3000",
              color: "#e94829",
            },
            {
              gte: 1001,
              lte: 2000,
              label: "1001-2000",
              color: "#e77671",
            },
            {
              gte: 501,
              lte: 1000,
              label: "501-1000",
              color: "#f4abac",
            },
            {
              gte: 0,
              lte: 500,
              label: "<500",
              color: "#f4cccc",
            },
          ],
          textStyle: {
            color: "black",
            fontSize: 14, //图元字体大小
            fontWeight: 500,
          },
        },

        series: [
          {
            type: "map",
            mapType: "world",
            zoom: 1.2, //地图大小
            roam: true, //禁止拖拽
            itemStyle: {
              normal: {
				areaColor: '#C1C1C1',
                borderWidth: 0.6, //边框宽度
                textStyle: {
                  color: "#fff", //默认文字颜色
                },
                borderColor: "#fff", //地图边框颜色
              },
              emphasis: {
                borderColor: '#A31212', //地图边框颜色
                areaColor: null, // 设置地图点击后的颜色
              },
            },
            select: {
              //地图选中颜色
              itemStyle: {
                borderColor: '#A31212', //地图边框颜色
                color: null, // 设置地图点击后的颜色
              },
            },
            label: {
              normal: {
                //静态的时候展示样式
                show: false, //是否显示地图名称
                textStyle: {
                  color: "#fff", //颜色
                  fontSize: 14, //文字大小
                  fontFamily: "Arial",
                },
              },
              emphasis: {
                //动态展示的样式
                color: "#fff",
              },
            },
            data: this.data,
            nameMap: nameMap,
       
          },
        ],
      };
      mycontractMap.setOption(option);
      window.addEventListener("resize", function () {
        mycontractMap.resize();
	
      });
	mycontractMap.on('click', this.handleMapClick); // 绑定地图板块的点击事件

    },

	
  },
};
</script>

<style lang="scss" scoped>
.GlobalMap {
  width: 60vw;
  height: 50vh;
  margin-left: 1vw;
}
.box-card{
	width: 232px;
	margin-top: 50px;
}
.circlechart{
	position: absolute;
}


.flag {
  width: 250px;
  height: 250px;
  box-shadow: 0 0 10px black; /* 添加黑色边缘 */
  border-radius: 50%; /* 将边框设置为半径的50%，使其呈现为一个圆形 */
  overflow: hidden; /* 隐藏超出部分 */
  position: absolute;
  margin-left: 165px;
  margin-top: 165px;

  z-index:999;	
}
.flag-image {
  height: 300px; /* 图片高度 */
   width: auto; /* 图片宽度 */
}


.country{
	font-size: 25px;
	float: left;
	font-weight: bold;
}
.bigevent{
	font-size: 20px;
}
.eventtext{
	width: 230px;
	margin-top: 20px;

}
.year{
	font-size:30px;
	margin-bottom: 10px;
	font-weight: bold;
}




</style>

