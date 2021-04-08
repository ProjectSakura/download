<template>
  <div class="home center">
    <h3 class="accent welcome">{{ subname }}</h3>
    <Logo width="350px" />

    <ProjectLink />
    <Credits />
  </div>
</template>

<script>
import ProjectLink from "../components/home/ProjectLink.vue";
import Credits from "../components/home/Credits.vue";
import configs from "../configs";
import Logo from "../components/common/Logo";

export default {
  name: "404",
  components: {
    ProjectLink,
    Credits,
    Logo,
  },
  created() {
    document.title = "Project Sakura | Downloads";
    document.head.querySelector("meta[name=description]").content =
      "Project Sakura | Downloads";
  },
  computed: {
    subname() {
      return configs.APP_SUBNAME;
    },
    description() {
      return configs.APP_DESC;
    },
  },
};
</script>
