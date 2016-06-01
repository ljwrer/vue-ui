/**
 * Created by Ray on 2016/5/19.
 */
export default {
    route: {
        data(){
            console.log("data")
        },
        activate(){
            console.log("activate")
        },
        deactivate(){
            console.log("deactivate")
        },
        canActivate(){
            console.log("canActivate")
        },
        canDeactivate(){
            console.log("canDeactivate")
        },
        canReuse(){
            console.log("canReuse")
        }
    }
}
