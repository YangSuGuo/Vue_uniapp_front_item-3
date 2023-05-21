<template>
    <div class="list">
        <div v-for="(item, index) in items" :key="index">
            <div :id="index" class="card">
                <div class="card-image">
                    <el-image
                            :src="item.url"
                            class="card-img"
                            fit="cover"
                            lazy>
                        <div slot="error" class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                        </div>
                    </el-image>
                </div>
                <div class="card-content">
                    <h2 class="card-title">{{ item.title }}</h2>
                    <div class="card-meta">
                        <span class="card-time">{{ item.time }}</span>
                        <p><span class="card-overview">{{ item.overview }}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// todo 夜间模式是否要给图片添加遮罩
// todo 添加卡片点击事件，点击后将aid发给后台返回文章正文
// todo 后台api，好像存在Spring Security鉴权问题，token
// todo 阅读页面施工中。。。。。。
// todo 登录界面施工中.........

import axios from "axios";

export default {
    data() {
        return {
            items: [{
                title: '卡片 1',
                time: '2023-10-17',
                overview: '示例标题',
                url: 'https://picsum.photos/400/300?random=1'
            }, {
                title: '卡片 2',
                time: '2023-10-17',
                overview: '示例标题',
                url: 'https://picsum.photos/400/300?random=1'
            }, {
                title: '卡片 3',
                time: '2023-10-17',
                overview: '示例标题',
                url: 'https://picsum.photos/400/300?random=1'
            }, {
                title: '卡片 4',
                time: '2023-10-17',
                overview: '示例标题',
                url: 'https://picsum.photos/400/300?random=1'
            }, {
                title: '卡片 5',
                time: '2023-10-17',
                overview: '示例标题',
                url: 'https://picsum.photos/400/300?random=1'
            }],
        }
    },
    methods: {},
    created() {
        // axios.post('http://localhost:8080/api/auth/essay/list?parameter=vue')
        axios.post('http://localhost:8080/api/auth/essay/list?', {
            parameter: "vue"
        })
            .then(res => {
                console.log("前端返回的res:", res)
            }).catch(err => {
            console.log("错误：" + err)
        })
    }
}
</script>

<style lang="scss" scoped>
.list {
  margin-left: -2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5px;
  padding: 1rem;
}

.card {
  //background-color: blueviolet;
  border-bottom: 2px solid #00000010;
  border-radius: 8px;
  width: 100%;
  max-width: 33.9rem;
  height: auto;
  margin: 1rem auto;

  @media (min-width: 768px) {
    width: 640px;
  }

  &-title,
  &-meta,
  &-time,
  &-overview {
    font-family: 苹方-简, Arial, sans-serif;
  }

  &-image,
  &-content {
    padding: 1.5rem;
  }

  &-image {
    width: 31rem;
    height: 20rem;
    object-fit: cover;
  }

  &-img {
    border-radius: 0.4rem;
  }

  &-content {
    margin-top: 3rem;
  }

  &-title {
    font-size: 24px;
    margin-bottom: 16px;
  }

  &-meta {
    display: flow;
    align-items: center;
    justify-content: space-between;
  }

  &-time {
    font-size: 14px;
    color: #999999;
  }

  &-overview {
    font-size: 16px;
  }
}
</style>