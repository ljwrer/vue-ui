/**
 * Created by Ray on 2016/5/5.
 */
import * as types from './mutation-types'
//util
// import api from '../api'
const api = (function () {
    const normal = (data, chance = 1,time=1500)=>new Promise(function (resolve, reject) {
        setTimeout(function () {
            let random = Math.random();
            if (random >= 1 - chance) {
                resolve({
                    msg: "success",
                    data
                })
            } else {
                reject({
                    msg: "fail",
                    data
                })
            }
        }, time)
    });
    const list = (seed=0, tol=1, no = 10)=> {
        let data = [];
        for (let i = 0; i < no; i++) {
            data.push(seed + tol * i);
        }
        return normal(data);
    };
    return {normal, list}
})();

//toast
export const toast = function ({dispatch, state:{toast:{timeout}}}, {msg, time, pos}) {
    const toast = {msg, pos};
    dispatch(types.ADD_TOAST, toast);
    setTimeout(function () {
        dispatch(types.REMOVE_TOAST, toast);
    }, time ? time : timeout);
};

//add friend
export const showAddFriendDialog = function ({dispatch}, friend) {
    dispatch(types.NEW_FRIEND, friend);
    dispatch(types.TOGGLE_MODAL);
    dispatch(types.FRIEND_DIALOG, true);
};
export const closeAddFriendDialog = function ({dispatch}) {
    dispatch(types.FRIEND_DIALOG, false);
    dispatch(types.RESTORE_FRIEND);
    setTimeout(function () {
        dispatch(types.TOGGLE_MODAL);
    }, 200)
};
export const addFriend = function ({dispatch, state:{toast:{timeout}, friend:{newFriend}}}) {
    api.normal(newFriend, 0.7).then(function (res) {
        dispatch(types.TOGGLE_LOADING);
        toast({dispatch, state: {toast: {timeout}}}, {msg: res.msg, pos: "bottom"});
        dispatch(types.ADD_FRIEND, newFriend);
    }, function (res) {
        dispatch(types.TOGGLE_LOADING);
        toast({dispatch, state: {toast: {timeout}}}, {msg: res.msg, pos: "bottom"})
    }).then(function () {
        closeAddFriendDialog({dispatch})
    });
    dispatch(types.TOGGLE_LOADING);
};

//modal
export const modal = function ({dispatch}) {
    dispatch(types.TOGGLE_MODAL)
};

//list
export const loadingData = function ({dispatch, state:{list:{data}}},direction) {
    let seed=0;
    if(direction>0){
        seed=data[data.length-1]?data[data.length-1]+direction:0;
    }else {
        seed=data[0]?data[0]+direction:0;
    }
    dispatch(types.UPDATE_LIST_LOADING,true);
    api.list(seed, direction).then(function (res) {
        dispatch(types.ADD_LIST, res.data);
        dispatch(types.UPDATE_LIST_LOADING,false);
    });
};
