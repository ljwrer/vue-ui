/**
 * Created by Ray on 2016/6/1.
 *
 *
 *
 *
 *
 */
import {
    ADD_LIST,
    UPDATE_LIST_LOADING
} from '../mutation-types'
const state = {
    data:[],
    busy:false
};
const mutations = {
    [ADD_LIST](state,msgList){
        state.data=state.data.concat(msgList);
    },
    [UPDATE_LIST_LOADING](state,status){
        state.busy=status
    }
};
export default {
    state, mutations
};
