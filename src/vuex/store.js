/**
 * Created by Ray on 2016/5/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import toast from './module/toast'
import friend from './module/friend'
Vue.use(Vuex);
const modules={
  toast,friend
};
const store=new Vuex.Store({
  modules
});
export default store
