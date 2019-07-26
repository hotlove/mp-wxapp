import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations'

Vue.use(Vuex);

let state = {
  token: '',
  baseUrl: 'http://www.baidu.com'
}

export default new Vuex.Store({
  state,
  mutations
})
