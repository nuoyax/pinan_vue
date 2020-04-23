<template>


  <el-container >





    <el-header style="">

      <el-row>
        <el-col :span="6"><h2>中国平安保险理赔共享服务平台</h2></el-col>
        <el-col :span="6"><div hidden style="width: 100%;height: 70px;display: block"></div></el-col>
        <el-col :span="6">  <div hidden style="width: 100%;height: 70px;display: block"></div></el-col>
        <el-col :span="6" style="height: 70px;padding-top: 20px">

<span >用户:{{this.$store.state.username}}</span>
          <el-button  @click="exit()"  >退出</el-button> <el-button  @click="getTask()" >查询</el-button>

          <div style="display: inline-block;width: 70px;height: 40px;margin-left: 10px;position: relative">
            <el-badge :value="this.$store.state.msg" class="item">       <el-button >  消息</el-button>  </el-badge>

          </div>

  
        </el-col>

      </el-row>







    </el-header>



    <el-container>


 <el-container>
        <el-aside width="200px" style="height:700px;background: #EC5504">

        </el-aside>
 </el-container>
      <el-container>
      <el-main>


          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="id"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="username"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="password"
              label="地址">
            </el-table-column>

            <el-table-column
              prop="role"
              label="地址">
            </el-table-column>
          </el-table>





      </el-main></el-container>
    </el-container>
  </el-container>





</template>

<script>
    import * as axios from "axios";

    export default {
        name: "Home",
      data(){
     return{
       tableData: [],

     }

        },

      mounted() {
       // // this.$message(this.$store.state.token)
       //   str = this.$cookies.get("token")
       //
       //  str2=this.$store.state.token
       //  if (str === null ){
       //
       //    this.$router.push("/")
       //    this.$message('登录失败或过期')
       //
       //
       //  } else {
       //    console.log(str)
       //    console.log(this.$store.state.token)
       //    this.$message(this.$store.state.token)
       //  }

      },
      created() {


        //this.$message(this.$store.state.token)
        this.isLogin();

      },
      methods:{

           abs(){

             const loading = this.$loading({
               lock: true,
               text: 'Loading',
               spinner: 'el-icon-loading',
               background: 'rgba(0, 0, 0, 0.7)'
             });

             let count=0;
             let timer=setInterval(()=>{
               let tm=setTimeout(()=>{loading.close()},1000)
               ++count
               console.log(count)


               if (count==2 || count>2)
               {

                 this.$cookies.set("token","",-999999)
                 clearTimeout(tm)
                 this.isLogin();
                 count=0

                 clearInterval(timer)

               }
             },1000)


           },

          isLogin(){
            let str = this.$cookies.get("token")


            if (str === null ){

              this.$router.push("/")
              this.$message('登录失败或过期')


            } else {
              console.log(str)
              console.log(this.$store.state.token)
              this.$message(this.$store.state.token)
            }

          },

          exit(){
            // this.abs()
            this.$cookies.set("token","",-999999)

            this.isLogin();



          }
          ,
          getTask(){

            // let test={"username":"admin","password":"admin3"}
            axios({
              url: "http://127.0.0.1:8081/tasks/getUsers",
              method: "get",
              headers:{"Authorization":"zbq "+this.$cookies.get("token")}
            }).then((data) => {

                this.tableData=data.data





              console.log(data.data)
             // this.$message(JSON.stringify(data.data))

              // this.$store.state.token=str
              // this.$cookies.set("token",data.data.token,60 * 60 * 24)

            })

          }








      }


    }
</script>

<style scoped>
  .item {

  }

  sup.el-badge__content{
    right: 15px !important;
    top: 17px !important;

  }
</style>
