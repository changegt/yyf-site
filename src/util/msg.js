export default {
	get: (code, msg) => {
		return {
			errorCode: code,
			errorMsg: msg
		}
	}
}