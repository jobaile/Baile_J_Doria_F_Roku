// The Vue build version to load with the `import` command

//Foundation
import '../node_modules/foundation-sites/dist/css/foundation.css';
//import '../node_modules/foundation-sites/dist/js/foundation.js';

// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
