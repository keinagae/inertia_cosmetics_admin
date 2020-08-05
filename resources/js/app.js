try {
  window.$ = window.jQuery = require('jquery');
} catch (e) {
  console.log(e);
}

import Vue from 'vue';
import Cookies from 'js-cookie';
import ElementUI from 'element-ui';
import "./firebase"
import App from './views/App';
import store from './store';
import router from '@/router';
import i18n from './lang'; // Internationalization
import '@/icons'; // icon
import '@/permission'; // permission control
import VCalendar from 'v-calendar';

import * as filters from './filters'; // global filters
import  {firestorePlugin} from "vuefire"

Vue.use(firestorePlugin)

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value),
});

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'vc', // Use <vc-calendar /> instead of <v-calendar />
});

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
});
