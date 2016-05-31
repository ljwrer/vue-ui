/**
 * Created by Ray on 2016/5/9.
 */
import {
    TOGGLE_TOAST,
    ADD_TOAST,
    REMOVE_TOAST
} from '../mutation-types'
const state = {
    show: false,
    messageList: [],
    timeout: 3000
};
const mutations = {
    [TOGGLE_TOAST](state){
        state.show = !state.show;
    },
    [ADD_TOAST](state, msg){
        state.messageList.push(msg);
    },
    [REMOVE_TOAST](state){
        state.messageList.pop();
    }
};
export default {
    state, mutations
};
