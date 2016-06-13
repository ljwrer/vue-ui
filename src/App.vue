<template>
    <div id="app">
        <toast v-for="toast in toastMessage" :position="toast.pos" :index="$index" transition="bounce">
            {{toast.msg}}
        </toast>
        <modal v-show="modalStatus">
            <dialog v-show="AddFriendDialogStatus" slot="center" transition="bounce" :on-clickaway="away"
                    :on-confirm="addFriend" :on-cancel="closeAddFriendDialog" :loading="AddFriendDialogLoading">
                <header>加为好友？</header>
                <avatar :name="newFriend.name" :src="newFriend.avatar"></avatar>
            </dialog>
        </modal>
        <button @click.stop="toastCenter">toast center</button>
        <button @click.stop="toastTop">toast top</button>
        <button @click.stop="toastBottom">toast bottom</button>
        <button @click.stop="showAddFriendDialog(friend)">add friend</button>
        <div class="wrapper">
            <div class="container"  v-infinite-scroll="loadingData(1)" infinite-scroll-disabled="loadingBusy" infinite-scroll-distance="100">
                <ul class="col">
                    <li class="item" :style="randomHeight()" v-for="item in leftListData">{{item}}</li>
                </ul>
                <ul class="col">
                    <li class="item" :style="randomHeight()" v-for="item in rightListData">{{item}}</li>
                </ul>
            </div>
            <p v-show="loadingBusy" class="page-infinite-loading">
                加载中...
            </p>
        </div>
    </div>
</template>

<script type="text/babel">
    import store from './vuex/store'
    import Modal from 'widget/Modal'
    import Toast from 'widget/Toast'
    import Dialog from 'widget/Dialog'
    import Avatar from 'widget/Avatar'
    import {
        toastMessage,
        AddFriendDialogStatus,
        newFriend,
        AddFriendDialogLoading,
        modalStatus,
        leftListData,
        rightListData,
        loadingBusy
    } from './vuex/getters'
    import {toast, addFriend, closeAddFriendDialog, showAddFriendDialog, modal, loadingData} from './vuex/actions'
    let count=0;
    export default {
        data(){
            return {
                a: 1,
                friend: {
                    name: "Blaze",
                    src: '',
                    id: 233
                },
                loading:false
            }
        },
        methods: {
            randomHeight(){
                let height=Math.random()*100+100+"px";
                return {
                    height:height,
                    lineHeight:height
                }
            },
            toastCenter(){
                this.toast({
                    msg: "toast center"
                });
            },
            toastTop(){
                this.toast({
                    msg: "toast top",
                    time: 10000,
                    pos: "top"
                });
            },
            toastBottom(){
                this.toast({
                    msg: "toast bottom",
                    pos: "bottom"
                });
            },
            away(){
                this.AddFriendDialogStatus && this.closeAddFriendDialog();
            }
        },
        store,
        components: {
            Toast, Dialog, Avatar, Modal
        },
        vuex: {
            getters: {
                toastMessage, AddFriendDialogStatus, newFriend, AddFriendDialogLoading,modalStatus,leftListData,rightListData,loadingBusy
            },
            actions: {
                toast, addFriend, closeAddFriendDialog, showAddFriendDialog, modal, loadingData
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
        font-family: $font-family-default;
        font-size: 0.5rem;
        background: yellowgreen;
    }

    button {
        font-size: 0.5rem;
        padding: 0.3rem;
        border: 1px solid deeppink;
        border-radius: 0.3rem;
        background: deepskyblue;
    }
    .list{
        overflow: scroll;
    }
    .item {
        border: 1px solid blueviolet;
        text-align: center;
    }
    .wrapper{
        margin-top: -5px;
        overflow: scroll;
        height: 10rem;
        border: 1px solid black;
        .container{
            display: flex;
            .col{
                border: 1px solid blue;
                flex: 1;
            }
        }
    }
</style>
