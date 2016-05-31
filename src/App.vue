<template>
    <div id="app">
        <toast :message-list="toastMessage" :show="showToast"></toast>
        <button @click="toast('hello')">toast</button>
    </div>
</template>

<script>
    import store from './vuex/store'
    import Toast from 'widget/Toast'
    import {toastMessage, showToast} from './vuex/getters'
    import {toast} from './vuex/actions'
    export default {
        store,
        components: {
            Toast
        },
        vuex: {
            getters: {
                toastMessage, showToast
            },
            actions: {
                toast
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
        position: absolute;
        height: 100%;
        width: 100%;
        font-family: $font-family-default;
    }

    button {
        width: 5rem;
        height: 2rem;
        background: deepskyblue;
        font-size: 1rem;
    }

    .toast {
        border: 1px solid yellowgreen;
        border-radius: 5px;
        line-height: 1rem;
        background: deeppink;
        text-align: center;
        transition: all .2s;
    }

</style>
