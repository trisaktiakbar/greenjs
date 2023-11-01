import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/style.css";
import router from "./router";

import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
