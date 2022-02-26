import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router'
import App from './App.vue';
import './assets/styles/index.css';
//Quasar
import {Quasar} from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

// Import Quasar css
import 'quasar/dist/quasar.css'


const store = createPinia()
const app = createApp(App)
app.use(router)
app.use(Quasar, {
    plugins: {}
})
app.use(store)
app.mount('#app')