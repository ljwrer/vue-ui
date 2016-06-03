import Vue from 'vue'
import App from './App'
import $ from 'jquery'
/* eslint-disable no-new */
Vue.transition('fade', {
    css: false,
    enter: function (el, done) {
        // 元素已被插入 DOM
        // 在动画结束后调用 done
        $(el).find(".center")
            .css('opacity', 0)
            .animate({ opacity: 1 }, 1000, done)
    },
    enterCancelled: function (el) {
        $(el).stop()
    },
    leave: function (el, done) {
        // 与 enter 相同
        $(el).find(".center").animate({ opacity: 0 }, 1000, done)
    },
    leaveCancelled: function (el) {
        $(el).stop()
    }
})
new Vue({
  el: 'body',
  components: { App }
});

