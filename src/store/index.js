import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
export default new Vuex.Store({
  state:{
    token:'',
    username:'',
    msg:0,

  }
})


