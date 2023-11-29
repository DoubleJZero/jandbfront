import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import ApiMixin from "./api"

createApp(App).use(routes).mixin(ApiMixin).mount('#app')