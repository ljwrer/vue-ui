import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);
new Vue({
  el: 'body',
  components: { App }
});

