import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { variantJS } from "@variantjs/vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFile,
  faFolder,
  faFolderOpen,
  faUserSecret,
  faChevronCircleRight,
  faChevronCircleDown,
  faFolderClosed,
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
  faChevronCircleDown
);

const app = createApp(App);

app.use(variantJS);
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
