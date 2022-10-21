import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { whoAmI } from './store/useLoginUser'

import './styles/_reset.scss'

createApp(App).use(router).mount('#app')

whoAmI();