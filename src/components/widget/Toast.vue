<template>
    <div class="container">
        <div :class="messageClass" :style="styleObject"  v-for="msg in messageList" transition="bounce">{{msg+$index}}</div>
    </div>
</template>
<style scoped lang="scss" rel="stylesheet/scss">
    /*@import "~vue-animate/dist/vue-animate.min.css";*/
    .container{
    }
    .message {
        position: absolute;
        left: 50%;
        top:40%;
        margin: 0 auto;
        padding: 0.2rem;
        line-height: 0.1rem;
        border: 1px solid green;
        border-radius: 5px;
        background: #ffffff;
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
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes bounce-out {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }

</style>
<script>
    import lifeCycle from '../../mixin/lifeCycle'
//    this.$vm.$nextTick(function () {
//        console.log(111)
//        Array.prototype.forEach.call(this.$el.querySelectorAll("message"),function (msg) {
//            msg.style.marginLeft=-~~window.getComputedStyle(msg).width*0.5+"px"
//        })
//    });
    export default{
        mixins:[lifeCycle],
        ready(){
            console.log(this.$el);
        },
        computed: {
            messageClass(){
                return ["message", this.position, this.extraClass]
            },
            styleObject(){
                return {
                    'z-index':this.$index
                }
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
