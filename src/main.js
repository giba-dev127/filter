import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import { register } from 'swiper/element'

register()

createApp(App).use(router).mount('#app')
