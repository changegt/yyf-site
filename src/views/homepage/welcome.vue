<template>
	<el-container>
		<el-aside width="250px">
			<left active="/welcome"></left>
		</el-aside>
		<el-main>
			<div class="welcome-box">
				<a target="_blank" href="https://changegt.github.io/public/index.html"><img src="../../assets/github-logo.jpg" alt=""></a>
			</div>
		</el-main>
	</el-container>
</template>

<script type="text/javascript">
	import left from '@/views/left.vue'
	export default {
		name : 'welcome',
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