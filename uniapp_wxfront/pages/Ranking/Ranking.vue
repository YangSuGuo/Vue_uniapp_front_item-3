<template>
	<view class="list">
		<view class="card">
			<view class="title-background">
				<view class="title-background2"></view>
				<text class="card-text">浏览量TOP
					<text class="card-digit">10</text>
				</text>
			</view>
			<view class="card-background">
				<view v-for="(item, index) in items" :key="index" class="card-item" @click="handleClick(index)">
					<image :src="item.background" class="card-image" />
					<view class="card-content">
						<view class="card-title01">
							<text class="card-title">{{ item.title }}</text>
						</view>
						<view class="card-label-background">
							<text class="card-label">{{ item.writer }}</text>
						</view>
						<view class="pageview">
							<text class="card-prompt">阅读量</text>
							<text class="card-pageview">{{item.pageview}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// todo 更换图片为数字【1~10】排名
	export default {
		data() {
			return {
				// 后台数据：http://localhost:8080/api/auth/essay/list?parameter=spring
				items: []
			}
		},
		onLoad() {
			/**
			 * 获取文章列表
			 * @param parameter 文章分类
			 * @return  json 卡片列表
			 */

			let card_parameter = this.$store.state.card.parameter
			console.log(card_parameter)
			uni.request({
				url: 'http://localhost:8080/api/auth/essay/alllist',
				method: 'GET',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					// 冒泡排序（按浏览量进行排序）
					let top = res.data;
					console.log("开始排序");
					let time = new Date().getTime();
					let TotalViews = 0;
					console.log(top);
					for (let i = 0; i < top.length; i++) { // 负责top【i】的遍历
						for (let j = i + 1; j < top.length; j++) { // 负责top【i+1】的遍历
							console.log("top[" + i + "]:" + top[i].aid);
							console.log("top[" + j + "]:" + top[j].aid);
							if (top[i].pageview < top[j].pageview) { // 准备临时变量当中间值，来交换位置
								let t = top[i];
								top[i] = top[j];
								top[j] = t;
							}
						}
						TotalViews += top[i].pageview
					}
					console.log("完成耗时：" + (new Date().getTime() - time) + "ms");
					console.log("页面总浏览量：" + TotalViews);
					console.log(top);
					// 截取数组0~9
					this.items = top.slice(0, 10);
				},
				fail: err => {
					console.log(err);
				}
			})
		},
		computed: {
			card() {
				return this.items[0]
			}
		},
		methods: {
			handleClick(index) {
				console.log('点击了第' + (index + 1) + '篇文章')
				this.$store.commit('aidinfo', this.items[index].aid)
				this.$store.commit('titleinfo', this.items[index].title)
				// todo 跳转至阅读Read
				console.log(uni.$u.page())
				uni.$u.route('/pages/Read/Read');
			}
		},
	}
</script>

<style lang="scss">
	.list {}

	.title-background {
		background-image: url("https://picdl.sunbangyan.cn/2023/06/10/iml1iu.png");
		background-size: cover;
		width: 100%;
		height: 33vh;
	}

	.title-background2 {
		width: 340rpx;
		height: 100rpx;
		position: absolute;
		top: 20rpx;
		background-color: rgba(242, 206, 43, 0.55);
		border-radius: 8rpx;
		box-shadow: 0px 2rpx 8rpx rgba(0, 0, 0, 0.15);
	}

	.card-text {
		position: relative;
		top: 20rpx;
		left: 20rpx;
		font-size: 60rpx;
		color: #303133;
		font-family: "苹方 常规";
		font-weight: bold;
	}

	.card-digit {
		position: relative;
		top: 5rpx;
		margin-left: 30rpx;
		font-size: 70rpx;
		color: #ac1217;
		font-family: Castellar;
	}

	.card-background {
		margin-left: 20rpx;
		margin-right: 20rpx;
		margin-top: -190rpx;
		border-radius: 13rpx;
	}

	.card-item {
		display: flex;
		padding: 20rpx;
		height: 100rpx;
		background-color: #ffffff;
		margin-bottom: 30rpx;
		border-radius: 13rpx;
		box-shadow: 0px 2rpx 8rpx rgba(0, 0, 0, 0.15);
	}

	.card-image {
		width: 100rpx;
		height: 100rpx;
		border-radius: 10rpx;
		margin-right: 30rpx;
	}

	.card-content {
		margin-top: 10rpx;
	}

	.card-title01 {
		// 规定标题字符数量，溢出隐藏
		max-width: 200px;
		overflow: hidden;
		// 超出部分显示 。。。
		text-overflow: ellipsis;
		// 不进行换行
		white-space: nowrap;
	}

	.card-title {
		font-size: 30rpx;
		color: #000000;
		font-family: "苹方 常规";
		margin-bottom: 10rpx;
	}

	.card-label {
		color: #7a7a7a;
		font-size: 26rpx;
		font-weight: 500;
		font-family: "苹方 常规";
		text-align: center;
	}

	.pageview {
		position: relative;
		top: -90%;
		left: 420rpx;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.card-prompt {
		color: #7a7a7a;
		font-family: "苹方 常规";
		font-size: 26rpx;
	}

	.card-pageview {
		margin-top: 4rpx;
		margin-left: 20rpx;
		color: #ac1217;
	}
</style>