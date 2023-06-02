<template>
    <div class="list">
        <div v-for="(item, index) in items" :key="index" @click="handleClick(index)">
            <div :id="index" class="card">
                <div class="card-image">
                    <el-image
                            :src="item.background"
                            class="card-img"
                            fit="cover"
                            lazy>
                        <div slot="error">
                            <i class="el-icon-picture-outline" style="zoom:1500%"></i>
                        </div>
                    </el-image>
                </div>
                <div class="card-content">
                    <h2 class="card-title">{{ item.title }}</h2>
                    <div class="card-meta">
                        <span class="card-time">{{ new Date(item.writingtime).toLocaleDateString() }}</span>
                        <p><span class="card-overview">{{ item.articleoverview }}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// todo 夜间模式是否要给图片添加遮罩
// todo 当后台返回的数据为空时，要不要添加一个空状态提示
// todo 添加卡片点击事件，点击后将aid发给后台返回文章正文【已解决】
// todo 是否添加卡片点击动画 【css动画orJS动画orUI框架的自带动画】
// todo 后台api，好像存在Spring Security鉴权问题token[已解决]
// todo 阅读页面施工中。。。。。。90%  ok
// todo 登录界面施工中....50%  ok
import axios from "axios";

export default {
    data() {
        return {
            items: []
        }
    },
    methods: {
        //列表点击事件，列表中index个中的aid
        handleClick(index) {
            this.$store.commit('aidinfo', this.items[index].aid)
            this.$store.commit('titleinfo', this.items[index].title)
            console.log(this.$store.state.card.aid)
            console.log(this.$store.state.card.title)
            this.$router.push('/Read')
        },
    },
    mounted() {
        this.$store.watch(
            (state) => state.card.parameter,
            () => {
                // console.log('成功')
                axios.post('http://localhost:8080/api/auth/essay/list?', {
                    parameter: this.$store.state.card.parameter
                }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    // withCredentials: true
                }).then(res => {
                    this.items = res.data
                    // console.log("前端返回的res:", res)
                }).catch(err => {
                    console.log("错误：" + err)
                })
            }
        );
    },

    created() {
        // todo 报错找不到parameter[无影响]
      axios.post('http://localhost:8080/api/auth/essay/list?', {
        parameter: this.$store.state.card.parameter
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        withCredentials: true
      }).then(res => {
        this.items = res.data
        // console.log("前端返回的res:", res)
      }).catch(err => {
        console.log("错误：" + err)
      })
    },

}
</script>

<style lang="scss" scoped>
.list {
  height: 80vh;
  margin-left: -2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5px;
  padding: 1rem;
}

.card {
  //background-color: blueviolet;
  //border-bottom: 2px solid #00000010;
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
    width: 31.5rem;
    height: 23.5rem;
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
    word-wrap: break-word;
  }
}

.card {
  position: relative;
  transition: transform .3s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>