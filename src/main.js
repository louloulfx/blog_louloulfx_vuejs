import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export const bus = new Vue();
new Vue({
  el: '#app',
  render: h => h(App)
})
