<template>
<div class="container">
  <div class="scaling-svg-container">
    <svg id="radar" class="scaling-svg" viewBox="0 0 1000 1000"></svg>
  </div>
</div>
</template>

<script lang="ts" setup>
import {defineProps ,ref ,watch} from 'vue';
import * as d3 from 'd3';
const props = defineProps({
  currentCountry: {
    type: String,
    required: true
  }
});

const URL =ref( '../src/assets/mapdata/'+props.currentCountry+'.json');

const AREA_COLORS = ['#2A9D8F', '#E9C46A', '#F4A261','#E76F51'];

function drawChart(data) {
    console.log('drawChart data', data);

    const svg = d3.select('#radar');
    svg.style("fill", "none");
    const segAngle = (Math.PI * 2) / data.items.length;
    const segAngleDeg = 360 / data.items.length;


    const width = 900;
    const height = 900;
  

  const center = {
        x: Math.floor(width /2),
        y: Math.floor(height / 2)
    };

    let bound = Math.min(width, height);
    let maxR = 0.5 * bound * 0.9;

    const CIRCLE_RESERVED = 100;
    const CIRCLE_AREA = maxR * 0.925;
    const CIRCLE_AREA_WIDTH = 20;
    const CIRCLE_LEVEL = 300;
    const CIRCLE_LEVEL_WIDTH = 50;


    const scaleRadial = d3.scaleLinear()
        .range([0, 2 * Math.PI])
        .domain([0, data.items.length]);

        const STATUS = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10 // 将状态改为数字表示
];

    const scaleYLevel = {
        'Much': 1,
        'More': 2,
        'Normal': 3,
        'Less': 4
    };

    const scaleYPoint = {
        'Much': 0.6,
        'More': 0.7,
        'Normal': 0.8,
        'Less': 0.9
    };

    const scaleOpacity = {
        'Much': 1,
        'More': 2,
        'Normal': 3,
        'Less': 4
    };


    let barScale = d3.scaleLinear();

    let g = svg.append('g')
        .attr('transform', `translate(${center.x}, ${center.y})`);

    let defs = svg.append('defs');

    defs.append('polygon')
        .attr('id', 'SYMBOL_TRIANGLE')
        .attr('fill', 'red')
        .attr('points', '0,0 5,0 2.5,4.33');

    let SYMBOL_TRIANGLE = d3.symbol().type(d3.symbolTriangle);

    let debug = g.append('g').attr('id', 'debug');

    debug.append('rect')
        .attr('class', 'debug')
        .attr('x', -bound / 2)
        .attr('y', -bound / 2)
        .attr('width', bound)
        .attr('height', bound);

 
		


	let segmentsGroup = g.append('g').attr('class', 'segments');
    let areaGroup = g.append('g').attr('class', 'area');
	
    // --- segments
    let segments = segmentsGroup.selectAll('.segment');
    segments
        .data(data.items)
        .enter()
        .append('path')
        .attr('class', (d, idx) => 'segment ' + (idx % 2 === 0 ? 'segment-odd' : 'segment-even'))
		.attr('fill', (d, idx) => idx % 2 === 0 ? 'transport' : '#cbcbcb')
        .attr('d',
            d3.arc()
                .innerRadius(CIRCLE_LEVEL)
                .outerRadius(CIRCLE_LEVEL + 10)
                .startAngle((d, idx) => {
                    return scaleRadial(idx);
                })
                .endAngle((d, idx) => {
                    return scaleRadial(idx + 1);
                })
        )
        .transition()
        .delay((d, idx) => idx * 15)
        // .ease(d3.easeBounce)
        .attr('d',
            d3.arc()
                .innerRadius(CIRCLE_LEVEL+60)
                .outerRadius(maxR * 0.90)
                .startAngle((d, idx) => {
                    return scaleRadial(idx);
                })
                .endAngle((d, idx) => {
                    return scaleRadial(idx + 1);
                })
                .padAngle(0)
        );

   // 然后在 drawChart 函数中根据每个状态确定相应的方块数量
STATUS.forEach((status, statusIdx) => {
    let segmentBoundWidth = CIRCLE_LEVEL_WIDTH / 2;
    let segmentBoundStart = CIRCLE_LEVEL - CIRCLE_LEVEL_WIDTH -215;

    segments
        .data(data.items
            .filter(item => item.status <= status) // 修改过滤条件为状态小于等于当前状态
        )
        .enter()
        .append('path')
                .transition()
        .delay((d, idx) => idx * 15)
        // .ease(d3.easeBounce)
        .attr('class', 'segment')
        .attr('fill', d => data.areas[d.area].color)
        .attr('opacity', d => (1 - statusIdx / 8 + 0.5)) // 这里需要根据状态的总数调整透明度
        .attr('d',
            d3.arc()
                .innerRadius((d) => {
                    return segmentBoundStart + statusIdx * segmentBoundWidth + 98;
                })
                .outerRadius((d) => {
                    return segmentBoundStart + (statusIdx+3) * segmentBoundWidth;
                })
                .startAngle(d  => {
                    return scaleRadial(d._pos);
                })
                .endAngle(d => {
                    return scaleRadial(d._pos + 1);
                })
                .padAngle(0.01)
        );
});

    let arcLabel = d3.arc()
        .outerRadius(maxR)
        .innerRadius(maxR)
        .startAngle(d => scaleRadial(d))
        .endAngle(d => scaleRadial(d + 1));

  //   segments
  //       .data(data.items)
  //       .enter()
  //       .append('text')
  //       .attr('class', 'segmentLabel')
		// .attr('fill','black')
  //       .attr('transform', (d, idx) => {
  //           let startAngle = scaleRadial(idx);
  //           let endAngle = scaleRadial(idx + 1);
  //           let midAngle = endAngle < Math.PI ? startAngle / 2 + endAngle / 2 : startAngle / 2 + endAngle / 2 + Math.PI;
  //           return `translate(${arcLabel.centroid(idx)[0]} , ${arcLabel.centroid(idx)[1]}) rotate(-90) rotate(${(midAngle * 180 / Math.PI)})`;
  //       })
  //       .attr('text-anchor', (d, idx) => {
  //           return scaleRadial(idx + 1) < Math.PI ? 'start' : 'end';
  //       })
  //       .attr('dy', '.35em')
  //       .text(d => `${!!d._isNew ? '* ' : ''} ${d.name}`);
		


    let areasData = Object.keys(data.areas).map(area => Object.assign(data.areas[area], {
        name: area
    }));

    areasData = areasData.map((area, idx) => {
        area._startAngle = scaleRadial(areasData.reduce((total, curr, idxArea) => {
            return idxArea < idx ? total + curr.count : total;
        }, 0));

        area._endAngle = scaleRadial(areasData.reduce((total, curr, idxArea) => {
                return idxArea < idx ? total + curr.count : total;
            }, 0) + area.count);

        return area;
    });

 // --- area labels: fill

    let arc = d3.arc()
        .innerRadius(CIRCLE_AREA)
        .outerRadius(CIRCLE_AREA + CIRCLE_AREA_WIDTH)
        .startAngle(d => d._startAngle)
        .endAngle(d => d._endAngle)
        .padAngle(0.01);

    areaGroup.selectAll('.areaFill')
        .data(areasData)
        .enter()
        .append('path')
        .attr('class', 'areaFill')
        .attr('fill', d => d.color)
        .attr('d', arc)
        .transition()
        .duration(1500)
        .attrTween('d', arcTween(arc));

    areaGroup.selectAll('.areaLabel')
        .data(areasData)
        .enter()
        .append('text')
        .attr('class', 'areaLabel')
        .attr('x', 5)
        .attr('dy', -5)
        .attr('text-anchor', 'middle')
        .append('textPath')
		.attr('xlink:href', (d, idx) => '#areaLabel_' + idx)
        .attr('startOffset', '50%')
        .text((d) => d.name);


}

function processData(rawData) {
    let data = {
        areas: {},
    };

    data.items = [
        ...(rawData.blips || []),
        ...(rawData.newBlips || []).map(blip => {
            blip._isNew = true;
            return blip;
        })
    ]
        .sort(function(a, b) {
            return d3.ascending(a.area, b.area) ||
                d3.ascending(a.name, b.name);
        })
        .map((d, idx) => {
            d._pos = idx;
            return d;
        });

    let areas = data.items
        .map(item => item.area)
        .filter((item, idx, self) => self.indexOf(item) === idx);


    areas.forEach((area, idx) => {
        data.areas[area] = {
            color: AREA_COLORS[idx],
            count: data.items.filter(item => item.area === area).length
        }
    });

    return data;
}

function getData() {
	console.log(URL.value)
    return fetch(URL.value).then(response => response.json());
}

function rad2deg(rad) {
    return rad * (180 / Math.PI);
}
function deg2rad(rad) {
    return rad * (Math.PI / 180);
}

function arcTween(arc) {
    return function(d) {
        let i = d3.interpolate(d._startAngle, d._endAngle);
        return function(t) {
            return arc({
                _startAngle: d._startAngle,
                _endAngle: i(t)
            });
        };
    }
}

function init() {
    console.clear();
    getData()
        .then(data => processData(data))
        .then(data => drawChart(data));
}

init();
watch(() => props.currentCountry, (newVal, oldVal) => {
  console.log('currentCountry 更新为:', newVal);
  d3.select('svg').selectAll('*').remove();
  URL.value = '../src/assets/mapdata/'+props.currentCountry+'.json';
  init();
  console.log('重新加载组件');
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Oswald');

.container {
  margin: 0 auto;
  margin-left:1vw;
  width: 25vw;
  height:auto;
  background-color: #fff; /* 修改背景色为白色 */
}

.scaling-svg-container {
  position: relative; 
  height:0; 
  width: 100%; 
  padding: 0;
  padding-bottom: 100%;
}
.scaling-svg {
  position: absolute; 
  height: 100%; 
  width: 100%; 
  left: 0; 
  top:0;
  background-color: #fff;
}

.innerCircle {
  fill: none;
  stroke: #cbcbcb;
  stroke-dasharray: 4 8;
}

.innerCircleLabelPath {
  fill: none;
  stroke: none;
}

.innerCircleLabel {
  font-size: 14px;
  font-family: 'Oswald', sans-serif;
  fill: #4d4d4d;
  opacity: 1;
}

.debug {
  fill: none;
  stroke: red;
}

.segment {
  
    &.segment-even {
      fill: #000;
      opacity: 0.01;
    }
  
    &.segment-odd {
      fill: #000;
      opacity: 0.05;
    }
}

.segment.segment-even {
  fill: #000;
  opacity: 0.01;
}

.segment.segment-odd {
  fill: #000;
  opacity: 0.05;
}

.segmentLabel {
  font-family: 'Oswald', sans-serif;
  fill: #4d4d4d;
  opacity: 1;
}

.segmentPoint {
  /* //fill: #FFFFFF; */
  stroke-width: 2px;
  z-index: 999;
  
}

.segmentPointOld {

}

.area {
  
}

.areaFill {
  opacity: 1;
}

.areaLabelArc {
  fill: none;
}

.areaLabel {
  fill: #000;
  font-size: 14px;
  font-family: 'Oswald', sans-serif;
}
</style>