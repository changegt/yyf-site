import Msg from '@/util/msg'
import Vue from 'vue'
const LoginApi = (params) => {
	return new Promise((resolve, reject) => {
		if(!params.username){
			resolve(Msg.get('-1','用户名不为空'));
		}

		if(!params.password){
			resolve(Msg.get('-2','密码不为空'));
		}
		Vue.http.post('https://easy-mock.com/mock/5ad1910b80a0fa4c34429560/admin/login', {
			params: {
				username: params.username,
				password: params.password
			}
		}).then(data => {
			resolve(data.body.data);
		})
	});
}

export default LoginApi
