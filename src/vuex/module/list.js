/**
 * Created by Ray on 2016/6/1.
 *
 *
 *
 *
 *
 */
import {
    ADD_LIST
} from '../mutation-types'
const state = {
    data:[
        "item0",
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
        "item7",
        "item8",
        "item9"
    ]
};
const mutations = {
    [ADD_LIST](state,msg){
        state.data.push(msg);
    }
};
export default {
    state, mutations
};
