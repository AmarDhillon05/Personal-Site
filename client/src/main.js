import './assets/main.css'

import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'

import Project from './components/Project.vue'
import Navigator from './components/Navigator.vue'
import Title from './components/Title.vue'

const app = createApp(App)

app.config.globalProperties.$adminProps = {
    "admin" : false,
    changeAdmin: function(){this.admin = !this.admin}
}

app.config.globalProperties.$api_info = {
    "link" :  "https://adh-api-886c24f6ec59.herokuapp.com"
}

app.component("Project", Project)
app.component("Navigator", Navigator)
app.component("Title", Title)

app.use(router)

app.mount('#app')
