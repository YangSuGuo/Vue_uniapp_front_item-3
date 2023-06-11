<template>
	<view class="My">
		<view class="head">
			<view class="detail">
				<view class="user">
					<image :src="user.photo" class="photo">
					</image>
					<view class="userinfo">
						<text class="name">{{ user.nickname }}</text>
						<text class="biography">年龄:{{ user.age }}</text>
						<text class="biography">{{user.introduction}}</text>
						<view class="introduction" @click="introduction">
							<view class="flag">
								<view class="text">
									<u-icon class="icon" color="#FFF" name="account" size="60rpx"></u-icon>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="main">
				<view class="function">
					<view class="TotalViews icons">
						<text class="TotalViews-text">{{ TotalViews }}</text>
					</view>
					<text class="TotalViews-title">文章阅读量</text>
				</view>
				<view class="function" @click="Page()">
					<view class="icons">
						<u-icon name="https://picdl.sunbangyan.cn/2023/06/10/vmeeel.png" size="40"></u-icon>
					</view>
					<text class="TotalViews-title">阅读排行</text>
				</view>
				<view class="function" @click="introduction()">
					<view class="icons">
						<u-icon name="https://picdl.sunbangyan.cn/2023/06/10/vmeerp.png" size="40"></u-icon>
					</view>
					<text class="TotalViews-title">个人简介</text>
				</view>
				<view class="function" @click="logout()">
					<view class="icons">
						<u-icon name="https://picdl.sunbangyan.cn/2023/06/10/vmeynj.png" size="40"></u-icon>
					</view>
					<text class="TotalViews-title">退出登录</text>
				</view>
			</view>
		</view>
		<view class="myarticle">
			<text class="Myarticle">我的文章</text>
		</view>
		<view class="bottom">
			<view class="list">
				<view class="card">
					<view class="card-background">
						<view v-for="(item, index) in items" :key="index" class="card-item">
							<view class="card-item2" @click="handleClick(index)">
								<image :src="item.background" class="card-image" />
								<view class="card-content">
									<view class="card-title01">
										<text class="card-title">{{ item.title }}</text>
									</view>
									<view class="card-label-background">
										<text class="card-label">{{ item.writer }}</text>
									</view>
								</view>
							</view>
							<view class="delete">
								<u-button :ripple="true" ripple-bg-color="#909399" shape="square" size="mini"
									type="error" @click="delete_index(index)">
									<u-icon class="icon" color="#FFF" name="close" size="30rpx"></u-icon>
								</u-button>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-modal :content='Modalbox.content' :show="show" showCancelButton width="550rpx" @cancel="show = false"
			@confirm="this.delete_index_Areyousure();show = false;">
		</u-modal>
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
				user: [],
				items: [],
				TotalViews: null,
				Modalbox: {
					content: '是否删除文章！'
				},
				show: false,
			}
		},
		onLoad() {
      this.$store.commit('viewinfo', 3)
			if (this.$store.state.userinfo.username == null || this.$store.state.userinfo.password == null) {
				uni.redirectTo({
					url: '/pages/Login/Login'
				})
			} else {
				this.getlist()
				/**
				 * 获取用户信息
				 * @param user(String) 登录用户名
				 * @return  json 用户信息
				 */
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
					},
					fail: err => {
						console.log(err)
					}
				})
			}
		},
		computed: {
			card() {
				return this.items[0]
			}
		},
		methods: {
			getlist() {
				/**
				 * 获取文章列表
				 * @param parameter(String) 文章分类
				 * @return  json 卡片列表
				 */
				uni.request({
					url: 'http://localhost:8080/api/auth/essay/list',
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					data: {
						parameter: this.$store.state.userinfo.username
					},
					success: res => {
						// 冒泡排序（按浏览量进行排序）
						let top = res.data
						console.log("开始排序")
						let time = new Date().getTime();
						let TotalViews = 0;
						console.log(top)
						for (let i = 0; i < top.length; i++) { // 负责top【i】的遍历
							for (let j = i + 1; j < top.length; j++) { // 负责top【i+1】的遍历
								console.log(top[i].aid);
								console.log(top[j].aid);
								if (top[i].pageview <= top[j].pageview) { // 准备临时变量当中间值，来交换位置
									let t = top[i]
									top[i] = top[j]
									top[j] = t
								}
							}
							TotalViews += top[i].pageview
						}
						console.log("完成耗时：" + (new Date().getTime() - time) + "ms")
						console.log("页面总浏览量：" + TotalViews);
						console.log(top)
						this.items = top
						this.TotalViews = TotalViews;
					},
					fail: err => {
						console.log(err)
					}
				})
			},
			handleClick(index) {
				console.log('点击了第' + (index + 1) + '篇文章')
				this.$store.commit('aidinfo', this.items[index].aid)
				this.$store.commit('titleinfo', this.items[index].title)
				console.log(uni.$u.page())
				uni.$u.route('/pages/Read/Read');
			},
			delete_index(index) {
				this.show = true
				console.log('点击了第' + (index + 1) + '篇文章')
				this.$store.commit('aidinfo', this.items[index].aid)
			},
			delete_index_Areyousure() {
				let aid = this.$store.state.card.aid
				console.log(aid)
				uni.request({
					url: 'http://localhost:8080/api/auth/essay/deletelist',
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					data: {
						aid: aid
					},
					success: res => {
						console.log("删除成功")
						uni.request({
							url: 'http://localhost:8080/api/auth/essay/list',
							method: 'POST',
							header: {
								'content-type': 'application/x-www-form-urlencoded'
							},
							data: {
								parameter: this.$store.state.userinfo.username
							},
							success: res => {
								// 冒泡排序（按浏览量进行排序）
								let top = res.data
								console.log("开始排序")
								let time = new Date().getTime();
								let TotalViews = 0;
								console.log(top)
								for (let i = 0; i < top.length; i++) { // 负责top【i】的遍历
									for (let j = i + 1; j < top.length; j++) { // 负责top【i+1】的遍历
										console.log(top[i].aid);
										console.log(top[j].aid);
										if (top[i].pageview <= top[j]
											.pageview) { // 准备临时变量当中间值，来交换位置
											let t = top[i]
											top[i] = top[j]
											top[j] = t
										}
									}
									TotalViews += top[i].pageview
								}
								console.log("完成耗时：" + (new Date().getTime() - time) + "ms")
								console.log("页面总浏览量：" + TotalViews);
								console.log(top)
								this.items = top
								this.TotalViews = TotalViews;
							},
							fail: err => {
								console.log(err)
							}
						})
					},
					fail: err => {
						console.log(err)
					}
				})
			},
			introduction() {
				uni.$u.route('/pages/Resume/Resume');
			},
			Page() {
				uni.$u.route('/pages/Ranking/Ranking');
			},
      logout(){
        this.$store.commit('userinfo', null)
        this.$store.commit('passinfo', null)
        uni.redirectTo({
          url: '/pages/Home/Home'
        });
      }
		},
	}
</script>

<style>
	.My {}

	.head {
    background-image: url("https://picdl.sunbangyan.cn/2023/06/11/vj3tx8.png");
    background-size: cover;
		height: 520rpx;
		border-radius: 0 0 60rpx 60rpx;
		box-shadow: inset 0px -2px 10px 0px #EDEDED,
			inset 0px 2px 6px 0px #6a737d;
	}

	.detail {
		width: 90%;
		height: 250rpx;
		border-bottom-left-radius: 40rpx;
		border-bottom-right-radius: 40rpx;
		margin: 0 auto;
		box-shadow: 0px 2px 4px #888;
    background-image: url("https://picdl.sunbangyan.cn/2023/06/11/vnvq5u.png");
    background-size: cover;
	}

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
		background-color: rgba(126, 198, 153, 0.5);
		border-radius: 20px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.TotalViews {
		width: 80rpx;
		height: 80rpx;
		border-radius: 20rpx;
		background-color: rgba(242, 206, 43, 0.55);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.TotalViews-text {
		color: #e2777a;
		font-family: "苹方 常规";
		font-size: 30rpx;
		font-weight: bold;
	}

	.icons {
		position: relative;
		left: 20%;
	}

	.TotalViews-title {
		font-size: 30rpx;
		font-family: "苹方 常规";
		color: #2d2d2d;
	}

	.function {}

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

	.card-item2 {
		display: flex;
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

	.card-title01 {
		width: 200px;
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

	.delete {
		position: absolute;
		top: -5rpx;
		right: -5rpx;
		zoom: 75%;
	}
</style>