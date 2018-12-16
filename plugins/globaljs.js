import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'
import globaljs from '../assets/global.js'
import api from '../assets/api.js'
Vue.prototype.$api=api;
Vue.use(globaljs);
Vue.prototype.$axios=axios;
Vue.prototype.$qs=Qs;
