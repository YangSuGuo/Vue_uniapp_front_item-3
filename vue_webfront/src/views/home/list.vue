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
    <el-footer class="bottom" style="margin-top: 8rem">
      <el-row :gutter="10">
        <el-col :lg="8" :md="8" :sm="8" :xl="8" :xs="8">
          <div class="grid-content2 联系">
            <span>如有问题，请联系我。</span>
            <span>E-mail：3130876713@qq.com</span>
          </div>
        </el-col>
        <el-col :lg="8" :md="8" :sm="8" :xl="8" :xs="0">
          <div class="grid-content2 bg-purple"></div>
        </el-col>
        <el-col :lg="8" :md="8" :sm="8" :xl="8" :xs="0">
          <div class="grid-content2 icon">
                            <span class="icons">
                                <svg class="icon" height="40"
                                     p-id="9573" t="1683860451460"
                                     version="1.1"
                                     viewBox="0 0 1024 1024"
                                     width="50"
                                     xmlns="http://www.w3.org/2000/svg"><path
                                    d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"
                                    fill="#000000" p-id="9574"></path>
                                </svg>
                            </span>
            <span class="icons">
                                <svg class="icon" height="40" p-id="7481" t="1683860373112"
                                     version="1.1" viewBox="0 0 1040 1024" width="50"
                                     xmlns="http://www.w3.org/2000/svg"><path
                                    d="M693.260274 345.0742c11.780301 0 23.36515 0.89437 35.017538 2.172479-31.368428-146.074913-187.494255-254.578116-365.772614-254.578116-199.272509 0-362.504174 135.77022-362.504174 308.285319 0 99.541087 54.283324 181.286879 145.054677 244.786099l-36.233226 109.015879 126.744659-63.503313c45.321208 8.897647 81.681324 18.11866 126.939087 18.11866 11.394515 0 22.661116-0.512676 33.800827-1.343601-7.04137-24.26259-11.202133-49.613978-11.202133-76.05007C385.16529 473.610668 521.129938 345.0742 693.260274 345.0742L693.260274 345.0742zM498.4064 246.812245c27.398 0 45.384653 17.987676 45.384653 45.257763 0 27.139104-17.98563 45.321208-45.384653 45.321208-27.081799 0-54.346769-18.182105-54.346769-45.321208C444.059632 264.735453 471.26218 246.812245 498.4064 246.812245L498.4064 246.812245zM244.721631 337.391217c-27.206642 0-54.605665-18.182105-54.605665-45.321208 0-27.270087 27.399023-45.257763 54.605665-45.257763 27.202549 0 45.258787 17.923208 45.258787 45.257763C289.980417 319.209112 271.925203 337.391217 244.721631 337.391217L244.721631 337.391217zM244.721631 337.391217"
                                    fill="#000000" p-id="7482"></path><path
                                    d="M1024.205685 627.626437c0-144.926764-145.053654-263.031649-307.96707-263.031649-172.509982 0-308.285319 118.169353-308.285319 263.031649 0 145.308457 135.837758 263.026532 308.285319 263.026532 36.106336 0 72.529897-9.025561 108.762099-18.113543l99.410104 54.537104-27.272133-90.638323C969.922361 781.769097 1024.205685 709.37223 1024.205685 627.626437L1024.205685 627.626437zM616.252389 582.240761c-17.986653 0-36.232203-17.923208-36.232203-36.232203 0-18.051121 18.246573-36.228109 36.232203-36.228109 27.525913 0 45.385677 18.176988 45.385677 36.228109C661.637042 564.317553 643.777279 582.240761 616.252389 582.240761L616.252389 582.240761zM815.653835 582.240761c-17.860786 0-36.038798-17.923208-36.038798-36.232203 0-18.051121 18.114566-36.228109 36.038798-36.228109 27.270087 0 45.384653 18.176988 45.384653 36.228109C861.037465 564.317553 842.923922 582.240761 815.653835 582.240761L815.653835 582.240761zM815.653835 582.240761"
                                    fill="#000000" p-id="7483"></path></svg>
                            </span>
          </div>
        </el-col>
      </el-row>
    </el-footer>
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
      // withCredentials: true
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

.icon {
  text-align: right;

  .icons {
    position: relative;
    right: -90%;
  }
}

.bottom {
  width: 100%;
  height: 100%;
}

</style>