<template>
   <div class="modal">
       <div class="container">
           <div class="center">
               <slot name="center"></slot>
           </div>
       </div>
   </div>
</template>
<style scoped lang="scss" rel="stylesheet/scss">
    .modal{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.4);
        z-index: 9999;
        .container{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }
    }
</style>
<script>
    import lifeCycle from '../../mixin/lifeCycle'
    export default{
        mixins:[lifeCycle]
    }
</script>
