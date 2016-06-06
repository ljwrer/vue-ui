<template>
    <div id="app">
        <toast v-for="toast in toastMessage" :position="toast.pos"  :index="$index"  transition="bounce">
            {{toast.msg}}
        </toast>
        <modal v-show="AddFriendDialogStatus">
            <dialog v-show="AddFriendDialogStatus" slot="center" transition="bounce" :on-clickaway="away" :on-confirm="addFriend" :on-cancel="closeAddFriendDialog" :loading="AddFriendDialogLoading">
                <header>加为好友？</header>
                <avatar :name="newFriend.name" :src="newFriend.avatar"></avatar>
            </dialog>
        </modal>
        <button @click="toastCenter">toast center</button>
        <button @click="toastTop">toast top</button>
        <button @click="toastBottom">toast bottom</button>
        <button @click.stop="showAddFriendDialog(friend)">add friend</button>
    </div>
</template>

<script>
    import store from './vuex/store'
    import Modal from 'widget/Modal'
    import Toast from 'widget/Toast'
    import Dialog from 'widget/Dialog'
    import Avatar from 'widget/Avatar'
    import {toastMessage,AddFriendDialogStatus,newFriend,AddFriendDialogLoading,modalStatus} from './vuex/getters'
    import {toast,addFriend,closeAddFriendDialog,showAddFriendDialog,modal} from './vuex/actions'
    export default {
        transitions:{
          'bounce':{
              afterLeave: function (el) {
                  this.modal()
              }
          }
        },
        data(){
            return {
                a:1,
                friend:{
                    name:"Blaze",
                    src:'',
                    id:233
                }
            }
        },
        methods:{
            toastCenter(){
                this.toast({
                    msg:"toast center"
                });
            },
            toastTop(){
                this.toast({
                    msg:"toast top",
                    time:10000,
                    pos:"top"
                });
            },
            toastBottom(){
                this.toast({
                    msg:"toast bottom",
                    pos:"bottom"
                });
            },
            away(){
                this.AddFriendDialogStatus&&this.closeAddFriendDialog();
            }
        },
        store,
        components: {
            Toast,Dialog,Avatar,Modal
        },
        vuex: {
            getters: {
                toastMessage,AddFriendDialogStatus,newFriend,AddFriendDialogLoading,modalStatus
            },
            actions: {
                toast,addFriend,closeAddFriendDialog,showAddFriendDialog,modal
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "sass/reset";
    @import "sass/variable";
    @import "sass/transition";
    html {
        width: 100%;
        height: 100%;
    }

    body {
        width: 100%;
        height: 100%;
    }

    #app {
        position: relative;
        height: 100%;
        width: 100%;
        font-family: $font-family-default;
        background: yellowgreen;
    }

    button {
        padding: 0.1rem;
        border-radius: 5px;
        background: deepskyblue;
    }
</style>
