import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import 'vue-block/dist/block.css';
import block from 'vue-block';
import router from './router'
import store from './store'

require("@/store/subscriber");
axios.defaults.baseURL = "http://localhost:8000/api";

Vue.config.productionTip = false;

Vue.use(block);

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});