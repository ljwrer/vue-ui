<template>
    <div class="container">
        <div class="content">
            <slot></slot>
        </div>
        <div class="btn">
            <div class="left" @click="onConfirm">确认</div>
            <div class="right" @click="onCancel">取消</div>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
    export default{
        props:{
            onConfirm:{
                type:Function
            },
            onCancel:{
                type:Function
            }
        }
    }
</script>
