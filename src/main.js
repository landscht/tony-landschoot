import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './plugins/vue-router';
import VueRouter from "vue-router";
import MeInfo from "./pages/me-info";
import Parcours from "./pages/Parcours";
import Projects from "./pages/Projects";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes : [
    {path: '/', redirect: '/me'},
    {path: '/me', component: MeInfo},
    {path: '/project', component: Projects},
    {path: '/parcours', component: Parcours}
  ]
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
