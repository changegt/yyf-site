<template>
	<el-container>
		<el-aside width="250px">
			<left active="/theVue"></left>
		</el-aside>
		<el-main>
			<rowNav :active="'/theVue'" :rowLists="rowLists"></rowNav>
			<el-collapse v-model="activeNames">
			  	<el-collapse-item title="vue抓取音乐数据" name="1" class="tal">
			    	<div style="color: #909399;">实现vue抓取音乐数据播放&nbsp;<a href="/#/music163" target="_blank" style="color: #409EFF;">jump to</a></div>
			  	</el-collapse-item>
			  	<el-collapse-item title="vue实现视频播放框架" name="2" class="tal">
			    	<div style="color: #909399;">vue实现视频播放框架&nbsp;<a href="" target="_blank" style="color: #409EFF;">jump to</a></div>
			  	</el-collapse-item>
			  	<el-collapse-item title="coding..." name="2" class="tal">
			  	</el-collapse-item>
		  	</el-collapse>
		</el-main>
	</el-container>
</template>

<script type="text/javascript">
	import left from '@/views/left.vue'
	import rowNav from '@/views/module/rowNav.vue'
	export default {
		name : 'theVue',
		data () {
			return {
				activeNames: ['1'],
				rowLists: [
					{
						index: '/theVue',
						title: 'vue',
					},
					{
						index: '/koa',
						title: 'Koa',
					}
				]
			};
		},
		methods: {
			
		},
		components: {
			left,
			rowNav
		}
	}
</script>

<style scoped>
	.el-main{
		padding: 0 ;
	}
	.el-collapse{
		padding: 0 20px;
		border: none;
		font-size: 16px;
		background: #fff;
	}
</style>