<template>
	<el-form :model="form" status-icon :rules="validate" label-width="0" class="login-box">
		<h3 class="title">系统登录</h3>
		<el-form-item prop="username">
			<el-input type="text" v-model="form.username"></el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input type="password" v-model="form.password"></el-input>
		</el-form-item>
		<el-form-item class="w100">
			<el-button type="primary" @click="submit" class="w100">login</el-button>
		</el-form-item>
	</el-form>
</template>

<script type="text/javascript">
	import LoginApi from '../api/loginApi.js'
	export default {
		name: 'login',
		data () {
			var validateUsername = (rule, value, callback) => {
			 	if (value === '') {
		          callback(new Error('请输入用户名'));
		        } else if (value !== 'admin') {
		          callback(new Error('请输入正确的用户名'));
		        } else {
		          callback();
		        }
			};

			var validatePassword = (rule, value, callback) => {
			 	if (value === '') {
		          callback(new Error('请输入密码'));
		        } else if (value !== 'admin') {
		          callback(new Error('请输入正确的密码'));
		        } else {
		          callback();
		        }
			};

			return {
				form: {
					username: 'admin',
					password: 'admin'
				},
				validate : {
					username: [
						{ required: true, message: '请输入用户名', trigger: 'blur' },
						{ validator: validateUsername}
					],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' },
						{ validator: validatePassword}
					]
				}
			};
		},
		methods: {
			submit () {
				LoginApi({
					username: this.form.username,
					password: this.form.password
				}).then(data => {
					if(data.errorCode == 0){
						this.$router.push('/welcome');
					}else{
						this.$message.error('登录失败');
					}
				});
			},	
		}
	}
</script>

<style scoped>
	.login-box{
	    border-radius: 5px;
	    -moz-border-radius: 5px;
	    background-clip: padding-box;
	    margin: 180px auto;
	    width: 350px;
	    padding: 35px 35px 15px;
	    background: #fff;
	    border: 1px solid #eaeaea;
	    box-shadow: 0 0 25px #cac6c6;
	    font-size: 14px;
	}
	.w100{
		width: 100%;
	}
	.title{
	    margin: 0 auto 40px;
	    text-align: center;
	    color: #505458;
	}
</style>