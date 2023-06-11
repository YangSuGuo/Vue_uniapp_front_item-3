<template>
	<view class="list">
		<view class="card">
			<view class="title-background">
				<text class="card-text" @click="show = true">文章列表</text>
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
		<u-action-sheet :actions="list" :closeOnClickOverlay="true" :show="show" round="20rpx" title="文章分类"
			@close="show=false" @select="selectClick"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 后台数据：http://localhost:8080/api/auth/essay/list?parameter=spring
				items: [],
				list: [{
						name: 'ALL'
					},
					{
						name: 'Vue'
					},
					{
						name: 'Spring'
					},
					{
						name: 'Java'
					},
					{
						name: 'Uniapp'
					},
					{
						name: 'Node'
					},
					{
						name: 'Chat'
					},
				],
				show: false
			}
		},
		onLoad() {
			this.getalllist()
		},
		computed: {
			card() {
				return this.items[0]
			},
		},
		methods: {
			getalllist() {
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
						// console.log(res)
						this.items = res.data
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
				// todo 跳转至阅读Read
				console.log(uni.$u.page())
				uni.$u.route('/pages/Read/Read');
			},
			CategorizedList(card_parameter) {
				// 分类查询文章列表
				uni.request({
					url: 'http://localhost:8080/api/auth/essay/list',
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					data: {
						parameter: card_parameter
					},
					success: res => {
						console.log(res)
						this.items = res.data
					},
					fail: err => {
						console.log(err)
					}
				})
			},
			selectClick(index) {
				console.log(index);
				let index_ysg = index.name;
				let card_parameter = this.$store.state.card.parameter
				switch (index_ysg) {
					case "ALL":
						if (card_parameter === "ALL") {
							console.log("无言以对")
						} else {
							this.$store.commit('cardinfo', "ALL")
							this.getalllist()
						}
						break;
					case "Vue":
						if (card_parameter === "vue") {
							console.log("无言以对")
						} else {
							this.$store.commit('cardinfo', "vue")
							console.log(this.$store.state.card.parameter)
							this.CategorizedList(this.$store.state.card.parameter);
						}
						break;
					case "Spring":
						if (card_parameter === "spring") {
							console.log("无言以对")
						} else {
							this.$store.commit('cardinfo', "spring")
							console.log(this.$store.state.card.parameter)
							this.CategorizedList(this.$store.state.card.parameter);
						}
						break;
					case "Java":
						if (card_parameter === "java") {
							console.log("无言以对")
						} else {
							this.$store.commit('cardinfo', "java")
							console.log(this.$store.state.card.parameter)
							this.CategorizedList(this.$store.state.card.parameter);
						}
						break;
					case "Uniapp":
						if (card_parameter === "uniapp") {
							console.log("无言以对")
						} else {
							this.$store.commit('cardinfo', "uniapp")
							console.log(this.$store.state.card.parameter)
							this.CategorizedList(this.$store.state.card.parameter);
						}
						break;
					case "Node":
						if (card_parameter === "node") {
							console.log("无言以对")
						} else {
							this.$store.commit('cardinfo', "node")
							console.log(this.$store.state.card.parameter)
							this.CategorizedList(this.$store.state.card.parameter);
						}
						break;
					default:
						// chat
						if (card_parameter === "chat") {
							console.log("无言以对")
						} else if (card_parameter !== "chat") {
							this.$store.commit('cardinfo', "chat")
							console.log(this.$store.state.card.parameter)
							this.CategorizedList(this.$store.state.card.parameter);
						} else {
							console.log("错误")
						}
				}
			}
		},
	}
</script>

<style lang="scss">
	.list {
		margin-top: 60rpx;
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