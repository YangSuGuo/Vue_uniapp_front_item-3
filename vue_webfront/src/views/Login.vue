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

          this.$router.push('/summary')

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
#Login {
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