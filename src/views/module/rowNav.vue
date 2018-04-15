<template>
	<el-menu mode="horizontal" :default-active="active" background-color="#f5f5f5" text-color="#909399">
		<template v-for="item in rowLists" >
			<el-submenu :index="item.index+''" v-if="item.secs">
				<template slot="title">{{item.title}}</template>
				<el-menu-item :index="item.index+'-'+sec.index" v-for="sec in item.secs">{{sec.title}}</el-menu-item>
			</el-submenu>
			<el-menu-item v-else :index="item.index+''">{{item.title}}</el-menu-item>
		</template>
	</el-menu>
</template>

<script type="text/javascript">
	export default {
		name : 'rowNav',
		props: ['rowLists', 'active'],
		data () {
			return {
				
			};
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.el-submenu,.el-menu-item{
		width: 200px;
	}
</style>