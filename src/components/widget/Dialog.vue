<template>
    <div class="dialog">
        <div class="content">
            <slot></slot>
        </div>
        <div class="btn">
            <div class="left" @click="onConfirm">确认</div>
            <div class="right" @click="onCancel">取消</div>
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
    import lifeCycle from '../../mixin/lifeCycle'
    export default{
        mixins:[lifeCycle],
        props:{
            onConfirm:{
                type:Function
            },
            onCancel:{
                type:Function
            }
        },
        components:{
        }
    }
</script>
