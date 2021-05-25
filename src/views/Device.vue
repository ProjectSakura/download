<template>
  <div>
    <center>
      <script
        type="application/javascript"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <!-- sakura-horizontal-unit-2 -->
      <ins
        class="adsbygoogle"
        style="display: block"
        data-ad-client="ca-pub-1277633863266032"
        data-ad-slot="8931146882"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script type="application/javascript">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-173637831-1"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "UA-173637831-1");
      </script>
    </center>
    <CardHeader />
    <CardBuilds />
  </div>
</template>

<script>
import CardHeader from "../components/device/CardHeader.vue";
import CardBuilds from "../components/device/CardBuilds.vue";

export default {
  name: "Device",
  components: {
    CardHeader,
    CardBuilds,
  },
  created() {
    this.$store.dispatch("fetchBuilds", this.$route.params);
  },
  mounted() {
    console.log(this.$store.state.device);
  },
  watch: {
    "$route.params.codename": {
      handler(params) {
        this.$store.dispatch("filterDevice", { codename: params });
        this.$store.dispatch("fetchBuilds", { codename: params });
      },
    },
  },
};
</script>
