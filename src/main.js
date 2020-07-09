import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
// import { component as VueCodeHighlight } from "vue-code-highlight";
// import "prismjs";
// import "prismjs/themes/prism-funky.css";
// import "prismjs/components/prism-scss.min";
// import "prismjs/plugins/autolinker/prism-autolinker.min";
// import "prismjs/plugins/autolinker/prism-autolinker.css";
// import Prism from "vue-prism-component";
// Vue.component("prism", Prism);
// import 'prism-es6/components/prism-markup-templating';
// import 'prism-es6/components/prism-php';
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");