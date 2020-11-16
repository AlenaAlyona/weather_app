import Vue from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
// import vueDebounce from "vue-debounce";

// Vue.use(vueDebounce);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

Vue.component("v-select", vSelect);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
