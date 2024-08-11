import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { faReact, faVuejs, faJs } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub, faLinkedin, faGitlab, faReact, faVuejs, faJs);

import "aos/dist/aos.css";
import AOS from "aos";
const app = createApp(App);

AOS.init({
  duration: 1000,
  once: true,
});

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
