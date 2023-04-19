import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.component('Loading', Loading)
app.mount('#app')
