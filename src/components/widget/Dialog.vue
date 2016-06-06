<template>
    <div class="dialog" v-on-clickaway="onClickaway"  >
        <div class="content" >
            <slot></slot>
        </div>
        <div class="btn">
            <clip-loader :loading="loading"></clip-loader>
            <div v-show="!loading" class="left" @click="onConfirm">确认</div>
            <div v-show="!loading" class="right" @click="onCancel">取消</div>
        </div>
    </div>
</template>
<style scoped lang="scss" rel="stylesheet/scss">
/*.container{*/
    /*display: flex;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*align-items: center;*/
    /*justify-content: center;*/
    .dialog{
        background: #fff;
        opacity: 1;
        .content{
            text-align: center;
        }
        .btn{
            display: flex;
            justify-content:space-around;
        }
    }
/*}*/

</style>
<script>
    import { mixin as clickaway } from 'vue-clickaway';
    import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
    import lifeCycle from '../../mixin/lifeCycle'
    export default{
        mixins:[lifeCycle,clickaway],
        props:{
            loading:{
                type:Boolean,
                default:false
            },
            onConfirm:{
                type:Function
            },
            onCancel:{
                type:Function
            },
            onClickaway:{
                type:Function
            }
        },
        components:{
            ClipLoader
        }
    }
</script>
