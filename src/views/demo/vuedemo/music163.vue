<template>
	<el-container>
		<el-header class="clearfix top fs16 cfff fixed">
			<div class="fl fs24">网易云音乐</div>
			<div class="fr download-btn">下载APP</div>
		</el-header>
		<el-main class="body">
			<el-tabs v-model="active" @tab-click="tabClick">
				<el-tab-pane label="推荐音乐" name="music">
					<div class="music-box tab-item pt20">
						<h2 class="title tal">推荐歌单</h2>
						<ul class="music-ul rowflex pb15" v-for="list in [[0,3],[3,6]]">
							<li class="music-li flex1 por" v-for="(item, index) in recommendList.slice(list[0],list[1])">
								<a :href="item.link">
									<img :src="item.img" alt="" class="img">
									<p class="text line2wrap fs14">{{item.title}}</p>
									<span class="dib poa num fs12">{{item.num}}</span>
								</a>
							</li>
						</ul>
					</div>
					<div class="newmusic-box tab-item pt20">
						<h2 class="title tal">最新音乐</h2>
						<ul class="newmusic-ul">
							<li class="newmusic-li ml10 pt5 pb5 bbs mr10" v-for="(item, index) in top10Lists">
								<a :href="'http://music.163.com/m/song?id='+item.id">
									<div class="newmusic-li-box rowflex">
										<div class="sgchfl flex1">
											<div class="f-thide sgtl tal fs16 lh24">{{item.name}}</div>
											<div class="f-thide sginfo tal fs12 lh18 c888">{{item.song.artists[0].name}} - {{item.song.album.name}}</div>
										</div>
										<div class="sgchfr pl10 pt10">
											<span class="icon-play"></span>
										</div>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</el-tab-pane>
				<el-tab-pane label="热歌榜" name="rank">热歌榜</el-tab-pane>
				<el-tab-pane label="搜索" name="search">搜索</el-tab-pane>
			</el-tabs>
		</el-main>
	</el-container>
</template>

<script type="text/javascript">
	import '../../../assets/css/wapbase.css'
	import { getNewSong } from '../../../api/demoApi/music163Api.js'
	import { recommendList } from '../../../api/demoApi/newsongData.js'
	export default {
		name : 'music163',
		data () {
			return {
				active: 'music',
				top10Lists: [
				],
				recommendList: recommendList
			};
		},
		mounted () {
			this.loadTop10();
		},
		methods: {
			tabClick () {

			},
			loadTop10 () {
				getNewSong().then(data => {
					this.top10Lists = data.result;
				});
			}
		}
	}
</script>

<style>
	.el-header{background: #d43c33; height: 64px; line-height: 64px;}
	.download-btn{height: 28px; line-height: 28px; border: solid 1px #fff; border-radius: 14px; font-size: 15px; padding: 0 10px; margin-top: 16px;}
	.el-tabs__nav{ms-flex-direction:row;flex-direction:row;display:-webkit-box;-webkit-box-orient:horizontal; width: 100%;}
	.el-tabs__item{display: block; padding: 0;width: 33%;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-flex:1; box-sizing: border-box;}
	.el-tabs__item.is-active,.el-tabs__item:hover{color: #d43c33;}
	.el-tabs__item:last-child{padding-right: 20px;}
	.el-tabs__item:first-child{padding-left: 20px;}
	.el-tabs__active-bar{background-color: #d43c33;}
	.el-tabs{width: 100%;height: 100%;position: relative;}
	.el-tabs__header{position: fixed;top: 60px;width: 100%;background: #fff;z-index: 10;}
	.el-tabs__content{width: 100%;height: 100%;box-sizing: border-box;padding-top: 40px;overflow: auto;z-index: 1;}
	.title{position: relative;padding-left: 9px;margin-bottom: 14px;font-size: 17px;height: 20px;line-height: 20px;}
	.title:after{content: " ";position: absolute;left: 0;top: 50%;margin-top: -9px;width: 2px;height: 16px;background-color: #d33a31;}
	.music-ul{width: 100%;}
	.music-li{width: 33.3%;box-sizing: border-box; padding-left: 1px; padding-right: 1px;}
	.music-li:first-child{width: 33.3%;box-sizing: border-box; padding-right: 2px; padding-left:0;}
	.music-li:last-child{width: 33.3%;box-sizing: border-box; padding-right: 0; padding-left:2px;}
	.music-li img{width: 100%;}
	.music-li .text{display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;overflow: hidden;padding: 6px 2px 0 6px;line-height: 1.2;font-size: 13px;}
	.music-li .num{ position: absolute;right: 5px;top: 2px;z-index: 3;padding-left: 13px;color: #fff;font-size: 12px;background-position: 0;background-repeat: no-repeat;background-size: 11px 10px;text-shadow: 1px 0 0 rgba(0,0,0,.15);}
	.icon-play{
		display: inline-block;
	    width: 22px;
	    height: 22px;
        background: url(//s3.music.126.net/m/s/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880) no-repeat;
    	background-size: 166px 97px;
	    background-position: -24px 0;
	}
</style>