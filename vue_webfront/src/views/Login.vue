<template>
    <div id="app">
        <div class="背景">
            <div id="登录框体">
                <div v-loading="loading" class="表单框体">
                    <h1 class="登录标题">Login</h1>
                    <el-form
                            ref="ruleForm"
                            :model="ruleForm"
                            :rules="rules"
                            class="表单"
                            label-width="100px"
                            status-icon
                            style="margin-top: 60px">
                        <el-form-item label="用户名：" prop="pass">
                            <el-input
                                    v-model="ruleForm.username"
                                    autocomplete="off"
                                    clearable
                                    placeholder="请输入账号"
                                    prefix-icon="el-icon-user"
                                    style="width: 325px;opacity: 0.3"
                                    type="text"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="密 码：" prop="checkPass">
                            <el-input
                                    v-model="ruleForm.password"
                                    autocomplete="off"
                                    clearable
                                    placeholder="请输入密码"
                                    prefix-icon="el-icon-lock"
                                    show-password
                                    style="width: 325px;opacity: 0.3"
                                    type="password"
                            ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div
                                    class="登录"
                                    style="margin-top: 15px;margin-left: 200px;">
                                <el-button
                                        v-loading.fullscreen.lock="fullscreenLoading"
                                        icon="el-icon-right"
                                        round="round"
                                        style="zoom:195%; opacity: 0.7;"
                                        type="primary"
                                        @click="login">
                                </el-button>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Login",
    data() {
        return {
            ruleForm: {
                username: '',
                password: '',
            },
            rules: {
                username: [
                    {required: true, message: ' ', trigger: 'blur'},
                    {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}],
                password: [
                    {required: true, message: ' ', trigger: 'blur'},
                    {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}],
            },
        };
    },
    methods: {
        login() {
            axios.get('http://127.0.0.1/login', {
                params: {
                    name: this.ruleForm.username,
                    password: this.ruleForm.password
                }
            }).then(res => {
                if (res.data.status === 200) {
                    console.log("登录成功");
                    console.log(res.data)

                    this.$store.commit('userinfo', this.ruleForm.username)
                    this.$store.commit('passinfo', this.ruleForm.password)

                    const loading = this.$loading({
                        lock: true,
                        text: '正在加载中...',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0,0,0,0.5)'
                    });

                    setTimeout(() => {
                        loading.close();
                    }, 1500);

                    setTimeout(() => {
                        this.$router.push({path: '/Background/home'});

                        this.$notify({
                            title: '登录成功',
                            duration: 1000,
                            message: this.$createElement('i', {style: 'color: teal'}, '主页面目前不对外开放！！'),
                            type: 'warning',
                            position: 'top-right'
                        });
                    }, 1510);

                } else if (res.data.status === 202) {
                    console.log("用户名密码错误");
                    {
                        this.$notify({
                            title: '账号或密码错误',
                            duration: 1000,
                            message: this.$createElement('i', {style: 'color: teal'}, '请检查账户密码是否正确！'),
                            type: 'warning',
                            position: 'top-right'
                        });
                    }
                }
            }).catch(err => {
                console.log("登录失败" + err);
            })
        },
        zc() {
            this.$router.push({path: '/Enroll'})
            /* this.$notify({
               title: '楊蘇國',
               duration: 1000,
               message: this.$createElement('i', {style: 'color: teal'}, '注册目前并不对外开放！！'),
               type: 'warning',
               position: 'top-left'
             });*/
        }
    },
};
</script>

<style scoped>
#app {
    /*noinspection CssUnknownTarget*/
    /*  background: url("https://i.328888.xyz/2023/03/27/inNe9A.jpeg");
      width: 100%;
      height: 100%;*/
    /*position: fixed;*/
    /*background-size: 80% 80%;*/
}

#登录框体 {
    /*位置与大小*/
    /*top: 13%;*/
    /*left: 63%;*/
    /*width: 500px;*/
    /*height: 600px;*/
    /*position: absolute;*/
    /*样式*/
    /*background: rgba(255, 255, 255, 0.8);*/
    /*border-radius: 10%; !*圆角*!*/
    /*box-shadow: 5px 6px 8px rgba(74, 124, 199, 0.7); !*阴影*!*/
}

.登录标题 {
    /*位置设置*/
    margin-top: 35px;
    margin-bottom: 100px;
    /*字体设置*/
    text-align: center;
    font-size: 60px;
    font-family: Elephant, serif;
    font-style: italic;
    /*color: #606266;*/
}

.表单框体 {
    /*大小*/
    /*width: 450px;*/
    /*height: 350px;*/
    /*位置*/
    /*position: absolute;*/
    /*top: 65px;*/
    /*left: 25px;*/
}

/*.背景 {
    margin-top: 30px;
    margin-left: 30px;
}*/
</style>