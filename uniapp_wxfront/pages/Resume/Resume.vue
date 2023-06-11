<template>
	<view class="biography">
		<image :src="src" class="image" />
		<view class="main">
			<view class="title">
				<image :src="user.photo" class="photo" />
				<view class="text">
					<text class="user">{{ user.nickname }}</text>
					<text class="introduce">{{ user.introduction }}</text>
				</view>

				<view class="life">
					<text class="time">
						<text class="prominent">经历</text>
						<text
							class="digit">{{Math.floor((new Date().getTime()-user.birthday)/(1000 * 60 * 60 * 24))}}</text>
						<text class="sky">天</text>
					</text>
					<text class="deputy">你从未放弃生活</text>
				</view>
			</view>
			<u-gap bg-color="#f5f5f5" height="0"></u-gap>
			<view class="category">
				<view class="category1">
					<text class="field">性别</text>
					<text class="recording">{{ user.gender }}</text>
				</view>
				<view class="category1">
					<text class="field">年龄</text>
					<text class="recording">{{ user.age }}</text>
				</view>
				<view class="category1">
					<text class="field">生日</text>
					<text class="recording"> {{$u.timeFormat(user.birthday, 'yyyy年mm月dd日')}}</text>
				</view>
				<view class="category1">
					<text class="field">现居住地</text>
					<text class="recording">{{ user.address }}</text>
				</view>
				<view class="category1">
					<text class="field">联系方式</text>
					<text class="recording"><text class="field">手机号：</text>
						{{ user.cellphone }}</text>
					<text class="recording"><text class="field">电子邮箱：</text>
						{{ user.email }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// todo 参数vuex动态化 ok
	export default {
		data() {
			return {
				user: [],
				src: 'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c3218d6d32e90012f09dc8/16238398704488826924.png',
			};
		},
		onLoad() {
			uni.request({
				url: 'http://localhost:8080/api/auth/UserInformation',
				method: 'POST',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				data: {
					user: this.$store.state.userinfo.username
				},
				success: res => {
					this.user = res.data
					console.log(res)
				},
				fail: err => {
					console.log(err)
				}
			})
		},
		methods: {},
	};
</script>

<style>
	.image {
		width: 100%;
		height: 330rpx;
	}

	.title {
		display: flex;
		align-items: center;
		margin-left: 20rpx;
		margin-top: -50rpx;
		background-color: #FFF;
		box-shadow: -8px 1px 10px 10px #FFF;
	}

	.text {
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	.user {
		font-size: 36rpx;
		font-weight: bold;
		margin-bottom: 10rpx;
	}

	.introduce {
		font-size: 24rpx;
		line-height: 50rpx;
		color: #999999;
		display: block;
	}

	.photo {
		width: 180rpx;
		height: 180rpx;
		border-radius: 20rpx;
	}

	.life {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		margin-top: -30rpx;
	}

	.time {
		font-size: 30rpx;
		font-weight: bold;
		color: #333333;
		text-align: center;
		//margin-bottom: 20rpx;
		margin-top: -10rpx;
	}

	.prominent {
		font-size: 44rpx;
		color: #ff9900;
		//margin-top: 55rpx;
		margin-left: 8rpx;
		position: absolute;
		//z-index: 99;
	}

	.digit {
		position: relative;
		top: 20%;
		left: 20%;
		font-size: 80rpx;
		color: #00bfff;
	}

	.sky {
		position: relative;
		left: 20%;
		//top: 20%;
	}

	.deputy {
		line-height: 0;
		margin-left: 100rpx;
		font-size: 24rpx;
		color: #999999;
	}

	.category {
		display: flex;
		justify-content: left;
		flex-direction: column;
		padding: 40rpx;
		line-height: 55rpx;
		font-family: "苹方 常规";
	}

	.category1 {
		display: flex;
		justify-content: left;
		flex-direction: column;
		//background-color: #f2f2f2;
		margin-bottom: 20rpx;
	}

	.field {
		color: #999999;
		font-size: 30rpx;
	}

	.recording {}
</style>