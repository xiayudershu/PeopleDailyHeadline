<template>
  <div>
    <canvas ref="canvas" style="width: 700px; height: 400px;"></canvas>
  </div>
</template>

<script>
import wordcloud from 'wordcloud';
import { defineProps } from 'vue';
export default {
   props: {
	    msg: Array // 接收父组件ParentComponent传过来的数组
	  },
  mounted() {
	const words2 = this.msg;
    const canvas = this.$refs.canvas;

    const width = 700; // 对应 35rem
    const height = 400; // 对应 35rem
    canvas.width = width;
    canvas.height = height;
 

    const colors = ['#506050', '#A0C0A8', '#BBDOE4', '#BFA7D9', '#DABCA4', '#C8D8B8', '#E0E8C8', '#E5E8DA', '#3B5173', '#E3EFFD', '#5D87A8', '#DCEEFA', '#6A6BAB', '#8988C4', '#A3A5DE', '#BCC7F43'];

    const tooltip = document.createElement('div');
    tooltip.style.position = 'absolute';
    tooltip.style.visibility = 'hidden';
    tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '10px 10px';
    tooltip.style.borderRadius = '4px';
    document.body.appendChild(tooltip);
	
	
      const clickedWord = '大熊猫';
const drawWordCloud = (canvas, options, wordClickedHandler) => {
      const ctx = canvas.getContext('2d');
      const bbox = canvas.getBoundingClientRect();

      const { list, gridSize, weightFactor, fontFamily, color, rotateRatio } = options;

      const drawTooltip = (text, x, y) => {
        const left = bbox.left + x;
        const top = bbox.top + y;
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
        tooltip.innerText = text;
        tooltip.style.visibility = 'visible';	
      }
	  
	  
	   const handleClick = (item) => {
	      wordClickedHandler(item[0]);
	    };
	  
	 
      const hideTooltip = () => {
        tooltip.style.visibility = 'hidden';
      };

      const randomSeed = 20; // 固定随机种子
      const positions = new Map(); // 存储已生成词云的位置

      wordcloud(canvas, {
        ...options,
        color: (word) => {
          const hash = hashCode(word);
          const randomIndex = Math.floor(Math.random() * colors.length);
          const index = (hash + randomSeed) % colors.length; // 哈希后加上随机种子并取余以获得位置
          return colors[index];
        },
        drawMask: true, // 使用遮罩层以确保词云不超出范围
        maskColor: 'rgba(0, 0, 0, 0.0)', // 遮罩层颜色
        gridSize: Math.round(50 * width / 1024),
        weightFactor: function (size) {
          return Math.pow(size, 2) * canvas.width / 1024;
        },
        drawOutOfBound: false, // 禁止绘制超出范围的词
        fontFamily: 'TEST1',
        rotateRatio: 0.0,
        backgroundColor: 'transparent',
        shuffle: false, // 不打乱词的顺序
        abortThreshold: 1000,
        abort: () => {
          return positions.size >= list.length; // 当所有词云都生成后终止
        },
        hover: (item, dimension, event) => {
          const centerX = dimension.x + dimension.w / 2;
          const centerY = dimension.y + dimension.h / 2;
		  const temp= Math.floor(Math.pow(item[1]*3, 2));
          drawTooltip(temp, centerX, centerY);
        },
        leave: hideTooltip,
		click: handleClick,
      });

      canvas.addEventListener('mouseleave', hideTooltip);

      function hashCode(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          hash = ((hash << 5) - hash) + str.charCodeAt(i);
          hash |= 0;
        }
        return hash;
      }
	  
	  
    };

    const options2 = {
      list: words2.map((word) => [word.text,  Math.cbrt(word.size) ]),
      gridSize: Math.round(10 * width / 1024), // 调整 gridSize 的值
      weightFactor: function (size) {
		
        return Math.pow(size, 2) * canvas.width / 1024;
      },
      fontFamily: 'Arial, Helvetica, sans-serif',
      rotateRatio: 0.0,
      backgroundColor: 'transparent',
    };

    drawWordCloud(canvas, options2, (clickedWord) => {
      console.log(clickedWord);
	  this.$emit('word-clicked', clickedWord);
    });
	
	
	
	
  },
};
</script>

<style>

</style>