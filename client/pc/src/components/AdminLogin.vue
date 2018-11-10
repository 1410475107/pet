<template>
<div>
    <el-form  :model="loginForm" :rules="rules" ref="loginForm"  class="demo-loginForm" label-width="80px">
        <el-form-item label="账号：" prop="username">
            <el-input name="username" v-model="loginForm.username"  class="myinput"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="passwd">
            <el-input name="passwd" type="password" v-model="loginForm.passwd"  class="myinput"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
    </el-form>
</div>
</template>


<script>
export default {
  data: function() {
    return {
      loginForm: {
        username: "",
        passwd: ""
      },
      rules: {
        username: [
            { required: true, message: "请输入账号", trigger: "blur" },
            { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" }
        ],
        passwd: [
            { required: true, message: "请输入密码", trigger: "blur" },
            { min: 6, max: 11, message: "长度在 6 到 11 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
        let _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
            //发起ajax请求  进行数据验证
            _this.http.post('/login', _this.loginForm).then(function(res){
                console.log(res.data);
                if(res.data.r == 'ok'){
                    _this.$router.push({ path: '/list' });
                    //window.location.href
                }
            }).catch(function (error) {
                console.log(error);
            });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>

</style>
<style>
.myinput input {
  width: 180px;
  border-radius: 0;
}
</style>
