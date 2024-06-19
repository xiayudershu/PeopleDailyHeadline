<template>
  <div id="navbarContainer">
    <div id="navbar">
      <div id="bubbleWrapper">
        <div id="bubble1" class="bubble" @click="move(1, '180px', '#ffcc80')"><span class="icon">首页</span></div>
        <div id="bubble2" class="bubble" @click="move(2, '500px', '#c3a6a0')"><span class="icon">词云</span></div>
        <div id="bubble3" class="bubble" @click="move(3, '900px', '#c5e1a5')"><span class="icon">外交</span></div>
        <div id="bubble4" class="bubble" @click="move(4, '1300px', '#ce93d8')"><span class="icon">点点</span></div>
      </div>
	  
      <div id="menuWrapper">
        <div id="menu1" class="menuElement" @click="move(1, '180px', '#ffcc80')">首页</div>
        <div id="menu2" class="menuElement" @click="move(2, '545px', '#c3a6a0')">词云</div>
        <div id="menu3" class="menuElement" @click="move(3, '910px', '#c5e1a5')">外交</div>
        <div id="menu4" class="menuElement" @click="move(4, '1275px', '#ce93d8')">点点</div>
      </div>
    </div>
	
    <div id="bgWrapper">
      <div id="bg"> </div>
      <div id="bgBubble"></div>
    </div>
	<mainpage v-if="currentPage === 'mainpage'" class="mainpag"/>
    <homepage v-if="currentPage === 'homepage'" class="home"/>
	<mappage v-if="currentPage === 'mappage'" class="map"/>
	<dotpage v-if="currentPage === 'dotpage'" class="dot"/>
  </div>

  <svg width="0" height="0">
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" id="blurFilter" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15" result="goo" />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </defs>
  </svg>
 
  
  
</template>

<script>
import homepage from "../views/homepage.vue";
import mainpage from "../views/mainpage.vue";
import dotpage from "../views/dotpage.vue";
import mappage from "../views/mappage.vue";
import gsap from "gsap";
export default {
  components: {
    homepage,
    mainpage,
    dotpage,
    mappage,
  },
  data() {
    return {
      currentPage: 'mainpage', // 添加这行代码
    };
  },
  methods: {
    move(id, position, color) {
      var tl = gsap.timeline();
      tl.to("#bgBubble", { duration: 0.15, bottom: "-30px", ease: "ease-out" }, 0)
        .to("#bubble1", { duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out", }, 0)
        .to("#bubble2", { duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out", }, 0)
        .to("#bubble3", { duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out", }, 0)
        .to("#bubble4", { duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out", }, 0)
        .to(".icon", { duration: 0.05, opacity: 0, ease: "ease-out", }, 0)
        .to("#bgBubble", { duration: 0.2, left: position, ease: "ease-in-out" }, 0.1)
        .to("#bgBubble", { duration: 0.15, bottom: "-50px", ease: "ease-out" }, '-=0.2')
        .to(`#bubble${id}`, { duration: 0.15, y: "0%", opacity: 1, boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', ease: "ease-out" }, '-=0.1')
        .to(`#bubble${id} > span`, { duration: 0.15, y: "0%", opacity: 0.7, ease: "ease-out" }, '-=0.1')
        .to("#navbarContainer", { duration: 0.3, backgroundColor: "rgba(0, 0, 0, 0)", ease: "ease-in-out" }, 0)
        .to("#bg", { duration: 0.3, backgroundColor: "rgba(0, 0, 0, 0)", ease: "ease-in-out" }, 0)
        .to("#bgBubble", { duration: 0.3, backgroundColor: "rgba(0, 0, 0, 0)", ease: "ease-in-out" }, 0);

      if (id == 2) {
        this.currentPage = 'homepage'; 
      } 
	  else if(id==3){
        this.currentPage = 'mappage'; 
      }
	  else if(id==4){
	    this.currentPage = 'dotpage'; 
	  }
	  else if(id==1){
	    this.currentPage = 'mainpage'; 
	  }

    },
  },
};
</script>
<style scoped>

#navbarContainer {
  width: 98%;
  min-width: 400px;
  height: 98vh;
  margin: 2px;
  //background-color: #ffcc80;
  background-image: url('../src/assets/背景.svg');
  background-size: cover; /* 设置背景图片铺满整个元素 */
  border-radius: 20px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

#navbar {
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: absolute;
  margin-top: 20px;
  //bottom: 9.375rem;
}

#bubbleWrapper {
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
  bottom: 6px;
}

.bubble {
  background-color: #fff;
  width: 50px;
  height: 50px;
  bottom: 20px;
  border-radius: 50%;
  z-index: 1;
  transform: translateY(120%);
  display: flex;

  justify-content: center;
  align-items: center;
}

.icon {
  opacity: 0;
}

#bubble1 {
  transform: translateY(0%);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  > span {
    opacity: 0.7;
  }
}

#bgWrapper {
  filter: url(#goo);
  width: 100%;
  height: 10px;
  position: absolute;
  bottom: 60px;
}

#bg {
  //background-color: #ffcc80;
  width: 120%;
  height: 100%;
  margin-left: -10%;
}

#bgBubble {
  position: absolute;
  //background-color: #ffcc80;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  bottom: -50px;
  left: 180px;
  transform: translateX(-50%);
}

#menuWrapper {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.menuElement {
  opacity: 0.4;
  transform: translateY(100%);
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
}

#contentWrapper {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: #fff;
    font-family: sans-serif;
    font-weight: 400;
  }
}

.content {
  display: none;
  opacity: 0;
}
</style>