<template>
	<el-container>
		<el-aside width="250px">
			<left active="/theVue"></left>
		</el-aside>
		<el-main>
			koa
		</el-main>
	</el-container>
</template>

<script type="text/javascript">
	import left from '@/views/left.vue'
	export default {
		name : 'theKoa',
		data () {
			return {

			};
		},
		methods: {
			
		},
		components: {
			left
		}
	}
</script>

<style>
	
</style>