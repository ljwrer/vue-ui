/**
 * Created by Ray on 2016/5/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import toast from './module/toast'
import friend from './module/friend'
import modal from './module/modal'
import list from './module/list'
Vue.use(Vuex);
const modules={
  toast,friend,modal,list
};
const store=new Vuex.Store({
  modules
});
export default store
