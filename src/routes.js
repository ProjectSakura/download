import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Device from "./views/Device.vue";
import Changelog from "./views/Changelog.vue";

// eslint-disable-next-line import/prefer-default-export
export const routes = [
  { path: "/download", component: Home, name: "home" },
  { path: "/download/changelog", component: Changelog, name: "changelog" },
  {
    path: "/download/:codename",
    component: Device,
    name: "device",
    children: [
      { path: "/download/:filename?", name: "filename" },
    ],
  },
];
