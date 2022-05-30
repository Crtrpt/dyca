import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFile,
  faFolder,
  faFolderOpen,
  faUserSecret,
  faChevronCircleRight,
  faChevronCircleDown,
  faFolderClosed,
  faSpinner,
  faCircle,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia } from "pinia";

library.add(
  faUserSecret,
  faFile,
  faFolder,
  faFolderOpen,
  faFolderClosed,
  faChevronCircleRight,
  faChevronCircleDown,
  faSpinner,
  faCircleNotch
);

const app = createApp(App);


app.use(createPinia());

app.component("font-awesome-icon", FontAwesomeIcon);

var componentsList = [];

var components = import.meta.globEager("./components/*.vue");
for (const idx in components) {
  componentsList.push(components[idx].default);
}

componentsList.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
