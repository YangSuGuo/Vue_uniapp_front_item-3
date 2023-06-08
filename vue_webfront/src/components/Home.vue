<template>
  <el-container id="app">
    <div class="主体">
      <el-header class="顶栏">
        <el-row :gutter="10">
          <el-col :lg="5" :md="6" :sm="7" :xl="5" :xs="0">
            <div class="grid-content bg-purple">
              <span class="文本 标题">YSG~</span>
              <el-tooltip class="item" content="夜间模式" effect="dark" placement="bottom">
                <span class="文本 开关" @click="day">O!O</span>
              </el-tooltip>
            </div>
          </el-col>
          <el-col :lg="8" :md="5" :sm="4" :xl="10" :xs="0">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :lg="7" :md="9" :sm="7" :xl="5" :xs="24">
            <div class="grid-content bg-purple 导航栏">
              <span class="文本 导航 vue" @click="vue">VUE</span>
              <span class="文本 导航 node" @click="node">NODE</span>
              <span class="文本 导航 java" @click="java">JAVA</span>
              <span class="文本 导航 spring" @click="spring">SPRING</span>
              <span class="文本 导航 uniapp" @click="uniapp">UNIAPP</span>
              <span class="文本 导航 chat" @click="chat">CHAT</span>
            </div>
          </el-col>
          <el-col :lg="4" :md="4" :sm="6" :xl="4" :xs="0">
            <div class="grid-content bg-purple-light 用户栏" @click="YSG">
              <span class="文本 用户" style="zoom:40%">{{ Login }}</span>
              <div style="height: 4rem;width: 4rem;background-color: #24292e;margin-left: 1rem;border-radius: 4px;">
                <i class="el-icon-user-solid" style="zoom: 300%;color: white"></i>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main class="主要">
        <router-view/>
      </el-main>
    </div>
  </el-container>
</template>

<script>
import {mapState} from "vuex";
// todo 可选：持久化方案 1，springboot框架持久化，2.vuex，添加插件持久化，3.cook存储，4。使用浏览器本地化存储
export default {
  computed: {
    ...mapState({
      Login: (state) => state.userinfo.user
    }),
  },
  methods: {
    day() {
      this.dark = !this.dark;
      this.$store.commit("darkinfo", this.dark);
      if (this.dark) {
        window.document.documentElement.setAttribute("data-theme", "dark");
      } else {
        window.document.documentElement.setAttribute("data-theme", "light");
      }
    },
    YSG() {
      // user:YSG
      // pass:5409
      if (this.Login !== "Login" || this.Login === "YSG") {
        this.$notify({
          title: '哦,上帝,你不会有健忘症吧？',
          duration: 1000,
          message: this.$createElement('i', {style: 'color: teal'}),
          type: 'success',
          position: 'top-right',
        });
        this.$router.push("summary");
      } else {
        this.$router.push("login");
      }

    },
    vue() {
      this.$store.commit("cardinfo", "vue");
      console.log(this.$store.state.card.parameter);
      this.$router.push("/");
    },
    node() {
      this.$store.commit("cardinfo", "node");
      console.log(this.$store.state.card.parameter);
      this.$router.push("/");
    },
    java() {
      this.$store.commit("cardinfo", "java");
      console.log(this.$store.state.card.parameter);
      this.$router.push("/");
    },
    spring() {
      this.$store.commit("cardinfo", "spring");
      console.log(this.$store.state.card.parameter);
      this.$router.push("/");
    },
    uniapp() {
      this.$store.commit("cardinfo", "uniapp");
      console.log(this.$store.state.card.parameter);
      this.$router.push("/");
    },
    chat() {
      this.$store.commit("cardinfo", "chat");
      console.log(this.$store.state.card.parameter);
      this.$router.push("/");
    },
  },
  mounted() {
    window.document.documentElement.setAttribute("data-theme", "light");
  },
  created() {
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common/common';

#app {
  @include background_color("background_color");
  @include font_color("text-color");
}

.主体 {
  // todo 响应式间隔
  margin: 7.5rem 10rem 0;
  //max-width: 135rem;
  width: 100%;
  height: 100%;
}

@media (max-width: 1000px) {
  .主体 {
    margin: 1rem 2rem 0;
  }
}

.主要 {
  width: 100%;
  height: 100%;
}

//滚动条伪类【自定义样式】
::-webkit-scrollbar {
  display: none;
}

.grid-content {
  border-radius: 4px;
  min-height: 70px;
  //不可选中
  -webkit-touch-callout: none;
  user-select: none;
}

.文本 {
  font-size: 6.1rem;
  font-family: "Source Sans 3 Semibold", serif;
  text-align: center;
  writing-mode: horizontal-tb;
}

.导航栏 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.导航栏 span:hover,
.导航栏 span:active,
.用户栏 span:hover,
.用户栏 span:active {
  color: #ff000090;
}

.开关 {
  font-family: Broadway, serif;
}

.导航栏 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.用户栏 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.导航 {
  font-family: "Source Sans 3", serif;
  font-size: 2rem;
  margin-right: 15px;
}

.登录 {
  font-family: "Source Sans 3", serif;
  font-size: 3rem;
}
</style>