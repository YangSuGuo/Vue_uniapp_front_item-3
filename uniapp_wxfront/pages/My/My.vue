<template>
	<view class="My">
		<view class="head">
			<view class="detail">
				<view class="user">
					<image :src="user.photo" class="photo">
					</image>
					<view class="userinfo">
						<text class="name">{{ user.Username }}</text>
						<text class="biography">{{user.Biography}}</text>
						<view class="introduction">
							<view class="flag">
								<view class="text"><u-icon class="icon" color="#FFF" name="account"
										size="60rpx"></u-icon></view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="main">
				<view>1</view>
				<view>2</view>
				<view>3</view>
				<view>4</view>
			</view>
		</view>
		<view class="myarticle">
			<text class="Myarticle">我的文章</text>
		</view>
		<view class="bottom">
			<view class="list">
				<view class="card">
					<view class="card-background">
						<view v-for="(item, index) in items" :key="index" class="card-item" @click="handleClick(index)">
							<image :src="item.background" class="card-image" />
							<view class="card-content">
								<text class="card-title">{{ item.title }}</text>
								<view class="card-label-background">
									<text class="card-label">{{ item.writer }}</text>
								</view>
							</view>
							<view class="delete">
								<u-button :ripple="true" ripple-bg-color="#909399" shape="square" size="mini"
									type="error">
									<u-icon class="icon" color="#FFF" name="close" size="30rpx"></u-icon>
								</u-button>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	// todo 关于登录与个人管理的逻辑，在个人资料里检查vuex是否为空，空就跳转登录
	// todo 可选：加入持久化！！
	// todo 个人简介页面
	// todo 我的文章删除管理的实现
	// todo 功能、详情区完善
	export default {
		data() {
			return {
				user: {
					photo: "https://img1.imgtp.com/2023/06/06/W0xQ9dw2.png",
					Username: "楊蘇國",
					Biography: "一个饱食终日的人。"
				},
				items: []
			}
		},
		onLoad() {
			/**
			 * 获取文章列表
			 * @param parameter 文章分类
			 * @return  json 卡片列表
			 */
			// todo 参数可变！！【vuex】
			uni.request({
				url: 'http://localhost:8080/api/auth/essay/list',
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				data: {
					parameter: "YSG"
				},
				success: res => {
					this.items = res.data
				},
				fail: err => {
					console.log(err)
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
				console.log(uni.$u.page())
				uni.$u.route('/pages/Read/Read');
			}
		},
	}
</script>

<style>
	.My {}

	.head {
		height: 520rpx;
		border-radius: 0 0 60rpx 60rpx;
		box-shadow: 0px -2px 10px 0px inset #EDEDED, 0px 2px 6px 0px inset #6a737d;
	}

	.detail {
		width: 90%;
		height: 250rpx;
		border-bottom-left-radius: 40rpx;
		border-bottom-right-radius: 40rpx;
		margin: 0 auto;
		box-shadow: 0px 2px 4px #888;
	}

	.detail {}

	.user {
		display: flex;
		flex-direction: end;
		align-items: end;
		padding: 20rpx;
		position: relative;
	}

	.photo {
		width: 180rpx;
		height: 180rpx;
		border-radius: 20px;
	}

	.userinfo {
		display: flex;
		flex-direction: column;
		margin-top: 20rpx;
		margin-left: 35rpx;
		letter-spacing: 2rpx;
	}

	.name {
		font-family: "苹方 常规";
		font-size: 40rpx;
		color: #000000;
	}

	.biography {
		font-family: "苹方 常规";
		margin-top: 10rpx;
		color: #7a7a7a;
		font-weight: 500;
		font-size: 28rpx;
	}

	.introduction {
		position: absolute;
		top: 0rpx;
		right: 10rpx;
		display: flex;
		zoom: 75%;
		font-family: "苹方 常规";
	}

	.flag {
		width: 80rpx;
		height: 40px;
		background-color: #009961;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
	}

	.text {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.text::after {
		content: '';
		position: absolute;
		left: 0;
		top: 50rpx;
		border-width: 16px 20px;
		border-color: #009961;
		border-style: solid;
		border-bottom: 16px solid transparent;
	}

	.main {
		width: 90%;
		height: 180rpx;
		margin: 40rpx auto;
		background-color: #7ec69980;
		border-radius: 20px 20px 20px 20px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.myarticle {
		margin-top: 40rpx;
		font-family: "苹方 常规";
		font-size: 40rpx;
		font-weight: 500;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.Myarticle {}

	.bottom {
		height: 100%;
		width: 98%;
		margin: 20rpx auto;
		border-radius: 40rpx;
	}

	.list {
		margin-top: 40rpx;
		margin-left: 25rpx;
		margin-right: 25rpx;
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
		position: relative;
		overflow: hidden;
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

	.delete {
		position: absolute;
		top: -5rpx;
		right: -5rpx;
		zoom: 75%;
	}
</style>