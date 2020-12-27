<template>
  <div>
    <div class="credits">
      Project maintained by
      <a href="https://github.com/LordShenron">LordShenron</a> and
      <a href="https://github.com/ArunTeltia">Arun Teltia</a>
    </div>
    <div class="credits">
      Website developed by
      <a href="https://github.com/andersonmendess">andersonmendess</a>
    </div>
  </div>
</template>
<script>
import Search from "../common/Search.vue";

export default {
  name: "Credits",
  components: {
    Search
  },
  data() {
    return {
      credits: [
        {
          title: "Project maintained by",
          value: "LordShenron and",
          url: "https://github.com/LordShenron"
        },
        {
          title: "",
          value: "Arun Teltia",
          url: "https://github.com/ArunTeltia"
        },
        {
          title: "Website Originally developed by",
          value: "andersonmendess",
          url: "https://github.com/andersonmendess"
        }
      ]
    };
  }
};
</script>
