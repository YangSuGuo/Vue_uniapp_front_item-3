<template>
    <el-container id="app">
        <div class="主体">
            <el-header class="顶栏">
                <el-row :gutter="10">
                    <el-col :lg="5" :md="6" :sm="7" :xl="5" :xs="8">
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
                    <el-col :lg="7" :md="9" :sm="7" :xl="5" :xs="0">
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
                <div id="home">
                    <router-view/>
                </div>
                <el-footer style="margin-top: 8rem">
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
            </el-main>
        </div>
    </el-container>
</template>

<script>

export default {
    // todo 用户名需要vuex存储，
    // todo 可选：持久化方案 1，springboot框架持久化，2.vuex，添加插件持久化，3.cook存储，4。使用浏览器本地化存储
    data() {
        return {
            dark: false,
            Login: this.$store.state.userinfo.user
        }
    },
    methods: {
        day() {
            this.dark = !this.dark;
            if (this.dark) {
                window.document.documentElement.setAttribute("data-theme", 'dark');
            } else {
                window.document.documentElement.setAttribute("data-theme", 'light');
            }
        },
        YSG() {
            // user:YSG
            // pass:5409
            this.$router.push('login')
        },
        vue() {
            this.$store.commit('cardinfo', 'vue')
            console.log(this.$store.state.card.parameter)
            this.$router.push('/')
        },
        node() {
            this.$store.commit('cardinfo', 'node')
            console.log(this.$store.state.card.parameter)
            this.$router.push('/')
        },
        java() {
            this.$store.commit('cardinfo', 'java')
            console.log(this.$store.state.card.parameter)
            this.$router.push('/')
        },
        spring() {
            this.$store.commit('cardinfo', 'spring')
            console.log(this.$store.state.card.parameter)
            this.$router.push('/')
        },
        uniapp() {
            this.$store.commit('cardinfo', 'uniapp')
            console.log(this.$store.state.card.parameter)
            this.$router.push('/')
        },
        chat() {
            this.$store.commit('cardinfo', 'chat')
            console.log(this.$store.state.card.parameter)
            this.$router.push('/')
        },

    },
    mounted() {
        window.document.documentElement.setAttribute("data-theme", 'light');
    },
    created() {
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/common/common';

#app {
  @include background_color("background_color");
  @include font_color("text-color");
}

.主体 {
  margin: 7.5rem 10rem 0;
  //max-width: 135rem;
  width: 100%;
  height: 100%;
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

.导航栏 span:hover {
  color: #ff000090;
}

.导航栏 span:active {
  color: #000;
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

.icon {
  text-align: right;
}

.icons {
  position: relative;
  right: -90%;
}
</style>