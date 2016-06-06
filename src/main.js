import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
// Vue.transition('j-bounce', {
//     css: false,
//     enter: function (el, done) {
//         // 元素已被插入 DOM
//         // 在动画结束后调用 done
//         let center=el.querySelector(".center");
//         center.classList.add("bounce-enter");
//         center.addEventListener("animationend",function () {
//             console.log("enter");
//             done();
//         })
//     },
//     enterCancelled: function (el) {
//         // $(el).stop()
//     },
//     afterEnter: function (el) {
//         let center=el.querySelector(".center");
//         center.classList.remove("bounce-enter");
//     },
//     leave: function (el, done) {
//         // 与 enter 相同
//         let center=el.querySelector(".center");
//         center.classList.add("bounce-leave");
//         center.addEventListener("animationend",function () {
//             console.log("leave");
//             done();
//         })
//     },
//     afterLeave: function (el) {
//         let center=el.querySelector(".center");
//         center.classList.remove("bounce-leave");
//     },
//     leaveCancelled: function (el) {
//         $(el).stop()
//     }
// });
new Vue({
  el: 'body',
  components: { App }
});

