const Vue = require('vue').default;
const weex = require('weex-vue-render');
weex.init(Vue);
const App = require('./App.vue');
App.el = '#root'
new Vue(App)