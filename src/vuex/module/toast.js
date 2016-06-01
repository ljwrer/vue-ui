/**
 * Created by Ray on 2016/5/9.
 */
import {
    TOGGLE_TOAST,
    ADD_TOAST,
    REMOVE_TOAST
} from '../mutation-types'
const state = {
    show: true,
    messageList: [],
    timeout: 2000
};
const mutations = {
    [TOGGLE_TOAST](state){
        state.show = !state.show;
    },
    [ADD_TOAST](state, toast){
        state.messageList.push(toast);
    },
    [REMOVE_TOAST](state){
        state.messageList.shift();
    }
};
export default {
    state, mutations
};
