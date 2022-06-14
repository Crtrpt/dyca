import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import Dyca from "./Dyca.vue";
import Home from "./Home.vue";
import Center from "./view/Center.vue";
import "./index.css";
import "./Context.css";
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
  faAdd,
  faFolderPlus,
  faFileCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia } from "pinia";

library.add(
  faFolderPlus,
  faFileCirclePlus,
  faAdd,
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

const app = createApp(Dyca);

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

const User = {
  template: "<div>User</div>",
};

const routes = [
  {
    path: "/file/:filepaths*",
    component: Center,
  },
  {
    path: "/",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

app.use(router);

app.mount("#app");
