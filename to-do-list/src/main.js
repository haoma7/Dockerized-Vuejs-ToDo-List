import { createApp } from 'vue';
import App from './App.vue';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue'

import config from "../config.json"



const app = createApp(App)

app.component('base-card', BaseCard);
    
app.component('base-button', BaseButton);
    
app.component('base-dialog', BaseDialog);
    
app.provide('FirebaseLink', config.ApiBaseUrl)
//app.config.globalProperties.$FirebaseLink = config.ApiBaseUrl

app.mount('#app');





