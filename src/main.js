import { createApp } from 'vue'
import App from './App.vue'
import 'vue-global-api'

import SfVueBackgroundAnimation from './install'

const app = createApp(App)

app.use(SfVueBackgroundAnimation)

app.mount('#app')