import Vue from 'vue'
import App from './App'
// import MintUI from 'mint-ui';
// import 'mint-ui/lib/style.css';

// Vue.use(MintUI);
var infiniteScroll =  require('vue-infinite-scroll');
Vue.use(infiniteScroll)

new Vue({
  el: 'body',
  components: { App }
});

