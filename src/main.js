import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import {BootstrapVue} from 'bootstrap-vue'
// createApp(App).use(BootstrapVue)
createApp(App).use(router).mount('#app').loadScript("../src/assets/adminPage.js")
//createApp(App).use(router).mount('#app')
