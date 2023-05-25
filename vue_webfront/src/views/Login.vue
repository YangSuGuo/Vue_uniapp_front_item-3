<template>
    <div id="Login">
        <el-row :gutter="0">
            <el-col :lg="12" :md="12" :sm="12" :xl="12" :xs="12">
                <div class="introduce">
                    <div class="background">
                        <span style="font-size: 60px; color: white;margin-right: 80px">欢迎你</span>
                        <div class="表单框体">
                            <div class="input">
                                <el-form
                                        ref="ruleForm"
                                        :model="ruleForm"
                                        :rules="rules"
                                        class="表单"
                                        label-width="70px"
                                        status-icon>
                                    <el-form-item label="用户名：" prop="pass">
                                        <el-input
                                                v-model="ruleForm.username"
                                                autocomplete="off"
                                                clearable
                                                placeholder="请输入账号"
                                                prefix-icon="el-icon-user"
                                                style="width: 200px;opacity: 1"
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
                                                style="width: 200px;opacity: 1"
                                                type="password"
                                        ></el-input>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :lg="12" :md="12" :sm="12" :xl="12" :xs="12">
                <div class="introduce">
                    <div class="background2">
                        <div class="ok" @click="login">
                            <i class="el-icon-right" style="zoom:800%;color: white"></i>
                        </div>
<!--                        <span style="font-size: 60px; color: #24292e;margin-left: 35px">我的主人</span>-->
                    </div>
                </div>
            </el-col>
        </el-row>
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
            // todo 这似乎是个隐藏属性
            fullscreenLoading: false,
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
                if (res.data.status === 200) {
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
                } else if (res.data.status === 401) {
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
#Login{
    margin-top: 20px;
}
.introduce {
    /*border-radius: 4px;*/
    min-height: 59vh;
}

.background {
    width: 100%;
    height: 55vh;
    background-color: #24292e;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: right;
}

.表单框体 {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 300px;
    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: right;
}

.input {
    margin-top: 20px;
}

.background2 {
    width: 100%;
    height: 55vh;
    background-color: #fff;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: left;
}

.ok {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 300px;
    height: 144px;
    background-color: #24292e;
}
</style>