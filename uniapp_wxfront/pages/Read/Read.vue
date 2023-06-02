<template>
  <view class="Read">
    <view class="body-md">
      <!-- <u-parse :content="content" @navigate="navigate"></u-parse> -->
	   <mp-html :content="content" class="md"/>
    </view>
  </view>
</template>

<script>
import marked from '@/components/marked'
// import uParse from "@/components/feng-parse/parse.vue"

export default {
  onLoad() {
    let card_aid = this.$store.state.card.aid
    // this.aid = options.aid;
    // this.title = options.title;
    uni.request({
      url: 'http://localhost:8080/api/auth/essay/article',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        aid: card_aid
      },
      success: res => {
        console.log(res)
        this.content = marked(res.data.text)
      },
      fail: err => {
        console.log(err)
      }
    })
  },

  data() {
    return {
      // 测试文本
      // todo 连接后台服务器，获取文章正文并渲染。
      content: `# 哈喽`
    }
  },

  methods: {
    navigate(e) {
      console.log(e)
    }
  }
}
</script>

<style>
/* @import url("@/components/u-parse/u-parse.css"); */

.Read {
}

.body-md {
  width: 85%;
  margin: 0 auto;
  margin-top: 20rpx;
  padding: 20rpx;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.md{
  font-family: "PingFang SC";
  line-height: 1.5;
  letter-spacing: 0.4rpx;
  //word-spacing: 1rpx;
}
</style>