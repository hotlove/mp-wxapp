import Vue from 'vue';
import App from './App';
import MpvueRouterPatch from 'mpvue-router-patch';
import store from './store/index';

// 辅助js
import "./helper/index";

Vue.use(MpvueRouterPatch);
Vue.config.productionTip = false;
// App.mpType = 'app';

const app = new Vue({
  mpType:'app',
  store,
  ...App
});
// const app = new Vue(App)
app.$mount();

// export default {
//   config: {
//     // pages: [
//     //   '^pages/count/main'
//     // ],
//     // 注意，页面级可配置属性相当于只是`src/main.js`中配置里的`window`部分
//     "navigationBarTitleText": "文章列表页面",
//     "backgroundTextStyle": "light",
//     "navigationBarBackgroundColor": "#fff",
//     "navigationBarTextStyle": "black"
//   }
// }
