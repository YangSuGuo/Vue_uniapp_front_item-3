<template>
	<view class="Login">
		<view class="title-background">
			<text class="text">Welcome back, Doctor</text>
		</view>
		<view class="form">
			<view class="input">
				<u--input v-model="form.username" placeholder="请输入用户名" prefixIcon="account"
					prefixIconStyle="font-size: 22px;color: #909399"></u--input>
			</view>
			<view class="input">
				<u--input v-model="form.password" placeholder="请输入密码" prefixIcon="lock"
					prefixIconStyle="font-size: 22px;color: #909399" type="password"></u--input>
			</view>
			<u-button style="margin-top: 40rpx;width: 600rpx;" type="primary" @click="Login">登录</u-button>
			<view class="register">
				<text>没有账号？</text>
				<text class="link-text" @click="Register">问mysql</text>
			</view>
			<view class="third-login">
				<text>第三方装饰登录</text>
				<view class="icons">
					<image class="icon" src="/static/icons/qq.png"></image>
					<image class="icon" src="/static/icons/wx1.png"></image>
					<image class="icon" src="/static/icons/zfb.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// todo 连接服务器，验证登录信息。
	export default {
		data() {
			return {
				form: {
					username: '',
					password: ''
				}
			};
		},
		methods: {
			Login() {
				this.$store.commit('userinfo', this.form.username)
				this.$store.commit('passinfo', this.form.password)
				console.log("vuex user:" + this.$store.state.userinfo.username)
				console.log("vuex pass:" + this.$store.state.userinfo.password)
				uni.request({
					url: 'http://localhost:8080/api/auth/login',
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					data: {
						username: this.form.username,
						password: this.form.password
					},
					success: res => {
						if (res.data.status === 200) {
							// todo 登录验证完跳转个人页面
							console.log(res.data)
							// todo ！== 弹出一个提示框
						}
					},
					fail: err => {
						console.log(err)
						// todo 提示错误
					}
				})
			},
			Register() {
				// uni.navigateTo({
				// 	url: '/pages/login/register'
				// });
			}
		}
	};
</script>

<style scoped>
	.Login {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 80vh;
	}

	.title-background {
		width: 90%;
		/* height: 50rpx; */
		background-color: rgba(242, 206, 43, 0.4);
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
		border-radius: 10rpx;
		padding: 1rpx;

		margin-top: 10rpx;
		margin-bottom: 50rpx;
	}

	.text {
		position: relative;
		top: -30rpx;
		left: 15rpx;
		font-size: 65rpx;
		color: #000000;
		font-family: "Source Sans 3 Semibold";
	}

	.form {
		width: 80%;
		background-color: #fff;
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
		border-radius: 10rpx;
		padding: 40rpx;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.input {
		width: 100%;
		padding: 20rpx 0;
	}

	.register {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 20rpx;
	}

	.link-text {
		color: #007aff;
		margin-left: 10rpx;
	}

	.third-login {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.icons {
		margin-top: 20rpx;
		gap: 40rpx;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.icon {
		width: 90rpx;
		height: 90rpx;
	}
</style>