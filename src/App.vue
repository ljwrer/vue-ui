<template>
    <div id="app">
        <template v-for="toast in toastMessage">
            <toast :positon="toast.pos"  :index="$index">
                {{toast.msg}}
            </toast>
        </template>
        <button @click="onClick">toast</button>
    </div>
</template>

<script>
    import store from './vuex/store'
    import Toast from 'widget/Toast'
    import {toastMessage, showToast} from './vuex/getters'
    import {toast} from './vuex/actions'
    export default {
        data(){
            return {
                a:1
            }
        },
        methods:{
            onClick(){
                this.toast("toast"+this.a);
                this.a++;
            }
        },
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
        position: relative;
        height: 100%;
        width: 100%;
        font-family: $font-family-default;
        background: yellowgreen;
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
