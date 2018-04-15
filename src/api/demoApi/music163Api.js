import vue from 'vue'
import {newsong} from './newsongData'
import Msg from '@/util/msg'
/**
 * 获取top10
 * @return {[type]} [description]
 */
const getNewSong = () => {
	return new Promise((resolve, reject) => {
		const returnArr = Msg.get(0, 'success');
		returnArr.result = newsong;
		resolve(returnArr);
		// vue.http.post('http://music.163.com/weapi/personalized/newsong').then(data => {
		// 	resolve(data.data);
		// });
	});
}

export {
	getNewSong
}