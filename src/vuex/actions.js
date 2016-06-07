/**
 * Created by Ray on 2016/5/5.
 */
import * as types from './mutation-types'
// import api from '../api'
const api=(data)=>new Promise(function (resolve,reject) {
    setTimeout(function () {
        let random=Math.random();
        if(random>0.5){
            resolve({
                msg:"success",
                data
            })
        }else {
            reject({
                msg:"fail",
                data
            })
        }
    },1500)
});
//toast
export const toast = function ({dispatch, state:{toast:{timeout}}}, {msg,time,pos}) {
    const toast={msg,pos};
    dispatch(types.ADD_TOAST,toast);
    setTimeout(function () {
        dispatch(types.REMOVE_TOAST,toast);
    }, time ? time : timeout);
};

//add friend
export const showAddFriendDialog = function ({dispatch}, friend) {
    dispatch(types.NEW_FRIEND,friend);
    dispatch(types.TOGGLE_MODAL);
    dispatch(types.FRIEND_DIALOG,true);
};
export const closeAddFriendDialog=function ({dispatch}) {
    dispatch(types.FRIEND_DIALOG,false);
    dispatch(types.RESTORE_FRIEND);
    setTimeout(function () {
        dispatch(types.TOGGLE_MODAL);
    },200)
};
export  const addFriend=function ({dispatch, state:{toast:{timeout},friend:{newFriend}}}) {
    api(newFriend).then(function (res) {
        dispatch(types.TOGGLE_LOADING);
        toast({dispatch, state:{toast:{timeout}}},{msg:res.msg,pos:"bottom"});
        dispatch(types.ADD_FRIEND,newFriend);
    },function (res) {
        dispatch(types.TOGGLE_LOADING);
        toast({dispatch, state:{toast:{timeout}}},{msg:res.msg,pos:"bottom"})
    }).then(function () {
        closeAddFriendDialog({dispatch})
    });
    dispatch(types.TOGGLE_LOADING);
};

//modal
export const modal=function ({dispatch}) {
    dispatch(types.TOGGLE_MODAL)
};

//list
export const getListData=function ({dispatch,state:{list:{data}}},cb) {
    api("item"+data.length).then(function (res) {
        dispatch(types.ADD_LIST,res.data);
    },function (res) {
        dispatch(types.ADD_LIST,res.data);
    }).then(cb)
};
