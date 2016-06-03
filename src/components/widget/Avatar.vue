<template>
    <div class="container">
        <img class="avatar" :src="src||defaultAvatar"/>
        <div class="name">{{name}}</div>
    </div>
</template>
<style scoped lang="scss" rel="stylesheet/scss">
.container{
    display: flex;
    height: 2rem;
    align-items: center;
    .avatar{
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        margin: 0 0.2rem;
    }
    .name{
        flex:1;
        padding: 0 2rem;
    }
}
</style>
<script>
import defaultAvatar from '../../assets/avatar.png'
export default {
    data(){
        return {
            defaultAvatar
        }
    },
    props:{
        name:{
            type:String
        },
        src:{
            type:String
        }
    }
}
</script>
