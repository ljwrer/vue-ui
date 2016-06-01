/**
 * Created by Ray on 2016/5/5.
 */
import * as types from './mutation-types'
// import api from '../api'

//toast
export const toast = function ({dispatch, state:{toast:{timeout}}}, {msg,time,pos}) {
    const toast={msg,pos}
    dispatch(types.ADD_TOAST,toast);
    setTimeout(function () {
        dispatch(types.REMOVE_TOAST,toast);
    }, time ? time : timeout);
};

//add friend
export const showAddFriendDialog = function ({dispatch}, friend) {
    dispatch(types.ADD_FRIEND,friend);
    dispatch(types.SHOW_FRIEND_DIALOG);
};
export const closeAddFriendDialog=function ({dispatch}) {
    dispatch(types.CLEAR_FRIEND);
    dispatch(types.HIDE_FRIEND_DIALOG);
};
export  const addFriend=function ({dispatch, state:{toast:{timeout},friends:{person}}}) {
    api.addFriend(person).then(function (res) {
        toast({dispatch, state:{toast:{timeout}}},{msg:res.msg})
        //TODO 加入好友列表
    },function (res) {
        toast({dispatch, state:{toast:{timeout}}},{msg:res.msg})
    }).finally(function () {
        closeAddFriendDialog({dispatch})
    })
};


