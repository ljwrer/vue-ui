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
        <!--<ul class="list" v-infinite-scroll="getListData" :infinite-scroll-distance="10">-->
            <!--<li v-for="item in listData">{{item}}</li>-->
        <!--</ul>-->
        <!--<div class="wrapper">-->
            <!--<ul v-infinite-scroll="getListData" :infinite-scroll-disabled="loading" :infinite-scroll-distance="50">-->
                <!--<li v-for="item in listData" class="page-infinite-listitem item">{{ item }}</li>-->
            <!--</ul>-->
        <!--</div>-->
        <div class="wrapper">
            <ul class="water" v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                <li class="item" :style="getStyle()" v-for="item in data">{{item.name}}</li>
            </ul>
            <p v-show="busy" class="page-infinite-loading">
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
        listData
    } from './vuex/getters'
    import {toast, addFriend, closeAddFriendDialog, showAddFriendDialog, modal, getListData} from './vuex/actions'
    export default {
        ready(){
          setTimeout(()=>[
              this.popupVisible=true
          ],2000)
        },
        data(){
            return {
                a: 1,
                friend: {
                    name: "Blaze",
                    src: '',
                    id: 233
                },
                loading:false,
                popupVisible:false,
                busy:false,
                count:0,
                data:[]
            }
        },
        methods: {
            getStyle(){
                return {
                    height:Math.random()*100+100+"px"
                }
            },
            loadMore() {
                this.busy = true;
                setTimeout(() => {
                    for (var i = 0, j = 10; i < j; i++) {
                        this.data.push({ name: this.count++ });
                    }
                    this.busy = false;
                }, 1000);
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
                toastMessage, AddFriendDialogStatus, newFriend, AddFriendDialogLoading, modalStatus, listData
            },
            actions: {
                toast, addFriend, closeAddFriendDialog, showAddFriendDialog, modal, getListData
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
        /*position: relative;*/
        /*height: 100%;*/
        /*width: 100%;*/
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
        /*height: 5rem;*/
        overflow: scroll;
    }
    .item {
        border: 1px solid black;
    }
    .wrapper{
        margin-top: -5px;
        overflow: scroll;
        height: 10rem;
        border: 1px solid black;
    }
    .water{
        column-count: 2;
        /*display: flex;*/
        /*flex-direction: row;*/
        /*flex-wrap:wrap;*/
        .item{
            /*flex-basis:50% ;*/
            /*float: left;*/
            /*display: inline-block;*/
            /*width: %;*/
        }
    }
</style>
