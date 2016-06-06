/**
 * Created by Ray on 2016/6/6.
 */
import {
    TOGGLE_MODAL
} from '../mutation-types'
const state = {
    show:false
};
const mutations = {
    [TOGGLE_MODAL](state){
        state.show=!state.show;
    }
};
export default {
    state, mutations
};
