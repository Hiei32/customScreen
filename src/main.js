import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt';

import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import 'element-plus/lib/theme-chalk/index.css';

let app = createApp(App);
app.config.globalProperties.$bus = new mitt();//绑定数据总线
app
  .use(store)
  .use(router)
  .use(ElementPlus, { locale })
  .mount('#app');
