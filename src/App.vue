<template>
    <div id="app">
        <toast v-for="toast in toastMessage" :position="toast.pos"  :index="$index"  transition="bounce">
            {{toast.msg}}
        </toast>
        <dialog :onConfirm="addFriend" :onCancel="closeAddFriendDialog">
            <avatar name="ruby"></avatar>
        </dialog>
        <button @click="toastCenter">toast center</button>
        <button @click="toastTop">toast top</button>
        <button @click="toastBottom">toast bottom</button>
    </div>
</template>

<script>
    import store from './vuex/store'
    import Toast from 'widget/Toast'
    import Dialog from 'widget/Dialog'
    import Avatar from 'widget/Avatar'
    import {toastMessage, showToast} from './vuex/getters'
    import {toast,addFriend,closeAddFriendDialog} from './vuex/actions'
    export default {
        data(){
            return {
                a:1
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
                    pos:"top"
                });
            },
            toastBottom(){
                this.toast({
                    msg:"toast bottom",
                    pos:"bottom"
                });
            }
        },
        store,
        components: {
            Toast,Dialog,Avatar
        },
        vuex: {
            getters: {
                toastMessage
            },
            actions: {
                toast,addFriend,closeAddFriendDialog
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "sass/reset";
    @import "sass/variable";

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
