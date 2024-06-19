<template>
   <div class="dotpage" style="overflow:hidden">
     <div class="dottitle">
		 <br />
       <div class="dottitletext">
       	历史火花
       </div>
	   <img src="../assets/dot/rmrb.png" alt="" width="1000px" class="dotrmrb"/>
	   <img src="../assets/dot/首栏分割线.png" alt="" width="1000px" class="dotfgx"/>
     </div>
	 <div class="dotmain">
	 	<div class="dotnavigater">
			<br />
	 		<router-link to='/' class="dotnavigateritem">
	 			&nbsp;首页
	 		</router-link>
			<router-link to='/dot' class="dotnavigateritem">
				&nbsp;&nbsp;&nbsp;
				
				时光之书
			</router-link>
			<router-link to='/map' class="dotnavigateritem">
				&nbsp;&nbsp;&nbsp;外交地图
			</router-link>
			<router-link to='/dot' class="navigateritem">
				&nbsp;&nbsp;&nbsp;
				<img src="../assets/dot/选中图标.png" alt="" width="50px" height="50px" class="dotchoseit"/>
				历史火花
			</router-link>
	 	</div>
		
        <div class="dotmainall">
		
		 
		  
		  
		  <div class="maind3">
		     <div class="d3Chart" @mousemove="updateVerticalLine" ref="chartContainer" style="z-index: 999;">
		  		
		  		   <svg ref="line">
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
		  
		   <img src="../assets/dot/卡片.png" alt="" width="1000px" class="dotmainbody"/>
		   <img src="../assets/dot/黑白标签/财经.png" alt="" width="20px" class="dotnotlabel1" @click="handleClick('财经')"/>
		   <img src="../assets/dot/黑白标签/教育.png" alt="" width="20px" class="dotnotlabel2" @click="handleClick('教育')"/>
		   <img src="../assets/dot/黑白标签/科技.png" alt="" width="20px" class="dotnotlabel3" @click="handleClick('科技')"/>
		   <img src="../assets/dot/黑白标签/社会.png" alt="" width="20px" class="dotnotlabel4" @click="handleClick('社会')"/>
		   <img src="../assets/dot/黑白标签/时政.png" alt="" width="20px" class="dotnotlabel5" @click="handleClick('时政')"/>
		   <img src="../assets/dot/黑白标签/体育.png" alt="" width="20px" class="dotnotlabel6" @click="handleClick('体育')"/>
		   
		   <img src="../assets/dot/彩色标签/财经.png" alt="" width="20px" class="dotlabel1" v-if="dotlabel1 == true"/>
		   <img src="../assets/dot/彩色标签/教育.png" alt="" width="20px" class="dotlabel2" v-if="dotlabel2 == true"/>
		   <img src="../assets/dot/彩色标签/科技.png" alt="" width="20px" class="dotlabel3" v-if="dotlabel3 == true"/>
		   <img src="../assets/dot/彩色标签/社会.png" alt="" width="20px" class="dotlabel4" v-if="dotlabel4 == true"/>
		   <img src="../assets/dot/彩色标签/时政.png" alt="" width="20px" class="dotlabel5" v-if="dotlabel5 == true"/>
		   <img src="../assets/dot/彩色标签/体育.png" alt="" width="20px" class="dotlabel6" v-if="dotlabel6 == true"/>
		  
		  
		  
		  
		</div>
	 </div>
	
  </div>
</template>
<script>
import * as d3 from 'd3';


export default {
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
		};
	},
	mounted() {
	
	     this.firststart();

	},
	methods: {
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
		  const svgHeight = 680;
		
		  this.svg = d3.select(this.$refs.line)
		    .attr("width", svgWidth)
		    .attr("height", svgHeight);
		
		  this.verticalLine = this.svg.select(".vertical-line")
		    .attr("y1", 0)
		    .attr("y2", svgHeight)
		    .style("stroke", "white")
		    .style("stroke-width", 2)
		    .style("stroke-dasharray", "5, 5"); // 设置虚线样式
		
		this.mouseXText = this.svg.select(".mouse-x-text")
		    .attr("class", "text")
		    .attr("x", 10)
		    .attr("y", 80)
		    .style("fill", "white")
		    .style("font-size", "25px"); 
		this.mouseXText2 = this.svg.select(".mouse-x-text2")
		    .attr("class", "text")
		    .attr("x", 10)
		    .attr("y", 80)
		    .style("fill", "white")
		    .style("font-size", "25px"); 
		this.mouseXText3 = this.svg.select(".mouse-x-text3")
		    .attr("class", "text")
		    .attr("x", 10)
		    .attr("y", 120)
		    .style("fill", "white")
		    .style("font-size", "25px");
		},
		
		
		updateVerticalLine(event) {
		  const mouseX = Math.round(event.offsetX);
		  this.mousex=mouseX;
		  this.verticalLine.attr("x1", mouseX+10).attr("x2", mouseX+10);
		  this.mouseXText.text("年份: " + Math.round(1953 + (mouseX-120) / 15)).attr("x", mouseX -120);
		  this.mouseXText2.text(this.selectvalue1).attr("x", mouseX +20);
		  this.mouseXText3.text(this.selectvalue2).attr("x", mouseX +20).attr("y", 650);
	
	
		  
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
			
			if (this.middle == "true") {
			    this.selectvalue1=value;
				this.selectvalue2="";
				let map =d3.select(this.$refs.dots);
				map.selectAll("*").remove(); // 清空map		
				const posi = "up";
				this.up = "true";
				this.middle = "false";
				this.handleFilesChange(filePaths, posi,value)
				this.startTimer();
				console.log("nowbegin"+this.delaytime)
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

           	console.log(this.ifwheel)



		},
		async handleFilesChange(filePaths, posi,value) {
            console.log(value);
			let allFileData = [];
			let offsetX = 0;
           
			for (let filePath of filePaths) {
				try {
					const response = await fetch(`src/assets/alltitles/${value}/${filePath}`);
					const content = await response.text();

					let lines = content.split("\n");
					allFileData.push(lines);
					this.createCircles(lines, offsetX, posi,value);
					offsetX += 15;

				} catch (error) {
					console.error(`Failed to read file: ${error}`);
				}
			}
		
			
      
			
			//console.log(allFileData);
			
		},
		createCircles(data, offsetX, posi,value) {
		
			let circles = [];
			//console.log(posi);
			for (let rowIndex = 0; rowIndex < data.length-1; rowIndex++) {
				
				let row = data[rowIndex].split(",");
				let x = 20+ offsetX;
				let r = 2;
				if (posi == "up") {
					//console.log(posi);
					
					let y = 345 - rowIndex * 5;
					
					let circle = this.drawCircle(x, y, r);
					
					circle.data = { line: row };

					circle.on("click", () => {
						this.showClickedContent(circle.data.line, x, y);
					});

					circles.push(circle);
					
				}
				if (posi == "down") {
					//console.log(posi);
					let y = 360 + rowIndex * 5;
					let circle = this.drawCircle(x, y, r);
					circle.data = { line: row };

					circle.on("click", () => {
						this.showClickedContent(circle.data.line, x, y);
					});

					circles.push(circle);
				}
				if (posi == "middle") {
					//console.log(posi);
					let y = data.length * 5 / 2 + 340- rowIndex * 5;
					let circle = this.drawCircle(x, y, r);
					circle.data = { line: row };

					circle.on("click", () => {
						this.showClickedContent(circle.data.line, x, y);
					});

					circles.push(circle);
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
		

		
		
		
		drawCircle(cx, cy, r) {
			
			let map = d3.select(this.$refs.dots);
			map.style("fill", "#EBA281");
			let width = 1200;
			let height = 10000;
			let randomOffsetX = Math.random() * width;
			let randomOffsetY = Math.random() * height;

			let circle = map
				.append("circle")
				.attr("class", "circle")
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
				.duration(cx * 20)
				.attr("cx", cx)
				.attr("cy", cy)
				.attr("r", r);
				
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
		        .attr("xlink:href", "src/assets/背景.svg")
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
				.attr("width", rectWidth)
				.attr("height", rectHeight);

			let div = foreignObject
				.append("xhtml:div")
				.style("font-weight", "bold")
				.style("font-size", "18px")
				.style("color", "white")
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

<style scoped>

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
	left:17vw;
	top: 32vh;
	height: 100vh;
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
	height:100vh;
}
.dotlabel1{
	position: absolute;
	left:7.6vw;
	top:35.5vh;
	width:124px;
	height:82px;
	z-index:9;
	
}
.dotlabel2{
	position: absolute;
	left:7.5vw;
	top:50vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotlabel3{
	position: absolute;
	left:8vw;
	top:65vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotlabel4{
	position: absolute;
	left:8vw;
	top:80vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotlabel5{
	position: absolute;
	left:8.5vw;
	top:95vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotlabel6{
	position: absolute;
	left:8.5vw;
	top:110vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotnotlabel1{
	position: absolute;
	left:9vw;
	top:35.2vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotnotlabel2{
	position: absolute;
	left:9vw;
	top:50vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotnotlabel3{
	position: absolute;
	left:9.5vw;
	top:65vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotnotlabel4{
	position: absolute;
	left:9.5vw;
	top:80vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotnotlabel5{
	position: absolute;
	left:10vw;
	top:95vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotnotlabel6{
	position: absolute;
	left:10vw;
	top:110vh;
	width:120px;
	height:80px;
	z-index:9;
	
}
.dotmainbody{
	position: absolute;
	margin-top: 1vh;
	left:15vw;
    width: 80vw;
    height: 100vh;
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
	font-size: 50px;
	font-family: "HWMC";
	color:black;
	text-decoration: none;
}
.navigateritem{
	font-size: 50px;
	font-family: "HWMC";
	color:black;
	text-decoration: none;
}
.dotchoseit{
	width:50px;
	height: 50px;
	z-index: 999;

}
.dotnavigater{
    width: 92vw;
    height: 13vh;
    background-image: url("../assets/dot/白色半透明框.png");
    background-size: cover; 
	text-align: left;
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
	width:17vw;
	height: 17vh;
	position: absolute;
	z-index: 999;
	right: 4vw;
	top:3vh;
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
  