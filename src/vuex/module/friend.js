/**
 * Created by Ray on 2016/6/1.
 */
import {
    ADD_FRIEND,
    CLEAR_FRIEND,
    TOGGLE_FRIEND_DIALOG,
    SHOW_FRIEND_DIALOG,
    HIDE_FRIEND_DIALOG
} from '../mutation-types'
const state = {
    person:{
        name:"",
        image:"",
        id:""
    },
    show:false
};
const mutations = {
    [ADD_FRIEND](state){
        state.show = !state.show;
    },
    [CLEAR_FRIEND](state, toast){
        state.messageList.push(toast);
    },
    [TOGGLE_FRIEND_DIALOG](state){
        state.show=!state.show;
    },
    [SHOW_FRIEND_DIALOG](state){
        state.show=true;
    },
    [HIDE_FRIEND_DIALOG](state){
        state.show=false;
    }
};
export default {
    state, mutations
};
