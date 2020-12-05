<template>
	<div class="banner">
		<h1>卓音考试系统教师管理</h1>
		<div class="ul"> 
      		<ul class="content">
        		<li 
          		v-for="(item,index) in menu"
          		:key="index"
          		:class="{active : ( isActive == item.value ? true : false )}"
          		@click="isActive = item.value;currentComp = item.comp"
          		>
          		{{item.name}}
        		</li>
      		</ul>
    	</div>
    	<div>
      	<!-- 组件显示的位置，利用is属性的特性，实现动态切换组件 -->
      		<information :is="currentComp"></information>
    	</div>	
    </div>
</template>

<!-- <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script> -->
<script>
import information from './information'
import classManage from './classManage'
import paperManage from './paperManage'
import gradeManage from './gradeManage'
	export default {
		name:'banner',
  		data () {
    		return {
      		   // 当前选中的组件
      		   currentComp: 'information',
      		   // 当前选中的li标签
      		   isActive: '1',
      	menu: [
        	{
          	  // li标签的内容
          	  name: '个人中心',
	          // 当前li标签是否选中的标识
	          value: '1',
	          // 点击当前li标签，要显示的组件
	          comp: 'information'
        	},
        	{
          	  name: '班级管理',
          	  value: '2',
          	  comp: 'classManage'
            },
        	{
              name: '成绩管理',
              value: '3',
              comp: 'gradeManage'
        	},
        	{
              name: '试卷管理',
              value: '4',
              comp: 'paperManage'
        	}
      	]
    	}
  	},
	    // 注册组件
	    components: {
	        classManage,
	        gradeManage,
	        information,
	        paperManage
	    }
}

	
</script>

<style scoped>
*{
	padding: 0;
	margin: 0;
}
h1{
	text-align:center;
	margin-bottom:50px;
	font-size:40px;
	font-weight: normal;
	letter-spacing:4px;
}
.content{
	margin-left:180px;
	float:left;
	list-style: none;
	border:1px solid black;
}
li{
	height:100px;
	line-height: 100px;
	border:1px solid black;
	width:150px;
	color:red;
	font-size:20px;
}
</style>