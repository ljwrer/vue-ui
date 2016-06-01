/**
 * Created by Ray on 2016/5/9.
 */
import {
    TOGGLE_TOAST,
    ADD_TOAST,
    REMOVE_TOAST
} from '../mutation-types'
const state = {
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
    [REMOVE_TOAST](state,toast){
        state.messageList.$remove(toast);
    }
};
export default {
    state, mutations
};
