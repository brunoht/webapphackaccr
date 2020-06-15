import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

require("@/store/subscriber");
axios.defaults.baseURL = "https://app.hack.lohl.com.br/api";

Vue.config.productionTip = false;

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});