/**
 * Created by Ray on 2016/5/5.
 */
import * as types from './mutation-types'
// import api from '../api'
export const toast = function ({dispatch, state:{toast:{timeout}}}, msg, time,pos) {
    dispatch(types.ADD_TOAST,{msg,pos});
    setTimeout(function () {
        dispatch(types.REMOVE_TOAST);
    }, time ? time : timeout);
};


