<template>
	<el-container>
		<el-aside width="250px">
			<left active="/welcome"></left>
		</el-aside>
		<el-main>
			
		</el-main>
	</el-container>
</template>

<script type="text/javascript">
	import left from '@/views/left.vue'
	export default {
		name : 'main',
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