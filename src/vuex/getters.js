/**
 * Created by Ray on 2016/5/5.
 */
export const toastMessage=state=>state.toast.messageList;

export const AddFriendDialogStatus=state=>state.friend.show;
export const newFriend=state=>state.friend.newFriend;
export const AddFriendDialogLoading=state=>state.friend.loading;

export const modalStatus=state=>state.modal.show;

export const leftListData=state=>state.list.data.filter((item,index)=>!(index%2));
export const rightListData=state=>state.list.data.filter((item,index)=>index%2);
export const loadingBusy=state=>state.list.busy;
