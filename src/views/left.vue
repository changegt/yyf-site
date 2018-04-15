<template>
		<el-menu
	      	:default-active="active"
	      	class="el-menu-vertical-demo"
	      	@open="handleOpen"
	      	router
	     	@close="handleClose">
	     	<el-submenu index="0" class="submenu-item tal">
	     		<template slot="title">
	     			<i class="el-icon-bell"></i>
	     			<span>主页</span>
	     		</template>
	     		<el-menu-item-group>
	          		<el-menu-item index="/welcome">欢迎</el-menu-item>
	        	</el-menu-item-group>
	     		<el-menu-item-group>
	          		<el-menu-item index="0-2">文章</el-menu-item>
	        	</el-menu-item-group>
	     	</el-submenu>

	  		<el-submenu index="1" class="submenu-item tal">
	    		<template slot="title">
	      			<i class="el-icon-menu"></i>
	      			<span>前端</span>
	    		</template>
	        	<el-menu-item-group>
	          		<el-menu-item index="/theVue">框架</el-menu-item>
	        	</el-menu-item-group>
	        	<el-menu-item-group>
	          		<el-menu-item index="1-2">工具</el-menu-item>
	        	</el-menu-item-group>
	        	<el-menu-item-group>
	          		<el-menu-item index="1-3">node框架</el-menu-item>
	        	</el-menu-item-group>
	  		</el-submenu>

	  		<el-submenu index="2" class="submenu-item tal">
	    		<template slot="title">
	      			<i class="el-icon-picture"></i>
	      			<span>多媒体</span>
	    		</template>
	        	<el-menu-item-group>
	          		<el-menu-item index="2-1">视频</el-menu-item>
	        	</el-menu-item-group>
	        	<el-menu-item-group>
	          		<el-menu-item index="2-2">音频</el-menu-item>
	        	</el-menu-item-group>
	        	<el-menu-item-group>
	          		<el-menu-item index="2-3">图片</el-menu-item>
	        	</el-menu-item-group>
	  		</el-submenu>
	  		
	  		<el-submenu index="3" class="submenu-item tal">
	    		<template slot="title">
	      			<i class="el-icon-setting"></i>
	      			<span>其他</span>
	    		</template>
	        	<el-menu-item-group>
	          		<el-menu-item index="3-1">设置</el-menu-item>
	        	</el-menu-item-group>
	  		</el-submenu>
		</el-menu>
</template>

<script type="text/javascript">
	export default {
		name : 'left',
		props: ['active'],
		data () {
			return {
			};
		},
		methods: {
			handleOpen () {

			},
			handleClose () {

			}
		}
	}
</script>

<style scoped>
	.tal{
		text-align: left;
	}
	.el-menu-item{
		padding-left: 80px!important;
	}
	.el-menu{
		height: 100%;
	}
</style>