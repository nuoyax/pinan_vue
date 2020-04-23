<template>
<el-container style="background-color: #151421;height: 600px">
  <el-header></el-header>

<el-row>
  <el-col :span="6"><div style="height: 100px"></div></el-col>
  <el-col :span="6"><div style="height: 100px"></div></el-col>
  <el-col :span="6"><div style="height: 100px"></div></el-col>
  <el-col :span="6">

    <h2 style="color: white">注册页面</h2>
    <el-input  v-model="user.name"  placeholder="用户名"></el-input>

    <el-input v-model="user.pass" placeholder="密码"></el-input>




        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>


  </el-col>

</el-row>

</el-container>
</template>


<script>
  import * as axios from "axios";
  import * as MessageBox from "element-ui";

  export default {
    data() {





      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          }
        }, 1000);
      };
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };

      return {
      user:{
        name:'',
        pass:''
      }

      };
    },
    methods: {
      submitForm() {

    let vm=this
        // let param = new URLSearchParams();
        // param.append("login")
let test={"username":vm.user.name,"password":vm.user.pass,"role":"guest"}
        axios({
          url: "http://127.0.0.1:8081/auth/register",
          method: "post",
          data: test
        }).then((data) => {
          // let str="zbq "+data.data.token;
          // if ("admin"==data.data.name){
          //
          //   this.$router.push('/home')
          // }else if(data.data.status=2001)
          // {
          //   this.$message.error("密码错误，请重试")
          // }
  if (data="success"){
    this.$message.success("注册成功啦")
    this.$router.push("/")
  }


          console.log(data.data)
          // this.$store.state.token=str
          // this.$cookies.set("token",data.data.token,60 * 60 * 24)

        })


      }}
  }
</script>

<style scoped>

</style>
