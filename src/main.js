import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Directives from './directives/index.js'
const app = createApp(App)

app.use(Directives)
app.use(router).mount('#app')