<template>
	<view class="list">
		<view class="card">
			<view class="title-background">
				<text class="card-text">文章列表</text>
			</view>
			<view class="card-background">
				<view v-for="(item, index) in items" :key="index" class="card-item" @click="handleClick(index)">
					<image :src="item.background" class="card-image" />
					<view class="card-content">
						<text class="card-title">{{ item.title }}</text>
						<view class="card-label-background">
							<text class="card-label">{{ item.writer }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
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

			// this.$store.commit('cardinfo',"spring")
			let card_parameter = this.$store.state.card.parameter
			console.log(card_parameter)
			uni.request({
				url: 'http://localhost:8080/api/auth/essay/alllist',
				method: 'GET',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					// console.log(res)
					this.items = res.data
				},
				fail: err => {
					console.log(err)
				}
			})

			// uni.request({
			// 	url: 'http://localhost:8080/api/auth/essay/list',
			// 	method: 'POST',
			// 	header: {
			// 		'content-type': 'application/x-www-form-urlencoded'
			// 	},
			// 	data: {
			// 		parameter: card_parameter
			// 	},
			// 	success: res => {
			// 		// console.log(res)
			// 		this.items = res.data
			// 	},
			// 	fail: err => {
			// 		console.log(err)
			// 	}
			// })
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
				console.log("vuex aid:" + this.$store.state.card.aid)
				console.log("vuex title:" + this.$store.state.card.title)
				// todo 跳转至阅读Read
				// let aid = this.items[index].aid;
				// let title = this.items[index].title;
				console.log(uni.$u.page())
				uni.$u.route('/pages/Read/Read');
			}
      },
  }
</script>

<style lang="scss">
	.list {
		margin-top: 50rpx;
		margin-left: 25rpx;
		margin-right: 25rpx;
	}

	.title-background {
		margin-left: 20rpx;
		margin-top: 20rpx;
		width: 180rpx;
		background-color: rgba(242, 206, 43, 0.55);
		border-radius: 8rpx;
		box-shadow: 0px 2rpx 8rpx rgba(0, 0, 0, 0.15);
	}

	.card-text {
		position: relative;
		top: -14rpx;
		left: -15rpx;
		font-size: 45rpx;
		color: #000000;
		font-family: "苹方 常规";
	}

	.card-background {
		margin-top: 30rpx;
	}

	.card-item {
		display: flex;
		padding: 20rpx;
		background-color: #ffffff;
		margin-bottom: 30rpx;
		border-radius: 13rpx;
		box-shadow: 0px 2rpx 8rpx rgba(0, 0, 0, 0.15);
	}

	.card-image {
		width: 141rpx;
		height: 141rpx;
		border-radius: 10rpx;
		margin-right: 30rpx;
	}

	.card-content {
		margin-top: 10rpx;
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
</style>