require('./bootstrap');

import './assets/styles/layout.scss';
import './assets/demo/flags/flags.css';

import { createApp, reactive } from 'vue';
import router from './router';
import App from './main.vue';
import PrimeVue from 'primevue/config';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';


router.beforeEach(function(to, from, next) {
    window.scrollTo(0, 0);
    next();
});

const app = createApp(App);

app.config.globalProperties.$appState = reactive({ theme: 'saga-blue', darkTheme: true });

app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' });
app.use(ToastService);
app.use(router);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Toast', Toast);



app.mount('#app');
import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
