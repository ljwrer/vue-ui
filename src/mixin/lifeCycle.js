/**
 * Created by Ray on 2016/5/19.
 */
export default {
    init(){
        console.log("init")
    },
    created(){
        console.log("created")
    },
    beforeCompile(){
        console.log("beforeCompile")
    },
    compiled(){
        console.log("compiled")
    },
    ready(){
        console.log("ready")
    },
    attached(){
        console.log("attached")
    },
    detached(){
        console.log("detached")
    },
    beforeDestroy(){
        console.log("beforeDestroy")
    },
    destroyed(){
        console.log("destroyed")
    }
}
