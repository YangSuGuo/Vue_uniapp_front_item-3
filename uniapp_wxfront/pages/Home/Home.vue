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
		onLoad() {
			/**
			 *  获取文章列表
			 *  parameter 文章标签
			 *  返回 文章内容 json utf8
			 *  todo vuex
			 */
			uni.request({
				url: 'http://localhost:8080/api/auth/essay/list',
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data: {
					parameter: 'spring'
				},
				success: res => {
					console.log(res)
				},
				fail: err => {
					console.log(err)
				}
			})
		},
		data() {
			return {
				// 后台模拟数据：http://localhost:8080/api/auth/essay/list?parameter=spring
				// 文章正文：md格式【富文本解析】
				// todo 连接后台
				items: [{
						"aid": 6,
						"writer": "青空の霞光",
						"label": "spring",
						"photo": null,
						"background": "https://img1.imgtp.com/2023/03/21/SkThZL3b.jpg",
						"pageview": 0,
						"title": "SpringBoot一站式开发",
						"text": null,
						"writingtime": 1697472000000,
						"articleoverview": "我们每创建一个新的Web应用程序，基本都会使用同样的方式去整合框架，我们完全可以将一些重复的配置作为约定，只要框架遵守这个约定，为我们提供默认的配置就好，这样就不用我们再去配置了，约定优于配置！"
					},
					{
						"aid": 7,
						"writer": "青空の霞光",
						"label": "spring",
						"photo": null,
						"background": "https://img1.imgtp.com/2023/05/23/n2MSOD0o.jpg",
						"pageview": 0,
						"title": "SpringBoot其他框架",
						"text": null,
						"writingtime": 1697472000000,
						"articleoverview": "通过了解其他的SpringBoot框架，我们就可以在我们自己的Web服务器上实现更多更高级的功能。"
					},
					{
						"aid": 8,
						"writer": "青空の霞光",
						"label": "spring",
						"photo": null,
						"background": "https://img1.imgtp.com/2023/05/23/ZqwbXsd4.jpg",
						"pageview": 0,
						"title": "Linux操作系统与项目部署",
						"text": null,
						"writingtime": 1697472000000,
						"articleoverview": "肯•汤普森为首的贝尔实验室研究人员吸取了 Multics 工程计划失败的经验教训，于 1969 年实现了分时操作系统的雏形，在1970 年该操作系统正式取名为UNIX"
					}
				]
			}
		},
		computed: {
			card() {
				return this.items[0]
			}
		},
		methods: {
			handleClick(index) {
				console.log('点击了第' + (index + 1) + '篇文章')
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