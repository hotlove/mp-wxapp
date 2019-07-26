import Vue from 'vue';
import store from '../store/index';
import http from '../api/http.js';
import moment from 'moment';
// 全局store
global.$store = Vue.prototype.$store = store;
// 全局http请求
global.$http = Vue.prototype.$http = http;
// 时间工具
global.moment = Vue.prototype.moment = moment;
