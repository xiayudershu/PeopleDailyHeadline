<template>
  <div class="dialogmain">
	<div class="chattinghead">
		<br />
	 <img src="../../assets/ai.png" alt="" style="width: 30px" />
	 &nbsp;
	 <div class="chattingheadname">
	 	文澜
		
	 </div>
	 <el-button type="warning" plain class="chattingclear" size="small" @click="clearchatting()">清空记录</el-button>
	</div>
    <div class="mainchatting">
		<br /><br />
      <div class="chattingleader" v-if="ifpre==true">
      	  <strong>Hi!你好呀！</strong>
		  <br />
		  &nbsp;&nbsp;&nbsp;&nbsp;我是你的AI专属伙伴文澜，帮你解答疑惑提供灵感,你可以试着问我：
		  <br />  <br />
		  <div class="prequestion">
		  	“中共十八大的意义是什么？”
			<el-button type="warning" round class="preask" plain @click="getpreask()">提问</el-button>
			
		  </div>
		  
      </div>
	
      <div v-for="(msg, index) in sessiontest" :key="index" :class="['message-row', msg.role === 'user' ? 'right' : 'left']">
        <div class="row">
          <div class="message">
          <div v-html="msg.content"></div>
          </div>
        </div>
		<br/><br/>
      </div>
	<br/><br/><br/><br/>
	  
    </div>
    
	<div class="isasking" v-if="ifasking==true">
		  <el-icon class="is-loading">
		    <Loading />
		  </el-icon>正在响应
	</div>
	
    <div class="chatinput">
		<br/>
      
    <el-input v-model="input" style="width: 300px" size="large" placeholder="可以向我提问" class="inputquestion" />


	<el-button  class="sendbutton" @click="askquestion()" type="warning"  plain>
		<img src="../../assets/send.png" alt="" style="width: 50px" />
	</el-button>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted} from 'vue'
import {
  Check,
  Delete,
  Edit
} from '@element-plus/icons-vue';

const input = ref('');
const ifasking=ref(false)
const ifpre=ref(true)
const sessiontest = ref([])
onMounted(() => {
  const temp= JSON.parse(localStorage.getItem('chattinginfolast') || '[]');

  if(temp){
      ifpre.value=false;
	  sessiontest.value=temp
  }
  else{
	
	  sessiontest.value=[]
  }
});

const clearchatting=()=>{
	 localStorage.removeItem('chattinginfolast');
	 input.value='';
	 ifpre.value=true;
	 sessiontest.value=[];
	
}
const getpreask=()=>{
	ifasking.value=true
	ifpre.value=false;
	const message = {
	  "content":"中共十八大的意义是什么？",
	  "role": 'user',
	};
	sessiontest.value.push(message)
	
	
	
	getanswer("中共十八大的意义是什么？")
	
	
	input.value='';
}
const askquestion=()=>{
	ifasking.value=true
	
    const message = {
      "content":input.value,
      "role": 'user',
    };
	sessiontest.value.push(message)
	


	getanswer(input.value)

	
	input.value='';

}
const getanswer=(input)=>{
	const answerText=ref('')
	fetch('http://101.35.20.149:8080/chat/query', {
	  method: 'POST',
	  body: JSON.stringify(input),
	  headers: {
	    'Content-Type': 'application/json'
	  }
	}).then(response => {
	  return response.json();
	}).then(data => {
		
	    answerText.value=data.answer.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>");
		ifasking.value=false
		const answer = {
		  "content":answerText.value,
		  "role": 'gpt',
		};
		
		sessiontest.value.push(answer)
		
		localStorage.setItem('chattinginfolast',JSON.stringify(sessiontest.value))
		
	}).catch(error => {
	  console.error('请求出错', error);
	});
	


}
</script>

<style lang="scss" scoped>
.chattingclear{
	position: absolute;
	top:3.5vh;
	right:2vw;
}
.chattingheadname{
	position: absolute;
	top:3.5vh;
	left:3vw;
}
.chattinghead{
	position: absolute;
	top:-2vh;
	width: 30vw;
	height:8vh;
	background-color: white;
	color:black;
	font-size:20px;
	text-align:left;
}
.preask{
	position: relative;
	margin-left:14vw;

}
.prequestion{
	padding: 10px;
	font-size:18px;
	text-align: left;
	margin-left:2vw;
	font-weight: bold; 
	width:18vw;
	height:8vh;
	background-color:#f4ece0;
	border-radius: 15px;
	line-height: 1.5;
}
.chattingleader{
	padding: 10px; 
    font-size:16px;
	text-align: left;
	margin-left:1.5vw;
	width:23vw;
	height:30vh;
	background-color:white;
	border-radius: 15px;
	line-height: 2;
}
.chattingwindow{
	height:auto;
}
.message-row {
  display: flex;
  background-color:#FDF7EE;
  &.right {
    justify-content: flex-end;
    .row {
      .message {
		text-align:left;
        background-color: #ffaf66;
		color:white;
      }
    }
  }


  .row {
    .message {
	  background-color: white;
	  text-align:left;
      font-size: 15px;
      padding: 15px; 
      max-width: 500px;
      border-radius: 20px;
      box-shadow: 20px 20px 20px 1px rgba(0, 0, 0, 0.01);
      margin: 10px;
	  line-height:2
    }
  }
}
:deep(.md-editor-preview-wrapper) {
  padding: 0 10px;

  .smart-blue-theme p {
    line-height: unset;
  }
}
.dialogmain{
	
}
.mainchatting{
	background-color:#FDF7EE;
	height:94vh;
}
.isasking{
	position: absolute;
	bottom: 12vh;
	width:100px;
	right:12vw;
	background-color: #ffaf66;
	color:white;
	border-radius: 10px;
}
.chatinput{
	position: absolute;
	bottom: 0vh;
	width:30vw;
	height:10vh;
	background-color: white;
}
.sent {
  text-align: right;
  color: blue;
}
.sendbutton{
	position:absolute;
	bottom: 1.5vh;
	border-radius: 50%;
	width: 7vh;
	height:7vh;
	font-size: 20px;
	right:4vw;

}

.received {
  text-align: left;
  color: green;
}
.inputquestion{
	position: absolute;
	left:1vw;
}
</style>