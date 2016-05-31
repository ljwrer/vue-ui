<template  v-for="msg in messageList" >
    <div :class="messageClass" transition="bounce">{{msg}}</div>
</template>
<style scoped lang="scss" rel="stylesheet/scss">
    /*@import "~vue-animate/dist/vue-animate.min.css";*/
    .message {
        position: absolute;
        left: 50%;
        top: 50%;
        /*transform: translate(-50%, -50%);*/
        padding: 1rem;
        line-height: 1rem;
        border: 1px solid green;
    }

    .bounce-transition {
        display: inline-block; /* 否则 scale 动画不起作用 */
    }
    .bounce-enter {
        animation: bounce-in .5s;
    }
    .bounce-leave {
        animation: bounce-out .5s;
    }
    @keyframes bounce-in {
        0% {
            opacity: 0;
            transform: scale(0);
        }
        50% {
            opacity: 0.5;
            transform: scale(1.5);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    @keyframes bounce-out {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.5;
            transform: scale(1.5);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }

</style>
<script>
    export default{
        computed: {
            messageClass(){
                return ["message", this.position, this.extraClass]
            }
        },
        props: {
            show: {
                type: Boolean,
                default: false
            },
            messageList: {
                type: Array,
                required: true
            },
            position: {
                type: String,
                default: "center"
            },
            extraClass: {
                type: String
            }
        }
    }
</script>
