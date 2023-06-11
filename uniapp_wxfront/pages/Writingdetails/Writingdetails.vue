<template>
	<view>
		<u--image :showLoading="true" :src="src" class="image" height="400rpx" width="100%"></u--image>
		<view class="overall">
			<u--form ref="uForm" :model="Writing" :rules="rules" class="form" labelPosition="left">
				<u-form-item ref="item1" borderBottom class="item" label="标题" prop="userInfo.title">
					<u--input v-model="Writing.userInfo.title" border="none" class="input" placeholder="请输入文章标题">
					</u--input>
				</u-form-item>
				<u-form-item ref="item2" borderBottom class="item" label="分类" prop="userInfo.classify"
					@click="show = true;">
					<u--input v-model="Writing.userInfo.classify" border="none" class="input" disabled
						disabledColor="#f5f5f5" placeholder="请选择文章分类"></u--input>
					<u-icon slot="right" class="icon" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item ref="item3" borderBottom class="item" label="封面" prop="userInfo.background">
					<u-input v-model="Writing.userInfo.background" border="none" class="input" placeholder="文章封面图床链接">
						<u--text slot="prefix" margin="0 3px 0 0" text="https://" type="tips"></u--text>
					</u-input>
				</u-form-item>
				<u-form-item ref="item4" borderBottom class="item" label="简介" prop="userInfo.intro">
					<u--textarea v-model="Writing.userInfo.intro" autoHeight class="textarea" count
						placeholder="不低于3字，不多于100字"></u--textarea>
				</u-form-item>
			</u--form>
			<u-button class="SubmitButton" customStyle="margin-top: 50px;width: 80%;" text="下一步" type="primary"
				@click="submit"></u-button>
			<u-button class="ResetButton" customStyle="margin-top: 10px;width: 80%;" text="重置" type="error"
				@click="reset"></u-button>
			<u-action-sheet :actions="list" :closeOnClickOverlay="true" :show="show" round="20rpx" title="文章分类"
				@close="show=false" @select="selectClick">
			</u-action-sheet>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: "https://picdl.sunbangyan.cn/2023/06/11/p2uvs0.png",
				Writing: {
					userInfo: {
						title: "",
						classify: "",
						background: "",
						intro: "",
					},
				},
				rules: {
					'userInfo.title': {
						type: 'string',
						required: true,
						whitespace: true,
						message: '请填写标题',
						trigger: ['blur', 'change']
					},
					'userInfo.classify': {
						type: 'string',
						required: true,
						message: '请选择分类',
						trigger: ['blur', 'change']
					},
					'userInfo.background': {
						type: 'string',
						required: true,
						whitespace: true,
						message: '请填写封面地址',
						trigger: ['blur', 'change']
					},
					'userInfo.intro': {
						type: 'string',
						min: 3,
						max: 100,
						whitespace: true,
						required: true,
						message: '请填入简介',
						trigger: ['blur', 'change']
					},
				},
				list: [{
					name: 'Vue'
				}, {
					name: 'Spring'
				}, {
					name: 'Java'
				}, {
					name: 'Uniapp'
				}, {
					name: 'Node'
				}, {
					name: 'Chat'
				}, ],
				show: false
			}
		},
		onLoad() {
			this.$store.commit('viewinfo', 2)
			if (this.$store.state.userinfo.username == null || this.$store.state.userinfo.password == null) {
				// console.log("登录检查准备。。。")
				uni.redirectTo({
					url: '/pages/Login/Login'
				})
			}
		},
		methods: {
			selectClick(e) {
				console.log(e.name)
				this.Writing.userInfo.classify = e.name
			},
			submit() {
				this.$refs.uForm.validate().then(res => {
					console.log(this.Writing.userInfo)
					let background = "https://" + this.Writing.userInfo.background

					this.$store.commit('classifyinfo', this.Writing.userInfo.classify)
					this.$store.commit('backgroundinfo', background)
					this.$store.commit('introinfo', this.Writing.userInfo.intro)
					this.$store.commit('titleinfo', this.Writing.userInfo.title)

					console.log(this.$store.state.card)
					uni.$u.route('/pages/Writing/Writing');
				}).catch(errors => {
					uni.$u.toast('请检查全部是否正确填写！')
				})
			},
			reset() {
				this.Writing.userInfo.title = "";
				this.Writing.userInfo.classify = "";
				this.Writing.userInfo.background = "";
				this.Writing.userInfo.intro = "";
			},
		}
	}
</script>

<style>
	.overall {
		//display: flex;
		//flex-direction: column;
		//align-items: center;
		padding: 20rpx;
	}

	.image {}
</style>