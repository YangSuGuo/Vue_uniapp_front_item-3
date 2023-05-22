<template>
    <div id="app">
        <div class="背景">
            <div id="登录框体">
                <div class="表单框体">
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
            axios.post('http://localhost:8080/api/auth/login', {
                username: this.ruleForm.username,
                password: this.ruleForm.password
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                withCredentials: true
            },).then(res => {
                if (res.status === 200) {
                    console.log("登录成功");

                    this.$store.commit('userinfo', this.ruleForm.username)
                    this.$store.commit('passinfo', this.ruleForm.password)

                    this.$router.push('/')

                    this.$notify({
                        title: '欢迎你，我的主人',
                        duration: 1000,
                        message: this.$createElement('i', {style: 'color: teal'}, '祝你有美好的一天！'),
                        type: 'success',
                        position: 'top-right'
                    });
                } else if (res.status === 401) {
                    console.log("用户名密码错误");
                    console.log(JSON.stringify(res.data));
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
    },
};
</script>

<style scoped>

</style>