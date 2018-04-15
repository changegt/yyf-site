<template>
	<el-container>
		<el-aside width="250px">
			<left active="/theVue"></left>
		</el-aside>
		<el-main>
			vue
		</el-main>
	</el-container>
</template>

<script type="text/javascript">
	import left from '@/views/left.vue'
	export default {
		name : 'theVue',
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