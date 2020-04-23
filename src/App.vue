<template>
  <div id="app">
<!--   <h1 style="text-align: left;padding-left: 120px">-->
<!--     -->
<!--     <img style="width: 150px;height: 36px;display: inline-block;line-height: 36px"  src="./assets/pingan.png"/>中国平安保险理赔共享服务平台</h1>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    margin:0px;
    padding:0px

  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/

}
</style>
