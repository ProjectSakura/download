<template>
  <img :src="flag" width="30px" alt="logo" />
</template>
<script>
export default {
  props: ["width", "country"],
  name: "Flag",
  computed: {
    flag() {
      const flags = {
        BR:
          "https://em-content.zobj.net/source/twitter/376/flag-brazil_1f1e7-1f1f7.png",
        BRA:
          "https://em-content.zobj.net/source/twitter/376/flag-brazil_1f1e7-1f1f7.png",
        IND:
          "https://em-content.zobj.net/source/twitter/376/flag-india_1f1ee-1f1f3.png",
        US:
          "https://em-content.zobj.net/source/twitter/376/flag-united-states_1f1fa-1f1f8.png",
        UKR:
          "https://em-content.zobj.net/source/twitter/376/flag-ukraine_1f1fa-1f1e6.png",
        SL:
          "https://em-content.zobj.net/source/twitter/376/flag-sri-lanka_1f1f1-1f1f0.png",
        RUS:
          "https://em-content.zobj.net/source/twitter/376/flag-russia_1f1f7-1f1fa.png",
        ARM:
          "https://em-content.zobj.net/source/twitter/376/flag-armenia_1f1e6-1f1f2.png",
        ID:
          "https://em-content.zobj.net/source/twitter/376/flag-indonesia_1f1ee-1f1e9.png",
        PAK:
          "https://em-content.zobj.net/source/twitter/376/flag-pakistan_1f1f5-1f1f0.png",
        MAUR:
          "https://em-content.zobj.net/source/twitter/376/flag-mauritius_1f1f2-1f1fa.png",
        KAZ:
          "https://em-content.zobj.net/source/twitter/376/flag-kazakhstan_1f1f0-1f1ff.png",
        ALB:
          "https://em-content.zobj.net/source/twitter/376/flag-albania_1f1e6-1f1f1.png",
        GER:
          "https://em-content.zobj.net/source/twitter/376/flag-germany_1f1e9-1f1ea.png",
        GBR:
          "https://em-content.zobj.net/source/twitter/376/flag-united-kingdom_1f1ec-1f1e7.png",
        OM:
          "https://em-content.zobj.net/source/twitter/376/flag-oman_1f1f4-1f1f2.png",
        VN:
          "https://em-content.zobj.net/source/twitter/376/flag-vietnam_1f1fb-1f1f3.png",
        DE:
          "https://em-content.zobj.net/source/twitter/408/flag-germany_1f1e9-1f1ea.png",
        TH:
          "https://em-content.zobj.net/source/twitter/376/flag-thailand_1f1f9-1f1ed.png",
        NZ:
          "https://em-content.zobj.net/source/twitter/376/flag-new-zealand_1f1f3-1f1ff.png",
        PH:          
          "https://em-content.zobj.net/source/twitter/376/flag-philippines_1f1f5-1f1ed.png",
        AUS:          
          "https://em-content.zobj.net/source/twitter/376/flag-australia_1f1e6-1f1fa.png",
        CN:          
          "https://em-content.zobj.net/source/twitter/376/flag-china_1f1e8-1f1f3.png",
        JP:          
          "https://em-content.zobj.net/source/twitter/376/flag-japan_1f1ef-1f1f5.png",
      };

      if (flags[this.country]) {
        return flags[this.country];
      }
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Noflag.PNG/120px-Noflag.PNG";
    },
  },
};
</script>
<style>
img {
  padding-left: 5px;
  padding-top: 5px;
}
</style>
