<template>
    <div class="container">
        <img class="avatar" :src="src||defaultAvatar"/>
        <div class="name">{{name}}</div>
    </div>
</template>
<style>

</style>
<script>
import defaultAvatar from '../../assets/avatar.png'
export default {
    ready(){
      console.log(defaultAvatar)
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
