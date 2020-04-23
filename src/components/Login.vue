<template>
  <div>
    <el-container style="height:auto;position:relative;">
      <div style="width: 1350px;margin: 0 auto">
        <el-header style="height: 110px;padding-top: 50px">

          <el-row style="">

            <el-col :span="3"><img src="../assets/pingan.png"/></el-col>
            <el-col :span="10"><h2 style="line-height: 33px;"> 中国平安保险理赔共享服务平台</h2></el-col>
          </el-row>

        </el-header>
      </div>
    </el-container>

    <el-container style="width: 100%;height: 550px;background:slategray;position: relative">
      <!--    <img src="../assets/15860087679154.jpg"/>-->
      <div style="width: 1350px;margin: 0 auto">


        <el-main style="height: 678px;">


          <el-row style="margin-top: 60px">

            <el-col :span="6">
              <div hidden style="background: transparent;width: 320px;height:350px;display: block"></div>
            </el-col>

            <el-col :span="6">
              <div hidden style="background: transparent;width: 320px;height:350px;display: block"></div>
            </el-col>
            <el-col :span="6">
              <div hidden style="background: transparent;width: 320px;height:350px;display: block"></div>
            </el-col>


            <el-col :span="6">
              <div
                style="background: #EC5504;width: 320px;height:350px;display: block;color: white;border: 1px solid #F16C34">

                <el-row style="margin-top: 10px">
                  <el-col :span="24"><h3>用户登录</h3></el-col>
                </el-row>
                <el-row style="margin-top: 10px">
                  <el-col :span="6" >账户</el-col>
                  <el-col :span="16">
                    <el-input style="    height: 32px!important;" v-model="user.name" type="text"></el-input>
                  </el-col>
                </el-row>
                <el-row style="margin-top: 10px">
                  <el-col :span="6" >密码</el-col>
                  <el-col :span="16">
                    <el-input v-model="user.pass" type="text"></el-input>
                  </el-col>
                </el-row>
                <el-row style="margin-top: 10px">
                  <el-col :span="6" >验证码</el-col>
                  <el-col :span="8">
                    <el-input v-model="user.ver" type="text"></el-input>
                  </el-col>
                  <el-col :span="8"><img @click="updateimg" :src="img"
                                         style="width: 100%;height: 100%;cursor: pointer;"/></el-col>
                </el-row>
                <el-row style="margin-top: 24px">
                  <el-col :span="24">
                    <el-button @click="submitForm">登录</el-button>
                    <el-button>重置</el-button>
                  </el-col>
                </el-row>

              </div>

            </el-col>
          </el-row>


        </el-main>

        <!--<el-row>-->
        <!--  <el-col :span="6"><div style="height: 100px"></div></el-col>-->
        <!--  <el-col :span="6"><div style="height: 100px"></div></el-col>-->
        <!--  <el-col :span="6"><div style="height: 100px"></div></el-col>-->
        <!--  <el-col :span="6">-->
        <!--    <h2 style="color: white">登陆页面</h2>-->

        <!--    <el-input  v-model="user.name"  placeholder="用户名"></el-input>-->

        <!--    <el-input v-model="user.pass" placeholder="密码"></el-input>-->


        <!--        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->

        <!--    <el-col> <el-button type="primary"  style="margin-top: 40px" ><router-link to="/register">注册</router-link></el-button></el-col>-->


        <!--  </el-col>-->
        <!--</el-row>-->
      </div>
    </el-container>

    <el-container style="height:auto;position:relative;">
      <div style="width: 1350px;margin: 0 auto">

        <h5 style="text-align: center;color: rgba(56, 56, 56, 0.94);text-space: 10px"> 中国平安保险理赔共享服务平台 版权所有
          京ICP备0000000号-2 作者:Buqing</h5>

      </div>
    </el-container>
  </div>
</template>


<script>
  import * as axios from "axios";
  import * as MessageBox from "element-ui";

  export default {
    data() {


      return {
        img: "http://127.0.0.1:8081/img",

        user: {
          name: '',
          pass: '',
          ver:''
        },
        token: ''

      };
    },
    created() {

      //  this.isLogin();
    },
    methods: {
      updateimg(event) {
        let num = Math.ceil(Math.random() * 10);//生成一个随机数（防止缓存）
        this.img = "http://127.0.0.1:8081/img?" + num;

      },

      abs() {

        const loading = this.$loading({
          lock: true,
          text: '加载中...',
          spinner: 'el-icon-loading',
          background: 'rgba(236, 85, 4,0.5)',

        });

        let count = 0;
        let timer = setInterval(() => {
          let tm = setTimeout(() => {
            loading.close()
          }, 500)
          ++count
          console.log(count)


          if (count == 2 || count > 2) {


            clearTimeout(tm)
            this.$message.success("登陆成功啦")
            this.$router.push('/home')
            this.$cookies.set("token", this.token, 60 * 60 * 24)
            clearInterval(timer)
            count = 0

          }
        }, 1000)


      },
      isLogin() {
        let str = this.$cookies.get("token")


        if (str === null) {

          this.$router.push("/")
          this.$message('登录失败或过期')


        } else {
          console.log(str)
          console.log(this.$store.state.token)
          this.$router.push("/home")
        }

      },
      submitForm() {

        let vm = this
        // let param = new URLSearchParams();
        // param.append("login")
        let test = {"username": vm.user.name, "password": vm.user.pass,"verifyID":vm.user.ver}
        axios({
          url: "http://127.0.0.1:8081/auth/login",
          method: "post",
          data: JSON.stringify(test)
        }).then((data) => {
          let str = "zbq " + data.data.token;
          if ("200" == data.data.status) {

            this.token = data.data.token
            this.$store.state.username=data.data.name


            this.abs()
          } else if (data.data == 2001) {
            this.updateimg()
            this.$message.error("密码错误，请重试" +data.data )
          }else{
            this. updateimg()
            this.$message.error("密码错误，请重试" +data.data )
          }


          console.log(data.data)
          this.$store.state.token = str


        })


      }
    }
  }
</script>

<style scoped>
   input .el-input__inner{
  height: 32px !important;
}
</style>
