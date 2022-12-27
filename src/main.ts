import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from './route'

createApp(App).use(routes).mount('#app')
