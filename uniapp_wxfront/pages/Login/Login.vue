<template>
	<view class="Login">
		<view class="title-background">
			<text class="text">Welcome back, Doctor</text>
		</view>
		<view class="form">
			<view class="input">
				<u--input v-model="form.username" clearable placeholder="请输入用户名" prefixIcon="account"
					prefixIconStyle="font-size: 22px;color: #909399"></u--input>
			</view>
			<view class="input">
				<u--input v-model="form.password" clearable placeholder="请输入密码" prefixIcon="lock"
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
		<u-modal :content='Modalbox.content' :show="show" :title="Modalbox.title" width="550rpx" @confirm="
        this.form.username = null;
        this.form.password = null;
        show = false;">
		</u-modal>
	</view>
</template>

<script>
	// todo 账号密码有误模态框
	// todo 输入框的数据验证判断
	export default {
		data() {
			return {
				form: {
					username: '',
					password: ''
				},
				Modalbox: {
					title: '账号密码错误！',
					content: '请仔细核对账号密码是否正确(¬‿¬)'
				},
				show: false,
			};
		},
		methods: {
			Login() {
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
							this.$store.commit('userinfo', this.form.username)
							this.$store.commit('passinfo', this.form.password)
							console.log("vuex user:" + this.$store.state.userinfo.username)
							console.log("vuex pass:" + this.$store.state.userinfo.password)
							console.log(res.data)
							console.log(uni.$u.page())
              let view = this.$store.state.userinfo.view
              switch (view) {
                case 2:
                  uni.redirectTo({
                    url: '/pages/Writingdetails/Writingdetails'
                  })
                  break;
                case 3:
                  uni.redirectTo({
                    url: '/pages/My/My'
                  })
                  break;
                default:
                  uni.redirectTo({
                    url: '/pages/Home/Home'
                  })
              }
							// todo ！== 弹出一个提示框
						} else if (res.data.status === 401) {
							this.show = true;
						} else {
							console.log("错误！！")
						}
					},
					fail: err => {
						console.log(err)
						// todo 提示错误
					}
				})
			},
			// 注册不做
			Register() {}
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