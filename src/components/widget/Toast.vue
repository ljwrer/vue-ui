<template>
    <div :class="['container',position]">
        <div :class="messageClass" :style="styleObject"  >
            <slot></slot>
        </div>
    </div>
</template>
<style scoped lang="scss" rel="stylesheet/scss">
    /*@import "~vue-animate/dist/vue-animate.min.css";*/
    .container{
        position: absolute;
        left: 50%;
        transform-origin:left top;
        &.center{
            top:50%;
        }
        &.top{
            top:10%;
        }
        &.bottom{
            bottom: 10%;
        }
    }
    .message {
        transform: translate(-50%,-50%);
        padding: 0.5rem;
        line-height: 0.2rem;
        border: 1px solid green;
        border-radius: 1rem;
        background: #fff;
    }


</style>
<script>
    import lifeCycle from '../../mixin/lifeCycle'
    export default{
        ready(){
//            this.$el.style.marginTop=parseFloat(window.getComputedStyle(this.$el).height)*(-0.5)+"px";
//            this.$el.style.marginLeft=parseFloat(window.getComputedStyle(this.$el).width)*(-0.5)+"px";
        },
        computed: {
            messageClass(){
                return ["message",this.extraClass]
            },
            styleObject(){
                return {
                    'z-index':this.index
                }
            }
        },
        props: {
            position: {
                type: String,
                default: "center"
            },
            extraClass: {
                type: String
            },
            index:{
                type:Number
            }
        }
    }
</script>
