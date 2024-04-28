<template>
  <div>
    <div class="credits">
      Project maintained by
      <a href="https://github.com/LordShenron">LordShenron</a> and
      <a href="https://github.com/ReveRTX">ReveRTX</a>
    </div>
    <div class="container" style="width:100%">
      <center>
        <script
          type="application/javascript"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <!-- sakura-horizontal-unit-2 -->
        <ins
          class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-1277633863266032"
          data-ad-slot="8931146882"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script type="application/javascript">
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </center>
    </div>
  </div>
</template>
<script>
import Search from "../common/Search.vue";

export default {
  name: "Credits",
  components: {
    Search,
  },
  data() {
    return {
      credits: [
        {
          title: "Project maintained by",
          value: "LordShenron and",
          url: "https://github.com/LordShenron",
        },
        {
          title: "",
          value: "ReveRTX",
          url: "https://github.com/ReveRTX",
        },
      ],
    };
  },
};
</script>
