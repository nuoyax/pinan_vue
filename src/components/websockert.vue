<template>
  <el-container>

    <span style="display: inline-block;width: 130px;height: 53px;border: 1px solid #D7D7D7;" @click="updateimg">
    <img :src="img" style="width: 100%;height: 100%;cursor: pointer;"/>
</span>


  </el-container>
</template>

<script>
    export default {
        name: "websockert",

      data(){
          return{
            img:"http://127.0.0.1:8081/img"

          }

      },
      mounted () {


        // WebSocket   Math.floor(Math.random()*100)
        if ('WebSocket' in window) {
          this.websocket = new WebSocket('ws://127.0.0.1:8081/websocket/'+91)
          this.initWebSocket()


        } else {
          alert('当前浏览器 Not support websocket')
        }
      },
      beforeDestroy () {
        this.onbeforeunload()
      },
      methods: {

          updateimg(event){
            let num=Math.ceil(Math.random()*10);//生成一个随机数（防止缓存）
            this.img = "http://127.0.0.1:8081/img?"+num ;

          },
        initWebSocket () {
          // 连接错误
          this.websocket.onerror = this.setErrorMessage

          // 连接成功
          this.websocket.onopen = this.setOnopenMessage

          // 收到消息的回调
          this.websocket.onmessage = this.setOnmessageMessage

          // 连接关闭的回调
          this.websocket.onclose = this.setOncloseMessage

          // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
          window.onbeforeunload = this.onbeforeunload
        },
        setErrorMessage () {
          console.log('WebSocket连接发生错误   状态码：' + this.websocket.readyState)
        },
        setOnopenMessage () {
          console.log('WebSocket连接成功    状态码：' + this.websocket.readyState)
        },
        setOnmessageMessage (event) {
          // 根据服务器推送的消息做自己的业务处理

       this.$store.state.msg+=parseInt(event.data)

          this.$message("来自服务器的消息 ："+this.$store.state.msg)


          console.log( event)
        },
        setOncloseMessage () {
          console.log('WebSocket连接关闭    状态码：' + this.websocket.readyState)
        },
        onbeforeunload () {
          this.closeWebSocket()
        },
        closeWebSocket () {
          this.websocket.close()
        }
      }
    }
</script>

<style scoped>

</style>
