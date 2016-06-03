/**
 * Created by Ray on 2016/6/1.
 */
import {
    ADD_FRIEND,
    FRIEND_DIALOG,
    NEW_FRIEND,
    RESTORE_FRIEND
} from '../mutation-types'
const state = {
    friends:[],
    newFriend:{
        name:"",
        id:"",
        avatar:""
    },
    show:false
};
const mutations = {
    [ADD_FRIEND](state,friend){
        state.friends.push(friend);
    },
    [NEW_FRIEND](state,friend){
        state.newFriend=friend;
    },
    [RESTORE_FRIEND](state){
        state.newFriend={
            name:"",
            id:"",
            avatar:""
        }
    },
    [FRIEND_DIALOG](state,show){
        state.show=show;
    }
};
export default {
    state, mutations
};
